import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Clock, Shield, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rapid Test Kits | Point-of-Care Diagnostics | Phomas Diagnostics Tanzania",
  description:
    "Professional rapid diagnostic test kits for immediate results. AllTest rapid tests for various conditions including infectious diseases, cardiac markers, and more.",
}

export default function RapidTestPage() {
  const rapidTestTypes = [
    "COVID-19 Antigen Tests",
    "Hepatitis B Surface Antigen (HBsAg)",
    "Dengue Combo (IgG/IgM/NS1)",
    "Malaria P.f/P.v Tests",
    "Cardiac Markers (Troponin, CK-MB)",
    "Pregnancy Tests (hCG)",
    "Drug of Abuse Tests",
    "Infectious Disease Panels",
  ]

  const keyFeatures = [
    {
      icon: Clock,
      title: "Rapid Results",
      description: "Get accurate results in 10-20 minutes",
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "Clinically validated with >95% sensitivity",
    },
    {
      icon: Users,
      title: "Easy to Use",
      description: "Simple procedure, minimal training required",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "CE marked and WHO approved products",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Rapid Diagnostic Test Kits</h1>
              <p className="text-xl text-gray-200 mb-8">
                Professional-grade rapid test kits for immediate point-of-care diagnostics. Trusted by healthcare
                professionals across Tanzania for accurate and reliable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary-900 hover:bg-gray-100">
                  <Link href="/contact">Contact for Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/rapid-test-kits.jpeg"
                alt="AllTest Rapid Diagnostic Test Kits"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Why Choose Our Rapid Test Kits?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our rapid diagnostic tests provide healthcare professionals with reliable, fast, and accurate results for
              better patient care decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-secondary-600" />
                  </div>
                  <CardTitle className="text-xl text-primary-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Test Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Available Rapid Test Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of rapid diagnostic tests for various medical conditions and screening requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rapidTestTypes.map((test, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-secondary-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{test}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-12 bg-gray-50">
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
    </div>
  )
}
