import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Laboratory Equipment | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of laboratory equipment in Tanzania. High-quality instruments from essential tools to specialized equipment for laboratories worldwide.",
}

export default function LaboratoryEquipmentPage() {
  const features = [
    "HumaPette Pipettes",
    "HuMax Centrifuges",
    "Mixers, Shakers and Rollers",
    "Incubators | Waterbath",
    "Water Purification Systems",
    "Specialized Diagnostic Instruments",
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
            <span className="text-primary-900 font-medium">Laboratory Equipment</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Laboratory Equipment</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's premier supplier of high-quality laboratory equipment for laboratories worldwide
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
                Comprehensive Laboratory Solutions
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies a diverse range of high-quality laboratory equipment designed to meet the
                  needs of laboratories across Tanzania. As the country's leading medical equipment supplier, we provide
                  instruments that deliver precision, reliability, and ease of use for healthcare facilities nationwide.
                </p>
                <p>
                  From essential tools for everyday laboratory tasks to specialized instruments for specific diagnostic
                  processes, our products deliver precision, reliability, and ease of use. We source our laboratory
                  equipment from trusted global manufacturers, ensuring that Tanzania's laboratories have access to
                  world-class technology.
                </p>
                <p>
                  Our comprehensive portfolio includes precision pipettes, high-performance centrifuges, mixing and
                  shaking equipment, incubators and water baths, water purification systems, and specialized diagnostic
                  instruments. Each product is selected to meet the demanding requirements of modern laboratory
                  operations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/magnus-microscope-lab-equipment.jpeg"
                  alt="Magnus MLX Plus Laboratory Microscope"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">Product Information</h3>
                    <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                      <Download className="mr-2 h-5 w-5" />
                      Download Equipment Flier
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Explore Our Laboratory Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential and specialized instruments for comprehensive laboratory operations
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

          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Precision Temperature Control</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/lab-incubator.png"
                  alt="Laboratory Incubators and Water Baths"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-gray-600 mt-4">
                Advanced incubators and water baths for precise temperature control in your laboratory processes
              </p>
            </div>
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
