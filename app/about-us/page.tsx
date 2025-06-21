import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Globe, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Phomas Diagnostics | Reliable Lab Equipment Supplier Tanzania",
  description:
    "Learn about Phomas Diagnostics, a leading distributor of lab equipment, IVD reagents, and medical supplies in Tanzania. Partnering with Avantor/VWR to deliver global solutions locally.",
}

export default function AboutUsPage() {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Phomas Diagnostics established in Dar es Salaam, Tanzania",
    },
    {
      year: "2020",
      title: "Market Expansion",
      description: "Extended services to major hospitals and research institutions",
    },
    {
      year: "2023",
      title: "Global Partnership",
      description: "Strategic partnership with Avantor/VWR launched",
    },
    {
      year: "2024",
      title: "4M+ Products",
      description: "Access to over 4 million global products for our customers",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Phomas Diagnostics</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Advancing health, research, and innovation in Tanzania since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics and Medical Supplies Ltd was founded in 2018 and is headquartered in Dar es Salaam,
                  Tanzania. We are a registered distributor specializing in laboratory equipment, IVD reagents, medical
                  supplies, and consumables.
                </p>
                <p>
                  Our mission is to support the scientific, healthcare, research, and industrial sectors by providing
                  reliable, high-quality products and exceptional service that meets international standards.
                </p>
                <p>
                  Through our strategic partnership with Avantor/VWR — a global leader in the supply of production
                  products for science laboratories, pharmaceutical manufacturers, universities, research institutions,
                  and the food production industry — we offer customers in Tanzania access to over 4 million laboratory
                  and production products.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-scientist.jpeg"
                  alt="Professional Scientist Using Microscope"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary-900 mb-2">2018</h3>
              <p className="text-gray-600">Founded</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary-900 mb-2">4M+</h3>
              <p className="text-gray-600">Global Products</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary-900 mb-2">Tanzania</h3>
              <p className="text-gray-600">Nationwide Coverage</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary-900 mb-2">100+</h3>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth and development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-secondary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-secondary-400">Our Mission</h3>
              <p className="text-lg text-gray-200">
                To support the scientific, healthcare, research, and industrial sectors by providing reliable,
                high-quality products and exceptional service that meets international standards.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-secondary-400">Our Vision</h3>
              <p className="text-lg text-gray-200">
                To be Tanzania's leading partner in advancing health, research, and innovation through world-class
                medical supplies and laboratory equipment.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700">
              <Link href="/contact">
                Partner with Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
