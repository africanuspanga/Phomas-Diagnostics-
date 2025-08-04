import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Phomas Diagnostics Logo"
                width={200}
                height={60}
                className="h-10 md:h-12 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
              Your trusted partner in laboratory equipment, IVD reagents, consumables, and medical supplies in Tanzania.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-secondary-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-300 text-xs md:text-sm text-center sm:text-left">
                  Mikocheni-B, Msikitini Road
                  <br />
                  Block 254, House No 66
                  <br />
                  Dar es Salaam TZ 76317
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-secondary-600 mr-2" />
                <p className="text-gray-300 text-sm md:text-base">0764 266 277</p>
              </div>
              <div className="flex items-start justify-center sm:justify-start">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-secondary-600 mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-gray-300 text-xs md:text-sm text-center sm:text-left">
                  <p>Mon–Fri: 8am–5pm</p>
                  <p>Sat–Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-gray-300 text-xs md:text-sm">
            © {new Date().getFullYear()} Phomas Diagnostics and Medical Supplies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
