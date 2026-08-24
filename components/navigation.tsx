"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-story", label: "Our Story" },
    { href: "/products", label: "Products" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Phomas Diagnostics Logo"
              width={240}
              height={72}
              className="h-11 sm:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-primary-900" : "text-gray-600 hover:text-primary-900",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-secondary-600 transition-transform origin-left",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              )
            })}
            <Link
              href="https://shop.phomasdiagnosticstz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-900 text-white hover:bg-primary-800 active:scale-95 px-4 py-2 ml-3 rounded-full text-sm font-medium transition-all shadow-sm shadow-primary-900/20"
            >
              <ShoppingCart className="h-4 w-4" />
              SHOP
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-3 text-base font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-primary-900 bg-secondary-50"
                        : "text-gray-700 hover:text-primary-900 hover:bg-gray-50",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href="https://shop.phomasdiagnosticstz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary-900 text-white active:scale-[0.98] px-3 py-3 mt-2 rounded-lg text-base font-medium transition-transform"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="h-4 w-4" />
                SHOP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
