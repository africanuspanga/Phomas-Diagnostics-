import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Microbiology Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of microbiology solutions in Tanzania. Comprehensive pathogen identification and antimicrobial susceptibility testing systems.",
}

export default function MicrobiologyPage() {
  const features = [
    "Automated Identification Systems",
    "Antimicrobial Susceptibility Testing",
    "Blood Culture Systems",
    "Rapid Diagnostic Tests",
    "Culture Media and Reagents",
    "Quality Control Materials",
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
            <span className="text-primary-900 font-medium">Microbiology</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Microbiology Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's trusted supplier of comprehensive microbiology systems for pathogen identification and testing
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
                Advanced Microbiology Diagnostics
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies comprehensive microbiology solutions for accurate pathogen identification
                  and antimicrobial susceptibility testing across Tanzania's healthcare facilities. As the country's
                  leading medical equipment supplier, we provide advanced microbiology systems that enable laboratories
                  to deliver rapid, reliable results for infectious disease diagnosis and treatment guidance.
                </p>
                <p>
                  Our microbiology portfolio includes automated identification and susceptibility testing systems, blood
                  culture analyzers, and rapid diagnostic platforms that streamline laboratory workflows while
                  maintaining the highest standards of accuracy. These systems are designed to handle the diverse
                  microbiology testing needs of hospitals, reference laboratories, and clinical facilities throughout
                  Tanzania.
                </p>
                <p>
                  From traditional culture methods to cutting-edge molecular diagnostics, our microbiology solutions
                  provide comprehensive testing capabilities for bacteria, fungi, and other pathogens. All systems are
                  supported by high-quality culture media, reagents, and quality control materials to ensure consistent,
                  reliable results that healthcare professionals can trust for patient care decisions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real-time-pcr-1-JOSyHoZKE7v73jeuMvMnJkGUqNda37.webp"
                  alt="Microbiology Laboratory Equipment - Real-time PCR System"
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Comprehensive Microbiology Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete pathogen identification and antimicrobial susceptibility solutions for infectious disease
              management
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
              Download our comprehensive microbiology solutions flier to learn more about our complete range of systems,
              testing capabilities, and how we can support your laboratory needs.
            </p>
            <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Microbiology Solutions Flier
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
