import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coagulation Testing Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of coagulation testing solutions in Tanzania. Advanced hemostasis analyzers and quality reagents for accurate coagulation diagnostics.",
}

export default function CoagulationPage() {
  const features = [
    "PT/INR Testing Systems",
    "APTT Measurement Solutions",
    "Fibrinogen Analysis",
    "D-Dimer Testing",
    "Automated Coagulation Analyzers",
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
            <span className="text-primary-900 font-medium">Coagulation</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Coagulation Testing Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's trusted supplier of advanced coagulation analyzers for precise hemostasis diagnostics
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
                Precision Coagulation Diagnostics
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies comprehensive coagulation testing solutions for accurate hemostasis
                  diagnostics across Tanzania's healthcare facilities. As the country's leading medical equipment
                  supplier, we provide advanced coagulation analyzers and quality reagents sourced from trusted global
                  manufacturers.
                </p>
                <p>
                  Our coagulation portfolio includes automated analyzers capable of performing PT/INR, APTT, fibrinogen,
                  and D-dimer tests with exceptional precision and reliability. These systems are designed to meet the
                  demanding requirements of hospitals, laboratories, and clinics throughout Tanzania, ensuring accurate
                  patient monitoring and treatment decisions.
                </p>
                <p>
                  From point-of-care testing devices for immediate results to high-throughput laboratory analyzers for
                  busy clinical environments, our coagulation solutions provide the flexibility and accuracy needed for
                  optimal patient care. All systems come with comprehensive quality control materials and calibrators to
                  ensure consistent, reliable results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/huma-clots.png"
                  alt="HumaClot Coagulation Analyzers - Made in Germany"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6 text-center">
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">Get Product Details</h3>
                  <p className="text-sm text-gray-600 mb-4">Download our comprehensive coagulation testing flier</p>
                  <Button asChild size="sm" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                    <a
                      href="https://drive.google.com/file/d/1txlsLPiQtbTxIOdyvfML2B7cyyphJJ_I/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Flier
                    </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Comprehensive Coagulation Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete hemostasis solutions for accurate patient monitoring and treatment decisions
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
