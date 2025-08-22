import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Urinalysis Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of urinalysis solutions in Tanzania. Advanced urine analysis systems with AI technology and automated analyzers for comprehensive testing.",
}

export default function UrinaryPage() {
  const features = [
    "Innovative AI-based Urine Microscopy",
    "HumaCombina Test Strips",
    "HumaCombilyzer - Portable Urine Test Strip Reader",
    "Digital Holographic Microscopy Technology",
    "Automated Urine Analysis Systems",
    "Visual and Automated Assessment Capabilities",
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
            <span className="text-primary-900 font-medium">Urinalysis</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Urinalysis Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's premier supplier of advanced urinalysis systems for comprehensive urine testing
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Advanced Urinalysis Solutions</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies advanced solutions for comprehensive urinalysis, including both chemical
                  and sediment analysis. As Tanzania's trusted medical equipment supplier, we provide cutting-edge
                  urinalysis systems that leverage the latest technology for accurate and efficient urine testing.
                </p>
                <p>
                  Our cutting-edge HumaVision system leverages digital holographic microscopy and AI technology to
                  accurately identify and count urine particles with precision. This innovative approach ensures
                  reliable results while reducing manual intervention and improving laboratory efficiency.
                </p>
                <p>
                  For chemical analysis, the HumaCombilyzer urine test strip reader offers reliable results for 10 or 13
                  parameters, including microalbumin and creatinine testing. Our HumaCombina test strips are designed
                  for both visual assessment and automated analysis, ensuring flexibility and efficiency in every
                  laboratory setting across Tanzania.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/humacomb-urine.png"
                  alt="HumaCombilyzer Urine Analysis System with Test Strips"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Download Product Information</h3>
                    <p className="text-gray-600 mb-4">Get detailed specifications and technical information</p>
                    <Button asChild className="bg-secondary-600 hover:bg-secondary-700 text-white">
                      <a
                        href="https://drive.google.com/file/d/1-6jBKMyWSNGQz14B4SPUnndLzAZFN_ap/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Urinalysis Flier
                      </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Explore Our Urinalysis Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive urinalysis solutions combining traditional methods with cutting-edge AI technology
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Complete Urinalysis Solutions</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our full range of urinalysis equipment including the HumaVision AI microscopy system,
              HumaCombilyzer strip readers, and comprehensive testing solutions for modern laboratories.
            </p>
            <Button asChild size="lg" className="bg-primary-900 hover:bg-primary-800 text-white">
              <Link href="/contact">Request Consultation</Link>
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
