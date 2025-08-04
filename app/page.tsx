import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, Truck, Users, Award } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-secondary-600" />,
      title: "Global Partnership",
      description: "Access to over 4 million products through our partnership with Avantor/VWR",
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary-600" />,
      title: "Direct Delivery",
      description: "From local LPO collection to doorstep delivery across Tanzania",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-600" />,
      title: "Expert Support",
      description: "Professional guidance and responsive customer service",
    },
    {
      icon: <Award className="h-8 w-8 text-secondary-600" />,
      title: "Quality Assured",
      description: "International standard products for healthcare and research",
    },
  ]

  const services = [
    "Laboratory Equipment Supply",
    "IVD Reagents & Consumables",
    "Medical Supplies Distribution",
    "Custom Order Management",
    "Consultancy & Support",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                Empowering Healthcare Innovation in Tanzania
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
                Phomas Diagnostics, partnered with Avantor/VWR, provides laboratory equipment, IVD reagents,
                consumables, and medical supplies, offering over 4 million global products delivered to your doorstep.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 text-base sm:text-lg"
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-scientist.jpeg"
                  alt="Laboratory Scientist at Work"
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
              We bridge the gap between cutting-edge global technology and Tanzania's healthcare needs
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

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Comprehensive Medical Supply Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From hospitals and private labs to academic institutions and industrial partners, we provide tailored
                solutions that meet your specific needs.
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
                  Learn More About Our Services <ArrowRight className="ml-2 h-5 w-5" />
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {/* Partner Logo Placeholders */}
            {Array.from({ length: 11 }, (_, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-secondary-600 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                  <div className="text-gray-400 text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded"></div>
                    <span className="text-xs font-medium">Partner {index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hospitals, labs, and research institutions across Tanzania who trust Phomas Diagnostics for their
            medical supply needs.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
