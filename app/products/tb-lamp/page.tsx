import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import Section from "@/components/ui/section"

export const metadata: Metadata = {
  title: "TB-LAMP Testing Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of TB-LAMP testing solutions in Tanzania. Innovative tuberculosis detection using LAMP technology for rapid and accurate TB diagnosis.",
}

export default function TbLampPage() {
  const features = [
    "Loop-mediated Isothermal Amplification (LAMP)",
    "Rapid TB Detection",
    "Drug Resistance Testing",
    "Point-of-Care Capabilities",
    "High Sensitivity and Specificity",
    "User-Friendly Operation",
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
            <span className="text-primary-900 font-medium">TB-LAMP</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TB-LAMP Testing Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's trusted supplier of innovative tuberculosis detection solutions using advanced LAMP technology
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
                Revolutionary TB Detection Technology
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies innovative TB-LAMP (Loop-mediated Isothermal Amplification) testing
                  solutions that revolutionize tuberculosis detection across Tanzania. As the country's leading medical
                  equipment supplier, we provide advanced LAMP technology that enables rapid, accurate TB diagnosis with
                  exceptional sensitivity and specificity, crucial for effective TB control programs throughout
                  Tanzania.
                </p>
                <p>
                  Our TB-LAMP systems utilize cutting-edge isothermal amplification technology that operates at a
                  constant temperature, eliminating the need for complex thermal cycling equipment. This innovative
                  approach enables rapid TB detection in as little as 60 minutes, making it ideal for point-of-care
                  testing in resource-limited settings while maintaining laboratory-quality accuracy and reliability.
                </p>
                <p>
                  The TB-LAMP technology we supply is particularly valuable for Tanzania's TB control efforts, offering
                  drug resistance testing capabilities and user-friendly operation that requires minimal training. These
                  systems are designed to function effectively in various healthcare settings, from rural clinics to
                  urban hospitals, supporting early TB detection and appropriate treatment initiation across the
                  country.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/961000_HumaLoop_T_961000_12072018152744-20180713053001269.467be29e-nveOh6T3BiVYofsGdTuDKdG792vRwO.png"
                  alt="TB-LAMP Testing Equipment - HumaLoop T"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Download Product Information</h3>
                    <p className="text-gray-600 mb-4">Get detailed TB-LAMP testing specifications</p>
                    <Button asChild className="bg-secondary-600 hover:bg-secondary-700 text-white">
                      <a
                        href="https://drive.google.com/file/d/1rjhdnQ3yjCStPSOiGqfAWEyjQD4L9G3G/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download TB-LAMP Flier
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
      <Section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Advanced TB Detection Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rapid, accurate tuberculosis diagnosis with innovative LAMP technology for effective TB control
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
      </Section>

      {/* Download Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">TB Control Solutions</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn how our TB-LAMP technology can enhance your tuberculosis control programs with rapid, accurate
              detection and drug resistance testing capabilities.
            </p>
            <Button asChild size="lg" className="bg-primary-900 hover:bg-primary-800 text-white">
              <Link href="/contact">Request TB Solutions Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section className="py-12 bg-gray-50">
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
      </Section>
    </div>
  )
}
