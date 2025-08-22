import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Package, Shield, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consumables | Laboratory Supplies | Phomas Diagnostics Tanzania",
  description:
    "Essential laboratory consumables and single-use supplies for healthcare operations. Quality reagents, test strips, and disposable items from trusted manufacturers.",
}

export default function ConsumablesPage() {
  const consumableCategories = [
    "Sample Centrifugation",
    "Specimen Collection",
    "Cryogenic",
    "Liquid handling",
    "Microbiology",
    "Tube racks",
    "PCR Tube",
    "Histopathology",
    "Cell culture",
    "Specimen Swabs",
    "Blood Collection tube",
    "Test Tubes & Containers",
    "Autoclavable bags",
  ]

  const keyFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-secondary-600" />,
      title: "Quality Assured",
      description: "All consumables meet the strictest international standards for healthcare applications",
    },
    {
      icon: <Package className="h-8 w-8 text-secondary-600" />,
      title: "Complete Range",
      description: "Comprehensive selection of single-use and regularly replenished laboratory supplies",
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary-600" />,
      title: "Reliable Supply",
      description: "Consistent availability and timely delivery to support uninterrupted laboratory operations",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="outline"
            className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white bg-transparent"
          >
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Consumables</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                The Consumables category provides an extensive range of single-use and regularly replenished supplies
                that are vital to healthcare operations. These items play a crucial role in maintaining hygiene,
                preventing infection, and ensuring smooth day-to-day clinical practice.
              </p>
              <p className="text-lg text-gray-300">
                We source our consumables to meet the strictest standards, giving healthcare professionals confidence in
                every procedure.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/lab-consumables.jpeg"
                alt="Laboratory Consumables"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Why Choose Our Consumables</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential supplies that healthcare professionals trust for daily operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consumables Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Consumables Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of laboratory consumables for all your healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {consumableCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-primary-900">{category}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Images Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Laboratory Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our consumables support critical laboratory functions including sample preparation, specimen collection,
                and analytical testing. Each product is carefully selected to ensure compatibility with modern
                laboratory workflows.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-600" />
                  <span className="text-gray-700">Sterile and contamination-free packaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-600" />
                  <span className="text-gray-700">Compatible with major laboratory equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-600" />
                  <span className="text-gray-700">Consistent quality and performance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/lab-consumables.jpeg"
                alt="Laboratory Consumables Setup"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Specific Consumables?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact our specialists to discuss your consumables requirements and ensure you have the right supplies for
            your laboratory operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Link href="/contact">Contact Our Specialists</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-900 bg-transparent"
            >
              <Link href="/products">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
