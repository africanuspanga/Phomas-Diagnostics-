import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Users, Globe, Award, TestTube } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story | Phomas Diagnostics - Advancing Healthcare in Tanzania",
  description:
    "Discover the journey of Phomas Diagnostics from a vision to Tanzania's premier medical supply partner. Learn about our mission to advance healthcare innovation across East Africa.",
}

export default function OurStoryPage() {
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
      icon: <Heart className="h-6 w-6" />,
      title: "Patient-Centered Care",
      description: "Every product we supply ultimately serves to improve patient outcomes and save lives",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Uncompromising Quality",
      description: "CE-marked products meeting European standards with comprehensive quality assurance",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partnership Approach",
      description: "Building lasting relationships with healthcare providers through trust and reliability",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Standards, Local Service",
      description: "World-class products delivered with personalized, responsive local support",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Container */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-primary-900 to-secondary-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transforming healthcare delivery across Tanzania through innovation, partnership, and unwavering commitment
            to excellence
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-700/90">
          {/* Future hero image will be placed here */}
        </div>
      </section>

      {/* Story Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">From Vision to Reality</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In 2018, we embarked on a mission that would transform how healthcare facilities across Tanzania access
              world-class medical equipment and diagnostic solutions. What started as a vision has grown into Tanzania's
              most trusted medical supply partnership.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Our founders recognized a critical gap in Tanzania's healthcare infrastructure: while the country had
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

      {/* Middle Image Container and Continued Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/our-story-researcher.jpeg"
                  alt="African Woman Biochemist Researcher Working in Modern Laboratory"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                Building Excellence Through Partnership
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Today, we're proud to serve hospitals, private laboratories, academic institutions, and research
                  facilities across Tanzania. Our partnership with Avantor/VWR has opened access to over 4 million
                  products, ensuring that no healthcare provider has to compromise on quality.
                </p>
                <p>
                  From clinical chemistry analyzers processing 80 samples per hour to precision pipettes enabling
                  groundbreaking research, every product in our portfolio is selected for its proven reliability and
                  adherence to international standards.
                </p>
                <p>
                  But our story isn't just about products—it's about the lives improved, the diagnoses made possible,
                  and the research breakthroughs enabled by the tools we provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped our path to becoming Tanzania's premier medical supply partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary-600">
                <CardContent className="p-6">
                  <div className="bg-secondary-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every partnership we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 p-3 bg-secondary-100 rounded-full w-16 h-16 mx-auto items-center text-secondary-600">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <TestTube className="h-16 w-16 mx-auto mb-6 text-secondary-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Part of Our Story?</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join the healthcare providers, researchers, and institutions who trust Phomas Diagnostics to deliver the
              tools that make a difference. Let's write the next chapter of healthcare excellence in Tanzania together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Link href="/products">
                Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-900 bg-transparent"
            >
              <Link href="/contact">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
