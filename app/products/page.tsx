import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Microscope, TestTube, Thermometer, Activity, Beaker, Stethoscope, ArrowRight, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products | Lab Equipment & Medical Supplies | Phomas Diagnostics",
  description:
    "Explore our wide range of laboratory equipment, IVD reagents, consumables, and medical supplies. Phomas Diagnostics delivering quality solutions to science and healthcare sectors in Tanzania.",
}

export default function EquipmentPage() {
  const categories = [
    {
      icon: <Microscope className="h-8 w-8 text-secondary-600" />,
      title: "Analytical Instruments",
      description: "Precision instruments for accurate analysis",
      products: [
        "Spectrophotometers",
        "Chromatography systems",
        "Mass spectrometers",
        "Atomic absorption spectrometers",
      ],
      image: "/images/spectrophotometer.jpeg",
    },
    {
      icon: <TestTube className="h-8 w-8 text-secondary-600" />,
      title: "Laboratory Equipment",
      description: "Essential tools for every laboratory",
      products: ["Centrifuges", "Incubators", "Autoclaves", "Microscopes"],
      image: "/images/incubator.avif",
    },
    {
      icon: <Thermometer className="h-8 w-8 text-secondary-600" />,
      title: "Measuring Instruments",
      description: "Accurate measurement and monitoring tools",
      products: ["pH meters", "Conductivity meters", "Thermometers", "Balances and scales"],
      image: "/images/ph-meter.webp",
    },
    {
      icon: <Activity className="h-8 w-8 text-secondary-600" />,
      title: "Diagnostic Equipment",
      description: "Advanced diagnostic and monitoring systems",
      products: ["Blood analyzers", "Urine analyzers", "Immunoassay systems", "Point-of-care devices"],
      image: "/images/hematology-analyzer.avif",
    },
    {
      icon: <Beaker className="h-8 w-8 text-secondary-600" />,
      title: "Reagents & Consumables",
      description: "High-quality reagents and laboratory supplies",
      products: ["Clinical chemistry reagents", "Immunoassay kits", "Laboratory glassware", "Disposable supplies"],
      image: "/images/lab-reagents.jpeg",
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-secondary-600" />,
      title: "Medical Supplies",
      description: "Essential medical equipment and supplies",
      products: ["Patient monitoring systems", "Surgical instruments", "Medical disposables", "Safety equipment"],
      image: "/images/patient-monitor.jpeg",
    },
  ]

  const features = [
    "International quality standards",
    "Comprehensive warranty coverage",
    "Technical support and training",
    "Competitive pricing",
    "Fast delivery across Tanzania",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive range of laboratory equipment, medical supplies, and diagnostic tools
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">Explore our comprehensive range of medical and laboratory equipment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-48 md:h-full bg-gray-50">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center mb-2">
                        {category.icon}
                        <CardTitle className="text-xl text-primary-900 ml-3">{category.title}</CardTitle>
                      </div>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-2">
                        {category.products.map((product, productIndex) => (
                          <Badge key={productIndex} variant="secondary" className="mr-2 mb-2">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Featured Equipment</h2>
            <p className="text-xl text-gray-600">Professional-grade equipment for modern laboratories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/microscope.jpeg"
                  alt="Professional Laboratory Microscope"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Laboratory Microscopes</h3>
                <p className="text-gray-600 text-sm mb-4">
                  High-precision optical microscopes for detailed specimen analysis and research applications.
                </p>
                <Badge variant="outline" className="text-secondary-600 border-secondary-600">
                  Professional Grade
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/hematology-analyzer.avif"
                  alt="Hematology Analyzer"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Hematology Analyzers</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Advanced blood analysis systems for complete blood count and differential analysis.
                </p>
                <Badge variant="outline" className="text-secondary-600 border-secondary-600">
                  Diagnostic Equipment
                </Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/patient-monitor.jpeg"
                  alt="Patient Monitoring System"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Patient Monitors</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Real-time vital signs monitoring systems for critical care and patient safety.
                </p>
                <Badge variant="outline" className="text-secondary-600 border-secondary-600">
                  Medical Devices
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Why Choose Our Products?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We partner with leading global manufacturers to bring you the highest quality medical and laboratory
                equipment, backed by comprehensive support.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-secondary-600 rounded-full p-1 mr-3">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl p-8">
                <Image
                  src="/images/incubator.avif"
                  alt="Laboratory Incubator"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Access Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Access to 4+ Million Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through our partnership with Avantor/VWR, we provide access to an extensive catalog of laboratory and
              medical products from leading global manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4M+
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Products Available</h3>
                <p className="text-gray-600">Comprehensive catalog of laboratory and medical supplies</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  500+
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Global Brands</h3>
                <p className="text-gray-600">Leading manufacturers and trusted brands worldwide</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  24/7
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Order Processing</h3>
                <p className="text-gray-600">Round-the-clock order management and support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Specific Equipment?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Contact us for custom quotes and specialized equipment sourcing through
            our global network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Send Inquiry
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-900"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
