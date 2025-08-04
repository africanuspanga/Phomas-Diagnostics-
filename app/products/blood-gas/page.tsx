import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blood Gas Analysis Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of blood gas analyzers in Tanzania. Critical care solutions for rapid patient monitoring in emergency and intensive care settings.",
}

export default function BloodGasPage() {
  const features = [
    "pH and Blood Gas Analysis",
    "Electrolyte Measurement",
    "Glucose and Lactate Testing",
    "Critical Care Analyzers",
    "Point-of-Care Testing Solutions",
    "Quality Control Systems",
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
            <span className="text-primary-900 font-medium">Blood Gas</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blood Gas Analysis Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's premier supplier of critical care blood gas analyzers for rapid patient monitoring
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Critical Care Blood Gas Solutions
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies advanced blood gas analyzers designed for critical care environments
                  across Tanzania. As the country's leading medical equipment supplier, we provide rapid, accurate blood
                  gas analysis solutions that are essential for emergency departments, intensive care units, and
                  operating theaters throughout Tanzania's healthcare facilities.
                </p>
                <p>
                  Our blood gas analyzers deliver comprehensive testing capabilities including pH, pCO2, pO2,
                  electrolytes, glucose, and lactate measurements with results available in minutes. These systems are
                  engineered for reliability and ease of use, ensuring healthcare professionals can make critical
                  treatment decisions quickly and confidently.
                </p>
                <p>
                  From compact point-of-care devices for bedside testing to high-performance laboratory analyzers for
                  central lab operations, our blood gas solutions provide the speed and accuracy required in critical
                  care settings. All systems include comprehensive quality control features and are supported by our
                  expert technical team across Tanzania.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLOODGAS__ILWW__GEM5000-CHEMSTAT.jpg-lNcUPtMMy6EAOuRVuQQcbI5SU0QeQA.jpeg"
                  alt="Blood Gas Analysis Equipment - GEM ChemSTAT and GEM 5000"
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Rapid Critical Care Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blood gas analysis for immediate patient assessment and treatment decisions
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
              Download our comprehensive blood gas analysis flier to learn more about our complete range of analyzers,
              testing capabilities, and how we can support your critical care needs.
            </p>
            <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Blood Gas Analysis Flier
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
