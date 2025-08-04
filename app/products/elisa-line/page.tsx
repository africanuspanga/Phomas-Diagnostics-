import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ELISA Line Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of ELISA solutions in Tanzania. Over 100 assays and fully automated analyzers for diverse diagnostic needs.",
}

export default function ElisaLinePage() {
  const features = [
    "Broad ELISA Assay Panel",
    "Elisys Automated Analyzer",
    "ELISA Readers",
    "ELISA Workstation",
    "Over 100 Available Assays",
    "Plug&Run Technology",
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/products" className="hover:text-primary-900 transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-900 font-medium">ELISA Line</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ELISA Line</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's trusted supplier of comprehensive ELISA solutions for laboratories of all sizes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Comprehensive ELISA Solutions</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  As Tanzania's premier medical equipment supplier, Phomas Diagnostics provides versatile ELISA
                  solutions for laboratories of all sizes, from low to high throughput. Our ELISA product line offers
                  reliable solutions sourced from leading global manufacturers with over 50 years of experience in ELISA
                  technology.
                </p>
                <p>
                  We supply over 100 assays available for detecting infectious diseases, hormones, tumor markers,
                  allergies, and autoimmune diseases. Our ELISA solutions are designed for maximum flexibility and
                  user-friendly operation, ensuring optimal performance for Tanzania's healthcare sector.
                </p>
                <p>
                  Our range includes reliable and efficient instruments for comprehensive ELISA diagnostics, from
                  semi-automated instruments like the HumaReader series, ideal for low throughput, to fully automated
                  analyzers such as the Elisys Uno, Duo, and Quattro, designed for high-volume labs.
                </p>
                <p>
                  Thanks to advanced Plug&Run technology, almost all assays come pre-programmed and validated, ensuring
                  quick and intuitive processing for your laboratory operations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/112479-10218972.jpg-MZDy2ThDambjEs6iHFVf7pi8Uaq3Ds.jpeg"
                  alt="ELISA Laboratory Equipment"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Perfect Matching of All Components for Quality and Efficiency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ELISA solutions ensure optimal performance through perfectly matched components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Get Detailed Product Information</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Download our comprehensive ELISA line flier to learn more about our complete range of assays, analyzers,
              and how we can support your laboratory needs.
            </p>
            <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <a
                href="https://drive.google.com/file/d/1edlmmHkONgxZGdkeRFYGSVTfLASa798a/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download ELISA Line Flier
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white bg-transparent"
            >
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
            <Button asChild className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
