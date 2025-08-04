import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Microfluidic Fluorescence Immunoassay | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of microfluidic fluorescence immunoassay systems in Tanzania. Advanced technology for precise fluorescence-based testing with rapid results.",
}

export default function MicrofluidicFluorescencePage() {
  const features = [
    "Microfluidic Technology Platform",
    "Fluorescence Detection Systems",
    "Rapid Immunoassay Testing",
    "High Sensitivity Analysis",
    "Automated Sample Processing",
    "Multi-Parameter Testing Capabilities",
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
            <span className="text-primary-900 font-medium">Microfluidic Fluorescence</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Microfluidic Fluorescence Immunoassay</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's premier supplier of advanced microfluidic technology for precise fluorescence-based
              immunoassays
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
                Next-Generation Immunoassay Technology
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies cutting-edge microfluidic fluorescence immunoassay systems that represent
                  the latest advancement in diagnostic technology across Tanzania. As the country's leading medical
                  equipment supplier, we provide innovative platforms that combine microfluidic precision with
                  fluorescence detection for unparalleled sensitivity and accuracy in immunoassay testing.
                </p>
                <p>
                  Our microfluidic fluorescence systems utilize advanced chip-based technology to perform precise
                  immunoassays with minimal sample volumes and rapid turnaround times. These platforms are designed to
                  deliver exceptional sensitivity and specificity, making them ideal for detecting low-abundance
                  biomarkers and providing reliable results for critical diagnostic applications throughout Tanzania's
                  healthcare facilities.
                </p>
                <p>
                  From point-of-care testing environments to high-throughput laboratory settings, our microfluidic
                  fluorescence immunoassay solutions offer versatility and performance that meets the evolving needs of
                  modern diagnostics. The technology enables simultaneous multi-parameter testing with automated sample
                  processing, reducing hands-on time while maintaining the highest standards of analytical performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image20230825162425-w45ujsfA62hBB2gKF3LTfYO6YxeQQj.webp"
                  alt="Microfluidic Fluorescence Immunoassay Equipment"
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Advanced Microfluidic Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision fluorescence-based immunoassays with exceptional sensitivity and rapid results
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
              Download our comprehensive microfluidic fluorescence immunoassay flier to learn more about our advanced
              technology platforms, testing capabilities, and how we can support your diagnostic needs.
            </p>
            <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Microfluidic Technology Flier
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
