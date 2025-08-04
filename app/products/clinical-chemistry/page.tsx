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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16090_T2.824b8646-8D2L8XsDkgfgMyt1jdidTQo9KHqIQf.png"
                  alt="Clinical Chemistry Laboratory Equipment"
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

      {/* Download Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Get Detailed Product Information</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Download our comprehensive clinical chemistry product flier to learn more about our complete range of
              solutions, specifications, and how we can support your laboratory needs.
            </p>
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
