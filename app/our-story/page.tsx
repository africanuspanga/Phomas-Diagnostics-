import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Globe, Award, TestTube } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story | Phomas Diagnostics - Advancing Healthcare in Tanzania",
  description:
    "Discover the journey of Phomas Diagnostics from a vision to Tanzania's premier medical supply partner. Learn about our mission to advance healthcare innovation across East Africa.",
}

const milestones = [
  {
    year: "2018",
    title: "The Vision Begins",
    description:
      "Founded with a mission to bridge the gap between global medical technology and Tanzania's healthcare needs",
  },
  {
    year: "2020",
    title: "Building Trust",
    description: "Established partnerships with leading hospitals and research institutions across Tanzania",
  },
  {
    year: "2023",
    title: "Global Reach",
    description: "Strategic alliance with Avantor/VWR opens access to 4+ million international products",
  },
  {
    year: "2024",
    title: "Innovation Forward",
    description: "Expanding into cutting-edge diagnostics and precision laboratory equipment",
  },
]

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every product we supply ultimately serves to improve patient outcomes and save lives",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "CE-marked products meeting European standards with comprehensive quality assurance",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "Building lasting relationships with healthcare providers through trust and reliability",
  },
  {
    icon: Globe,
    title: "Global Standards, Local Service",
    description: "World-class products delivered with personalized, responsive local support",
  },
]

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-scientist.jpeg"
            alt="Scientist working in a modern laboratory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-secondary-800/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6">
            <Heart className="h-4 w-4 text-secondary-500" />
            Since 2018
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-secondary-100">
              Story
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transforming healthcare delivery across Tanzania through innovation, partnership, and unwavering commitment
            to excellence
          </p>
        </div>
      </section>

      {/* Story Introduction */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
              How It Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-900 leading-tight mb-6">
              From Vision to Reality
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In 2018, we embarked on a mission that would transform how healthcare facilities across Tanzania access
              world-class medical equipment and diagnostic solutions. What started as a vision has grown into
              Tanzania&apos;s most trusted medical supply partnership.
            </p>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Our founders recognized a critical gap in Tanzania&apos;s healthcare infrastructure: while the country had
              skilled medical professionals and growing healthcare facilities, access to reliable, high-quality
              diagnostic equipment remained limited. Too often, healthcare providers had to compromise on quality or
              wait months for essential supplies.
            </p>
            <p>
              We set out to change that reality. By building strategic partnerships with world-renowned manufacturers
              like Human Diagnostics, BioMérieux, and Tulip Diagnostics, we created a bridge between global innovation
              and local healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Continued Story */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-last lg:order-first">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/our-story-researcher.jpeg"
                  alt="African Woman Biochemist Researcher Working in Modern Laboratory"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-900">4M+</div>
                  <div className="text-sm text-gray-500">Products Available</div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
                Where We Are Today
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight mb-8">
                Building Excellence Through Partnership
              </h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  Today, we&apos;re proud to serve hospitals, private laboratories, academic institutions, and research
                  facilities across Tanzania. Our partnership with Avantor/VWR has opened access to over 4 million
                  products, ensuring that no healthcare provider has to compromise on quality.
                </p>
                <p>
                  From clinical chemistry analyzers processing 80 samples per hour to precision pipettes enabling
                  groundbreaking research, every product in our portfolio is selected for its proven reliability and
                  adherence to international standards.
                </p>
                <p>
                  But our story isn&apos;t just about products—it&apos;s about the lives improved, the diagnoses made
                  possible, and the research breakthroughs enabled by the tools we provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
              Milestones
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-900 leading-tight mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Key milestones that shaped our path to becoming Tanzania&apos;s premier medical supply partner
            </p>
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

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-900 leading-tight mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The principles that guide every decision we make and every partnership we build
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-600 to-secondary-700 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-secondary-600/25 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-secondary-700 to-secondary-600 px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <TestTube className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Be Part of Our Story?
              </h2>
              <p className="text-lg md:text-xl text-secondary-50 mb-10 leading-relaxed">
                Join the healthcare providers, researchers, and institutions who trust Phomas Diagnostics to deliver
                the tools that make a difference. Let&apos;s write the next chapter of healthcare excellence in Tanzania
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-secondary-700 hover:bg-gray-100 px-8 text-base shadow-lg"
                >
                  <Link href="/products">
                    Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 bg-transparent px-8 text-base"
                >
                  <Link href="/contact">Partner with Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
