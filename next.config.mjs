/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;

/**
 * SECURITY HEADERS - Configure these on your hosting provider (Nginx, Cloudflare, Vercel, etc.)
 * Since this is a static export, headers must be set at the server/CDN level.
 *
 * Required headers for production:
 *
 *   Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
 *   X-Content-Type-Options: nosniff
 *   X-Frame-Options: SAMEORIGIN
 *   X-XSS-Protection: 1; mode=block
 *   Referrer-Policy: strict-origin-when-cross-origin
 *   Permissions-Policy: camera=(), microphone=(), geolocation=(self), interest-cohort=()
 *   Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://images.unsplash.com blob:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-src 'self'; frame-ancestors 'self'; form-action 'self'; base-uri 'self'; object-src 'none'
 */
