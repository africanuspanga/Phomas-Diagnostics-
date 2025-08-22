import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clinical Chemistry Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of clinical chemistry solutions in Tanzania. Advanced reagents, systems, photometers, and ISE analyzers for modern laboratories.",
}

export default function ClinicalChemistryPage() {
  const features = [
    "Clinical Chemistry Reagents",
    "Calibration and Quality Control",
    "HumaStar Systems and HumaStar Analyzer",
    "HumaLyzer Photometer",
    "HumaLyte ISE Systems",
    "External Quality Assessment (EQA) Programs",
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
            <span className="text-primary-900 font-medium">Clinical Chemistry</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Clinical Chemistry Line</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's trusted supplier of advanced clinical chemistry solutions for modern laboratories
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
                Advanced Clinical Chemistry Solutions
              </h2>

              <div className="mb-8">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">Download Product Information</h3>
                  <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                    <a
                      href="https://drive.google.com/file/d/1g4SKkn9CSl3VP9n5sbep-6_MMI-0Sdel/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Clinical Chemistry Flier
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  As Tanzania's leading medical equipment supplier, Phomas Diagnostics provides a comprehensive range of
                  clinical chemistry solutions from world-renowned manufacturers. Our clinical chemistry line
                  encompasses advanced reagents, systems, photometers, and ISE analyzers designed to meet the demands of
                  modern laboratories across Tanzania.
                </p>
                <p>
                  We supply state-of-the-art analyzers and systems that emphasize functionality and workflow
                  requirements to meet contemporary customer and market demands. Our clinical chemistry solutions are
                  sourced from leading global manufacturers, ensuring the highest quality and reliability.
                </p>
                <p>
                  Our fast-growing line of high-quality products – all meeting high European standards (CE mark) –
                  continues to be the essence of our success in serving Tanzania's healthcare sector.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CC_SYSTEM-IkUVOaCHbrAUgNmh9jofDqEtw6hhuU.png"
                  alt="HumaStar 300SR Clinical Chemistry Analyzer"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HumaStar Product Line Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              HumaStar Clinical Chemistry Analyzer Series
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete range of HumaStar analyzers to meet your laboratory's throughput requirements
            </p>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-5xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CC_Workload%20%285%29-OoGOOPdflu2nPdChrUfFwKw38nUO3B.png"
                alt="HumaStar Clinical Chemistry Analyzer Series - HumaStar 100, 200, 300SR, and 600"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
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
              Our clinical chemistry solutions ensure optimal performance through perfectly matched components
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
