import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autoimmune Diagnostics | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of autoimmune diagnostic solutions in Tanzania. High-quality test systems for autoimmune diseases with ELISAs, LIAs, and automated solutions.",
}

export default function AutoImmunePage() {
  const features = [
    "Rheumatology Testing Solutions",
    "Hepatology Diagnostic Systems",
    "Gastroenterology Test Panels",
    "Endocrinology Assays",
    "Advanced Instruments and Analyzers",
    "AID Technologies Integration",
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
            <span className="text-primary-900 font-medium">AUTO Immune</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Autoimmune Diagnostics</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's trusted supplier of advanced autoimmune diagnostic solutions for precise disease detection
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Precision Autoimmune Diagnostics</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies in-vitro diagnostic products for medical laboratories across Tanzania,
                  adhering to international quality standards. We provide high-quality test systems for autoimmune
                  diseases in the field of laboratory diagnostics, sourced from leading global manufacturers.
                </p>
                <p>
                  For over 30 years, our supplied products have been synonymous with high-quality, forward-thinking
                  solutions in autoimmune diagnostics. ELISAs (enzyme linked immuno sorbent assay) and LIAs (line
                  immunoassays) are developed and produced by dedicated teams of experts, ensuring reliable results for
                  Tanzania's healthcare sector.
                </p>
                <p>
                  Additionally, rapid screening tests are available, featuring disease-specific antigens, along with
                  automated solutions for LIA and ELISA processing. Our comprehensive portfolio covers rheumatology,
                  hepatology, gastroenterology, endocrinology, and advanced instrument technologies.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/aid-instruments.png"
                  alt="AID Autoimmune Diagnostic Instruments"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-6">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">Get Product Information</h3>
                  <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                    <Download className="mr-2 h-5 w-5" />
                    Download Autoimmune Diagnostics Flier
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Explore Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive autoimmune diagnostic solutions for diverse medical specialties
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
