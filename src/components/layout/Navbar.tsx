"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/logo.png"
                alt="KPR Homes - We create landmarks"
                width={160}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 mx-4">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 flex items-center gap-1 whitespace-nowrap group/navlink",
                    pathname === item.href
                      ? "text-gold-400"
                      : "text-white hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                  {pathname !== item.href && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gold-400 rounded-full origin-left scale-x-0 group-hover/navlink:scale-x-100 transition-transform duration-300" />
                  )}
                </Link>

                {/* Active indicator */}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gold-400 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-card-hover overflow-hidden min-w-[200px]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            "block px-5 py-3 text-sm transition-all duration-200",
                            pathname === child.href
                              ? "bg-gold-50 text-gold-700 font-medium"
                              : "text-charcoal-700 hover:bg-navy-50 hover:text-navy-900"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <a
              href="tel:+919849351276"
              className="hidden lg:flex items-center gap-2 text-white hover:text-gold-400 transition-colors text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98493 51276</span>
            </a>
            <Link
              href="/cost-estimator"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-gold text-navy-900 font-semibold text-sm rounded-lg hover:shadow-gold-lg transition-all duration-300 whitespace-nowrap"
            >
              Get Estimate
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-navy-950 xl:hidden"
          >
            <div className="pt-24 px-6 pb-6 h-full overflow-y-auto">
              <nav className="flex flex-col gap-2">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200",
                        pathname === item.href
                          ? "text-gold-400 bg-white/5"
                          : "text-white hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-6 mt-1 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2 text-sm rounded-lg transition-all duration-200",
                              pathname === child.href
                                ? "text-gold-400"
                                : "text-white hover:text-white"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/cost-estimator"
                  className="block w-full text-center px-6 py-3 bg-gradient-gold text-navy-900 font-semibold rounded-lg"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+919849351276"
                  className="flex items-center justify-center gap-2 mt-4 text-white hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 98493 51276</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
