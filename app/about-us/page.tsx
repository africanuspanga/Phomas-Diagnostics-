import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Globe, ArrowRight, Award, Microscope, TestTube, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Phomas Diagnostics | Reliable Lab Equipment Supplier Tanzania",
  description:
    "Learn about Phomas Diagnostics, a leading distributor of lab equipment, IVD reagents, and medical supplies in Tanzania. Partnering with Avantor/VWR to deliver global solutions locally.",
}

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

const expertiseAreas = [
  {
    icon: Microscope,
    title: "Clinical Diagnostics",
    description:
      "Advanced analyzers for clinical chemistry, hematology, and coagulation testing with throughput from 30-80 samples per hour",
  },
  {
    icon: TestTube,
    title: "Laboratory Equipment",
    description:
      "Precision instruments including HumaPette pipettes, centrifuges, incubators, and water purification systems",
  },
  {
    icon: Heart,
    title: "Critical Care Solutions",
    description:
      "Blood gas analyzers, electrolyte systems, and point-of-care devices for emergency and intensive care applications",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "CE-marked products meeting European standards with comprehensive quality control materials and calibrators",
  },
]

const stats = [
  { icon: Calendar, value: "2018", label: "Founded" },
  { icon: Globe, value: "4M+", label: "Global Products" },
  { icon: MapPin, value: "Tanzania", label: "Nationwide Coverage" },
  { icon: Users, value: "10+", label: "Years Experience" },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-us-doctor.jpeg"
            alt="Professional Doctor in Medical Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6">
              <Calendar className="h-4 w-4 text-secondary-500" />
              Advancing healthcare innovation since 2018
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-secondary-100">
                Phomas Diagnostics
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl">
              Tanzania&apos;s premier medical supply partner, advancing healthcare innovation since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-900 leading-tight mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  In 2018, we embarked on a mission that would transform how healthcare facilities across Tanzania
                  access world-class medical equipment and diagnostic solutions. What started as a vision has grown into
                  Tanzania&apos;s most trusted medical supply partnership.
                </p>
                <p>
                  Our founders recognized a critical gap in Tanzania&apos;s healthcare infrastructure: while the country
                  had skilled medical professionals and growing healthcare facilities, access to reliable, high-quality
                  diagnostic equipment remained limited. We set out to change that reality.
                </p>
                <p>
                  By building strategic partnerships with world-renowned manufacturers like Human Diagnostics,
                  BioMérieux, and Tulip Diagnostics, we created a bridge between global innovation and local healthcare
                  needs. Through our partnership with Avantor/VWR, we now provide access to over 4 million laboratory
                  and production products.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-scientist.jpeg"
                  alt="Laboratory scientist at work"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-900">4M+</div>
                  <div className="text-sm text-gray-500">Global Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-600 to-secondary-700 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-secondary-600/25 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-900 leading-tight mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive solutions across all major laboratory disciplines with proven reliability and technical
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-600 to-secondary-700 flex items-center justify-center mb-6 shadow-lg shadow-secondary-600/25 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
              Milestones
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-900 leading-tight mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">Key milestones in our growth and development</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-secondary-600/20" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative text-center group">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-secondary-600 to-secondary-700 text-white flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg shadow-secondary-600/25 group-hover:scale-110 transition-transform duration-300">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 group-hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-semibold text-secondary-600 mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-primary-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-500 mb-3">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 hover:bg-white/10 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4 text-secondary-500">Our Mission</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                To support the scientific, healthcare, research, and industrial sectors by providing reliable,
                high-quality products and exceptional service that meets international standards. We deliver CE-marked
                equipment with comprehensive technical support to ensure optimal laboratory performance.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 hover:bg-white/10 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4 text-secondary-500">Our Vision</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                To be Tanzania&apos;s leading partner in advancing health, research, and innovation through world-class
                medical supplies and laboratory equipment. We envision a future where every healthcare facility has
                access to reliable diagnostic solutions that improve patient outcomes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 shadow-lg shadow-secondary-600/30"
            >
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
