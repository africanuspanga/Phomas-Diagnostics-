import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Microscope,
  TestTube,
  Truck,
  ClipboardList,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Globe,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Medical Supply Solutions | Phomas Diagnostics Tanzania",
  description:
    "Comprehensive medical supply services including laboratory equipment, IVD reagents, consultancy, and global product sourcing through our Avantor/VWR partnership in Tanzania.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Microscope className="h-12 w-12 text-secondary-600" />,
      title: "Laboratory Equipment Supply",
      description: "Modern, high-quality lab tools for every application",
      features: [
        "Analytical instruments",
        "Microscopy equipment",
        "Centrifuges and separators",
        "Spectrophotometers",
        "pH meters and electrodes",
      ],
    },
    {
      icon: <TestTube className="h-12 w-12 text-secondary-600" />,
      title: "IVD Reagents & Consumables",
      description: "Wide range of diagnostic reagents and consumable supplies",
      features: [
        "Clinical chemistry reagents",
        "Immunoassay kits",
        "Molecular diagnostics",
        "Laboratory consumables",
        "Quality control materials",
      ],
    },
    {
      icon: <Truck className="h-12 w-12 text-secondary-600" />,
      title: "Medical & Laboratory Supplies Distribution",
      description: "Efficient sourcing and local delivery of essential products",
      features: [
        "Nationwide delivery network",
        "Cold chain management",
        "Inventory management",
        "Just-in-time delivery",
        "Emergency supply services",
      ],
    },
    {
      icon: <ClipboardList className="h-12 w-12 text-secondary-600" />,
      title: "Custom Order Management",
      description: "Seamless ordering through our Avantor/VWR partnership",
      features: [
        "Local LPO collection",
        "Global product sourcing",
        "Order tracking system",
        "Direct facility delivery",
        "Bulk order discounts",
      ],
    },
    {
      icon: <HeadphonesIcon className="h-12 w-12 text-secondary-600" />,
      title: "Consultancy & Support",
      description: "Expert guidance on equipment selection and optimization",
      features: [
        "Equipment selection advice",
        "Installation support",
        "Training services",
        "Maintenance guidance",
        "Technical troubleshooting",
      ],
    },
  ]

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "We understand your specific needs and requirements",
    },
    {
      step: "2",
      title: "Sourcing",
      description: "Access to 4M+ products through our global network",
    },
    {
      step: "3",
      title: "Processing",
      description: "Local LPO collection and order management",
    },
    {
      step: "4",
      title: "Delivery",
      description: "Direct delivery to your facility across Tanzania",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive medical supply solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">What We Provide</h2>
            <p className="text-xl text-gray-600">End-to-end solutions for healthcare and research institutions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <CardTitle className="text-xl text-primary-900 ml-4">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">From consultation to delivery - a seamless experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-8 w-full">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Global Partnership, Local Service
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Through our strategic partnership with Avantor/VWR, we bring you access to over 4 million laboratory
                  and production products from leading global manufacturers.
                </p>
                <p>
                  Our unique service model combines the convenience of local LPO collection with the reliability of
                  direct delivery to your facility, ensuring you get what you need, when you need it.
                </p>
              </div>
              <div className="flex items-center mt-8 p-6 bg-gradient-to-r from-secondary-100 to-primary-100 rounded-lg">
                <Globe className="h-12 w-12 text-secondary-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-900">4+ Million Products</h3>
                  <p className="text-gray-600">Available through our global network</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/medical-facility.jpeg"
                  alt="Modern Medical Facility and Equipment"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your medical supply needs and discover how we can support your healthcare or
            research objectives.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700">
              <Link href="/products">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
