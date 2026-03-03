#!/usr/bin/env node
/**
 * Post-build script to fix absolute paths in Next.js static export
 * so it works when opened directly from file:// protocol.
 *
 * Run after `next build`:
 *   node fix-paths.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const OUT_DIR = join(process.cwd(), "out");

// ── Helpers ──────────────────────────────────────────────────────────────────

function walkDir(dir, callback) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkDir(full, callback);
    else callback(full);
  }
}

function getDepth(filePath) {
  const rel = relative(OUT_DIR, filePath).replace(/\\/g, "/");
  return rel.split("/").length - 1;
}

function getPrefix(depth) {
  if (depth === 0) return ".";
  return Array(depth).fill("..").join("/");
}

// ── Navigation fixer for file:// protocol ────────────────────────────────────
// Intercepts link clicks and redirects to correct .html files.
// Only active when opened via file:// (no effect on hosted sites).

const NAV_FIXER_SCRIPT = `<script>
(function(){
  if(location.protocol!=='file:')return;
  var d=parseInt(document.documentElement.dataset.depth||'0');
  var p=d===0?'./':new Array(d+1).join('../');

  // Fix navigation links for file:// protocol
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href]');
    if(!a)return;
    var h=a.getAttribute('href');
    if(!h||h.startsWith('#')||h.startsWith('http')||h.startsWith('//')||h.startsWith('tel:')||h.startsWith('mailto:'))return;
    if(!h.startsWith('/'))return;
    e.preventDefault();
    e.stopPropagation();
    var hash='',hi=h.indexOf('#');
    if(hi!==-1){hash=h.substring(hi);h=h.substring(0,hi);}
    var t=h==='/'?'index.html':h.slice(1)+'.html';
    location.href=p+t+hash;
  },true);

  // Fix image/asset paths that React hydration reverts to absolute
  function fixSrc(el,attr){
    var v=el.getAttribute(attr);
    if(v&&v.startsWith('/')&&!v.startsWith('//')&&!v.startsWith('file:')){
      el.setAttribute(attr,p+v.slice(1));
    }
  }
  function fixAll(){
    document.querySelectorAll('img[src^="/"]').forEach(function(i){fixSrc(i,'src');});
    document.querySelectorAll('link[href^="/"]').forEach(function(l){fixSrc(l,'href');});
  }
  // Fix after React hydration (runs on DOM ready + short delay)
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(fixAll,50);});}
  else{setTimeout(fixAll,50);}
  // MutationObserver catches React re-renders that revert paths
  new MutationObserver(function(muts){
    muts.forEach(function(m){
      if(m.type==='attributes'){
        var t=m.target;
        if(t.tagName==='IMG'&&m.attributeName==='src')fixSrc(t,'src');
        if(t.tagName==='LINK'&&m.attributeName==='href')fixSrc(t,'href');
      }
      if(m.addedNodes)m.addedNodes.forEach(function(n){
        if(n.nodeType===1){
          if(n.tagName==='IMG')fixSrc(n,'src');
          n.querySelectorAll&&n.querySelectorAll('img[src^="/"]').forEach(function(i){fixSrc(i,'src');});
        }
      });
    });
  }).observe(document.documentElement,{attributes:true,attributeFilter:['src','href'],childList:true,subtree:true});
})();
</script>`;

// ── Process HTML files ───────────────────────────────────────────────────────

let htmlCount = 0;

walkDir(OUT_DIR, (filePath) => {
  if (!filePath.endsWith(".html")) return;

  let content = readFileSync(filePath, "utf-8");
  const depth = getDepth(filePath);
  const prefix = getPrefix(depth);
  const rel = relative(OUT_DIR, filePath).replace(/\\/g, "/");

  // Add data-depth attribute to <html> for nav fixer script
  content = content.replace(/<html /, `<html data-depth="${depth}" `);

  // Fix /_next/ asset paths (CSS, JS, font preloads)
  // Handles: href="/_next/...", src="/_next/...", \"/_next/...\" in inline scripts
  content = content.replace(/(\\?["'(])(\/_next\/)/g, `$1${prefix}/_next/`);

  // Fix /images/ paths
  content = content.replace(/(\\?["'(])(\/(images)\/)/g, `$1${prefix}/images/`);

  // Fix /Kpr logo/ paths
  content = content.replace(/(\\?["'(])(\/Kpr logo\/)/g, `$1${prefix}/Kpr logo/`);
  content = content.replace(/(\\?["'(])(\/Kpr%20logo\/)/g, `$1${prefix}/Kpr%20logo/`);

  // Fix manifest.json
  content = content.replace(/(\\?["'(])(\/manifest\.json)/g, `$1${prefix}/manifest.json`);

  // Fix favicon.ico
  content = content.replace(/(\\?["'(])(\/favicon\.ico)/g, `$1${prefix}/favicon.ico`);

  // Fix robots.txt
  content = content.replace(/(\\?["'(])(\/robots\.txt)/g, `$1${prefix}/robots.txt`);

  // Fix sitemap.xml
  content = content.replace(/(\\?["'(])(\/sitemap\.xml)/g, `$1${prefix}/sitemap.xml`);

  // Inject navigation fixer script before </head>
  content = content.replace("</head>", NAV_FIXER_SCRIPT + "</head>");

  writeFileSync(filePath, content);
  htmlCount++;
  console.log(`  HTML: ${rel} (depth=${depth}, prefix=${prefix})`);
});

// ── Process CSS files ────────────────────────────────────────────────────────
// Fix font url() references: url(/_next/static/media/xxx) → url(../media/xxx)
// CSS files are at _next/static/css/, fonts are at _next/static/media/

let cssCount = 0;

walkDir(join(OUT_DIR, "_next"), (filePath) => {
  if (!filePath.endsWith(".css")) return;

  let content = readFileSync(filePath, "utf-8");

  if (content.includes("url(/_next/static/media/")) {
    content = content.replaceAll(
      "url(/_next/static/media/",
      "url(../media/"
    );
    writeFileSync(filePath, content);
    cssCount++;
    console.log(
      `  CSS:  ${relative(OUT_DIR, filePath).replace(/\\/g, "/")} (fixed font urls)`
    );
  }
});

console.log(`\nDone! Fixed ${htmlCount} HTML files and ${cssCount} CSS files.`);
console.log("Open out/index.html in your browser to view the site.");
