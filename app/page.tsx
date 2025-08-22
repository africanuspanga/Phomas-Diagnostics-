import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, Truck, Users, Award, Microscope, TestTube, Heart, Zap } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-secondary-600" />,
      title: "Global Partnership",
      description:
        "Access to over 4 million products through our partnership with Avantor/VWR and world-class manufacturers",
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary-600" />,
      title: "Nationwide Delivery",
      description: "From local LPO collection to doorstep delivery across Tanzania with reliable logistics",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-600" />,
      title: "Expert Support",
      description: "30+ years of experience with comprehensive technical support and training",
    },
    {
      icon: <Award className="h-8 w-8 text-secondary-600" />,
      title: "Quality Assured",
      description: "CE-marked products meeting European standards for healthcare and research excellence",
    },
  ]

  const services = [
    "Clinical Chemistry Analyzers & Reagents",
    "Hematology Systems (3-part to 5-part differentiation)",
    "Microbiology Solutions & Culture Media",
    "Blood Gas & Electrolyte Analysis",
    "Coagulation Testing Equipment",
    "Laboratory Equipment & Precision Instruments",
    "Autoimmune Diagnostics & ELISAs",
    "Quality Control Materials & Calibrators",
  ]

  const productHighlights = [
    {
      icon: <Microscope className="h-6 w-6 text-secondary-600" />,
      title: "Advanced Diagnostics",
      description: "From 30-80 samples/hour throughput to point-of-care solutions",
    },
    {
      icon: <TestTube className="h-6 w-6 text-secondary-600" />,
      title: "Complete Testing Solutions",
      description: "PT/INR, APTT, fibrinogen, D-dimer, and comprehensive panels",
    },
    {
      icon: <Heart className="h-6 w-6 text-secondary-600" />,
      title: "Critical Care Ready",
      description: "Emergency and intensive care applications with rapid results",
    },
    {
      icon: <Zap className="h-6 w-6 text-secondary-600" />,
      title: "Proven Reliability",
      description: "30+ years of proven performance in autoimmune diagnostics",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                Tanzania's Premier Medical Supply Partner
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
                Phomas Diagnostics delivers world-class laboratory equipment, diagnostic analyzers, and medical supplies
                from trusted global manufacturers. From clinical chemistry to autoimmune diagnostics, we provide
                comprehensive solutions for healthcare facilities nationwide.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 text-base sm:text-lg"
                >
                  <Link href="/products">
                    Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-female-doctor-vaccine.jpeg"
                  alt="Female Doctor Working on Vaccine Research"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Why Choose Phomas Diagnostics?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bridge the gap between cutting-edge global technology and Tanzania's healthcare needs with proven
              expertise and reliable support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Advanced Laboratory Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small clinics to large hospital laboratories, our equipment delivers precise results with proven
              reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {productHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 p-3 bg-secondary-50 rounded-full w-16 h-16 mx-auto items-center">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Comprehensive Medical & Laboratory Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From hospitals and private labs to academic institutions and research facilities, we provide CE-marked
                equipment and comprehensive support that meets your specific diagnostic needs.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-secondary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 bg-secondary-600 hover:bg-secondary-700 text-white">
                <Link href="/contact">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/medical-supplies.png"
                  alt="Medical Laboratory Equipment and Supplies"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with world-class manufacturers and suppliers to bring you the highest quality medical
              equipment and laboratory supplies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/runlab-logo.png"
                alt="Runlab"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/alltest-logo.png"
                alt="AllTest"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/meling-logo.png"
                alt="Meling Biomedical"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/magnus-logo.jpeg"
                alt="Magnus"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/liofilchem-logo.jpeg"
                alt="Liofilchem"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/qca-logo.png"
                alt="QCA"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/tulip-logo.png"
                alt="Tulip Diagnostics"
                width={160}
                height={80}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/biomerieux-logo.png"
                alt="BioMérieux"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/eaglenos-logo.png"
                alt="Eaglenos"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/human-logo.png"
                alt="Human Diagnostics Worldwide"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group flex items-center justify-center">
              <Image
                src="/images/partners/vacure-logo.jpeg"
                alt="VACURE"
                width={120}
                height={60}
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Interested in partnering with us? We're always looking for innovative companies to collaborate with.
            </p>
            <Button asChild className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Link href="/contact">
                Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Laboratory?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hospitals, labs, and research institutions across Tanzania who trust Phomas Diagnostics for reliable,
            world-class medical equipment and diagnostic solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Link href="/products">View Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-900 bg-transparent"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
