import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hematology Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of hematology solutions in Tanzania. Automated CBC products for laboratories of all sizes with precision and reliability.",
}

export default function HematologyPage() {
  const features = [
    "Automated 3-part differentiation",
    "Automated 5-part differentiation",
    "Erythrocyte Sedimentation Rate (ESR)",
    "Hematocrit Measurement",
    "C-reactive protein (CRP) detection",
    "Benchtop centrifuge for hematocrit (HCT) measurement",
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
            <span className="text-primary-900 font-medium">Hematology</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hematology Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's premier supplier of advanced hematology equipment for accurate blood analysis
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Precision Hematology Solutions</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies cutting-edge hematology solutions that offer the precision, reliability,
                  and ease of use laboratories require to deliver timely and accurate diagnoses for patients. As
                  Tanzania's trusted medical equipment supplier, we provide hematology solutions designed to meet the
                  needs of laboratories of all sizes.
                </p>
                <p>
                  Our automated hematology (CBC) products are designed for small to large laboratories, offering
                  throughput ranges from 30 to 80 samples per hour. We supply 3-part and 5-part differential systems,
                  with the option of C-reactive protein (CRP) detection, sourced from leading global manufacturers.
                </p>
                <p>
                  To further support your laboratory's hematology needs, we also supply benchtop centrifuges for
                  hematocrit (HCT) measurement and erythrocyte sedimentation rate (ESR) instruments capable of
                  processing up to 24 samples per hour.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16450_T2.f4decb44-z2Ka6HqPCVj6P9KL7ZN2jrqzN9WewC.png"
                  alt="Hematology Analyzer Equipment"
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Explore Our Hematology Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hematology solutions for laboratories of all sizes across Tanzania
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
              Download our comprehensive hematology solutions flier to learn more about our complete range of analyzers,
              specifications, and how we can support your laboratory needs.
            </p>
            <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Hematology Solutions Flier
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
