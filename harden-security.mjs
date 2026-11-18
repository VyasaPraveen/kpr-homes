#!/usr/bin/env node
/**
 * Post-build security hardening script for KPR Homes static export.
 *
 * Run AFTER `next build` and `fix-paths.mjs`:
 *   node harden-security.mjs
 *
 * What it does:
 * 1. Injects security meta tags into every HTML <head>
 * 2. Scans for malware indicators and removes external scripts
 * 3. Generates .htaccess with full security headers (Apache)
 * 4. Generates _headers file (Netlify/Cloudflare Pages)
 * 5. Generates security.txt (RFC 9116)
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from "fs";
import { join, relative } from "path";

const OUT_DIR = join(process.cwd(), "out");
const DOMAIN = "https://kprhomes.in";

// ── Security meta tags to inject into <head> ──────────────────────────────────

const SECURITY_META = [
  '    <!-- Security Hardening -->',
  '    <meta http-equiv="X-Content-Type-Options" content="nosniff">',
  '    <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">',
  '    <meta http-equiv="X-XSS-Protection" content="1; mode=block">',
  '    <meta name="referrer" content="strict-origin-when-cross-origin">',
  "    <meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'none'; frame-ancestors 'self'; form-action 'self' https://wa.me; base-uri 'self'; object-src 'none'; upgrade-insecure-requests;\">",
  '    <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(self), payment=(), usb=(), interest-cohort=()">',
].join("\n");

// ── Malware indicators to scan for ────────────────────────────────────────────

const MALWARE_PATTERNS = [
  { pattern: /eval\s*\(\s*atob\s*\(/gi, name: "Base64 eval (common malware)" },
  { pattern: /eval\s*\(\s*unescape\s*\(/gi, name: "Unescape eval (obfuscated code)" },
  { pattern: /document\.write\s*\(\s*unescape/gi, name: "document.write unescape" },
  { pattern: /String\.fromCharCode\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+/gi, name: "CharCode obfuscation" },
  { pattern: /\bwindow\[['"]\\x/gi, name: "Hex-encoded window access" },
  { pattern: /<iframe[^>]*src\s*=\s*['"]https?:\/\//gi, name: "Hidden iframe injection" },
  { pattern: /\.php\b/gi, name: "PHP file reference (suspicious in static site)" },
  { pattern: /crypto\.?miner|coinhive|coin-?hive/gi, name: "Cryptocurrency miner" },
  { pattern: /keylog|keystroke|key_log/gi, name: "Keylogger indicator" },
  { pattern: /new\s+WebSocket\s*\(\s*['"]/gi, name: "WebSocket connection (C2 channel)" },
  { pattern: /navigator\.sendBeacon/gi, name: "sendBeacon (data exfiltration)" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function walkDir(dir, callback) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkDir(full, callback);
    else callback(full);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// STEP 1: Scan and harden HTML files
// ══════════════════════════════════════════════════════════════════════════════

console.log("\n=== KPR Homes Security Hardening ===\n");
console.log("[1/5] Scanning and hardening HTML files...\n");

let htmlCount = 0;
let threatCount = 0;
const threats = [];

walkDir(OUT_DIR, (filePath) => {
  if (!filePath.endsWith(".html")) return;

  let content = readFileSync(filePath, "utf-8");
  const rel = relative(OUT_DIR, filePath).replace(/\\/g, "/");

  // Scan for malware patterns
  for (const { pattern, name } of MALWARE_PATTERNS) {
    pattern.lastIndex = 0;
    const matches = content.match(pattern);
    if (matches) {
      threats.push({ file: rel, threat: name, count: matches.length });
      threatCount += matches.length;
      console.log("  !! THREAT: " + rel + " - " + name + " (" + matches.length + " match(es))");
    }
  }

  // Remove any external script injections (not from _next or self)
  const externalScriptRegex = /<script[^>]*src\s*=\s*['"]https?:\/\/(?!images\.unsplash)[^'"]*['"][^>]*>\s*<\/script>/gi;
  const externalScripts = content.match(externalScriptRegex);
  if (externalScripts) {
    console.log("  !! REMOVED " + externalScripts.length + " external script(s) from " + rel);
    content = content.replace(externalScriptRegex, "<!-- [REMOVED: external script blocked by security policy] -->");
    threatCount += externalScripts.length;
  }

  // Inject security meta if not already present
  if (!content.includes('http-equiv="X-XSS-Protection"')) {
    content = content.replace(/<head([^>]*)>/, "<head$1>\n" + SECURITY_META);
  }

  writeFileSync(filePath, content);
  htmlCount++;
});

console.log("\n  Hardened " + htmlCount + " HTML files.");

if (threatCount > 0) {
  console.log("\n  *** WARNING: " + threatCount + " potential threat(s) detected! ***");
  console.log("  Review the threats above carefully.\n");
} else {
  console.log("  No malware indicators found. Site appears clean.\n");
}

// ══════════════════════════════════════════════════════════════════════════════
// STEP 2: Generate .htaccess (Apache)
// ══════════════════════════════════════════════════════════════════════════════

console.log("[2/5] Generating .htaccess for Apache servers...");

const htaccess = `# ============================================================
# KPR Homes - Security-Hardened .htaccess
# Generated: ` + new Date().toISOString() + `
# ============================================================

# ── Force HTTPS ──────────────────────────────────────────────
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# ── Security Headers ────────────────────────────────────────
<IfModule mod_headers.c>
    # Prevent MIME type sniffing
    Header always set X-Content-Type-Options "nosniff"

    # Prevent clickjacking
    Header always set X-Frame-Options "SAMEORIGIN"

    # XSS Protection
    Header always set X-XSS-Protection "1; mode=block"

    # HSTS - Force HTTPS for 2 years
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"

    # Referrer Policy
    Header always set Referrer-Policy "strict-origin-when-cross-origin"

    # Content Security Policy
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'none'; frame-ancestors 'self'; form-action 'self' https://wa.me; base-uri 'self'; object-src 'none'; upgrade-insecure-requests;"

    # Permissions Policy
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), interest-cohort=()"

    # Prevent information leakage
    Header always unset X-Powered-By
    Header always unset Server
    ServerSignature Off

    # Cache static assets aggressively
    <FilesMatch "\\.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico|webp)$">
        Header set Cache-Control "public, max-age=31536000, immutable"
    </FilesMatch>

    # No cache for HTML (always serve fresh to prevent stale malware)
    <FilesMatch "\\.html$">
        Header set Cache-Control "no-cache, no-store, must-revalidate"
        Header set Pragma "no-cache"
        Header set Expires "0"
    </FilesMatch>

    # Cross-Origin policies
    Header always set Cross-Origin-Opener-Policy "same-origin"
    Header always set Cross-Origin-Resource-Policy "same-origin"
</IfModule>

# ── Block Malicious Requests ─────────────────────────────────
<IfModule mod_rewrite.c>
    # Block WordPress attack paths (common bot targets)
    RewriteRule ^(wp-admin|wp-login|wp-content|wp-includes|xmlrpc|administrator|admin\\.php) - [F,L]

    # Block PHP execution entirely (this is a static HTML site)
    RewriteRule \\.php$ - [F,L]

    # Block shell/executable scripts
    RewriteRule \\.(sh|bash|cgi|pl|py|rb|exe|dll|bat|cmd|asp|aspx|jsp)$ - [F,L]

    # Block SQL injection attempts in query strings
    RewriteCond %{QUERY_STRING} (union|select|insert|drop|delete|update|concat|benchmark|extractvalue|load_file|information_schema) [NC]
    RewriteRule .* - [F,L]

    # Block XSS injection via URL
    RewriteCond %{QUERY_STRING} (<script|%3Cscript|javascript:|vbscript:|onload=|onerror=|onclick=|onmouseover=) [NC]
    RewriteRule .* - [F,L]

    # Block directory traversal
    RewriteCond %{QUERY_STRING} (\\.\\.\\/) [NC]
    RewriteRule .* - [F,L]

    # Block null bytes
    RewriteCond %{QUERY_STRING} (%00|\\x00) [NC]
    RewriteRule .* - [F,L]

    # Block suspicious user agents (scanners, bots, attack tools)
    RewriteCond %{HTTP_USER_AGENT} (havij|sqlmap|nikto|netsparker|acunetix|w3af|nmap|masscan|zgrab|dirbuster|gobuster|nuclei|httpx) [NC]
    RewriteRule .* - [F,L]
</IfModule>

# ── Block access to sensitive files ──────────────────────────
<FilesMatch "(^\\.ht|\\.env|\\.git|\\.bak|\\.old|\\.sql|\\.tar|\\.gz|\\.zip|\\.log|composer\\.json|package\\.json|package-lock\\.json|Thumbs\\.db|\\.DS_Store|\\.yml|\\.yaml)$">
    <IfModule mod_authz_core.c>
        Require all denied
    </IfModule>
</FilesMatch>

# ── Prevent directory listing ────────────────────────────────
Options -Indexes -FollowSymLinks

# ── Block access to hidden directories ───────────────────────
RedirectMatch 403 /\\.(.*)$

# ── GZIP Compression ────────────────────────────────────────
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# ── Removed pages (keep old links working) ───────────────────
RedirectMatch 301 ^/refer(\\.html|\\.txt)?/?$ /contact

# ── Clean URLs: /about -> about.html (links, canonicals & sitemap use these) ──
<IfModule mod_rewrite.c>
    RewriteCond %{REQUEST_URI} !\\.
    RewriteCond %{DOCUMENT_ROOT}/$1.html -f
    RewriteRule ^(.+?)/?$ /$1.html [L]
</IfModule>

# ── Custom error pages ───────────────────────────────────────
ErrorDocument 404 /404.html
ErrorDocument 403 /404.html
ErrorDocument 500 /404.html

# BEGIN JARVIS-HARDENING-V2
<FilesMatch "(?i)^(wp-config|\\.htaccess|\\.htpasswd|\\.env|php)\\..*">
Require all denied
</FilesMatch>
<FilesMatch "(?i)\\.(bak|old|orig|save|swp|swo|tmp|temp|copy|backup|pre[-_a-z0-9]*|dist|inc|log|sql|sh|zip|tar|gz|tgz|7z|rar|pem|key|crt|csv|json~)([-._][a-z0-9]+)*$">
Require all denied
</FilesMatch>
<FilesMatch "(?i)^\\..*">
Require all denied
</FilesMatch>
# END JARVIS-HARDENING-V2
`;

writeFileSync(join(OUT_DIR, ".htaccess"), htaccess);
console.log("  Created: out/.htaccess\n");

// ══════════════════════════════════════════════════════════════════════════════
// STEP 3: Generate _headers (Netlify/Cloudflare Pages)
// ══════════════════════════════════════════════════════════════════════════════

console.log("[3/5] Generating _headers for Netlify/Cloudflare...");

const headersFile = `# Security Headers for KPR Homes
# Generated: ` + new Date().toISOString() + `

/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(self), payment=(), usb=(), interest-cohort=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'none'; frame-ancestors 'self'; form-action 'self' https://wa.me; base-uri 'self'; object-src 'none'; upgrade-insecure-requests;
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin

# Cache static assets
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable

# Never cache HTML
/*.html
  Cache-Control: no-cache, no-store, must-revalidate
`;

writeFileSync(join(OUT_DIR, "_headers"), headersFile);
console.log("  Created: out/_headers\n");

// ══════════════════════════════════════════════════════════════════════════════
// STEP 4: Generate security.txt (RFC 9116)
// ══════════════════════════════════════════════════════════════════════════════

console.log("[4/5] Generating security.txt...");

const wellKnownDir = join(OUT_DIR, ".well-known");
if (!existsSync(wellKnownDir)) mkdirSync(wellKnownDir, { recursive: true });

const securityTxt = [
  "Contact: mailto:kprprojects.ind@gmail.com",
  "Contact: tel:+919849351276",
  "Expires: 2027-04-04T00:00:00.000Z",
  "Preferred-Languages: en, te",
  "Canonical: " + DOMAIN + "/.well-known/security.txt",
  "Policy: " + DOMAIN + "/privacy",
  "",
].join("\n");

writeFileSync(join(wellKnownDir, "security.txt"), securityTxt);
writeFileSync(join(OUT_DIR, "security.txt"), securityTxt);
console.log("  Created: out/.well-known/security.txt\n");

// ══════════════════════════════════════════════════════════════════════════════
// STEP 5: Summary Report
// ══════════════════════════════════════════════════════════════════════════════

console.log("[5/5] Security scan summary\n");
console.log("  +-------------------------------------------+");
console.log("  |  KPR Homes Security Hardening Report      |");
console.log("  +-------------------------------------------+");
console.log("  |  HTML files hardened:     " + String(htmlCount).padStart(3) + "              |");
console.log("  |  Threats detected:        " + String(threatCount).padStart(3) + "              |");
console.log("  |  .htaccess (Apache):      Yes              |");
console.log("  |  _headers (CDN):          Yes              |");
console.log("  |  security.txt:            Yes              |");
console.log("  |  CSP meta tags:           Yes              |");
console.log("  |  XSS protection:          Yes              |");
console.log("  |  HSTS ready:              Yes              |");
console.log("  |  Clickjack protection:    Yes              |");
console.log("  |  SQL injection blocking:  Yes              |");
console.log("  |  PHP execution blocked:   Yes              |");
console.log("  |  Bot scanner blocked:     Yes              |");
console.log("  +-------------------------------------------+");

if (threatCount === 0) {
  console.log("  |  STATUS: CLEAN - No malware detected      |");
} else {
  console.log("  |  STATUS: REVIEW NEEDED - Threats found!    |");
}
console.log("  +-------------------------------------------+\n");

if (threats.length > 0) {
  console.log("  Threat details:");
  threats.forEach((t) => {
    console.log("    - " + t.file + ": " + t.threat + " (" + t.count + "x)");
  });
  console.log("");
}

console.log("  Upload the entire 'out/' folder to your server root.");
console.log("  The .htaccess file handles all security at server level.\n");
