import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Founder | Thomas Ihombwe | Phomas Diagnostics Tanzania",
  description:
    "Meet Thomas Ihombwe, CPA (T) the visionary founder and director of Phomas Diagnostics. Discover his leadership and mission to advance healthcare and science in Tanzania.",
}

export default function FounderPage() {
  const achievements = [
    {
      icon: <GraduationCap className="h-8 w-8 text-secondary-600" />,
      title: "Certified Public Accountant (CPA)",
      description: "Member of the National Board of Auditors and Accountants (NBAA)",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-secondary-600" />,
      title: "Business Leadership",
      description: "Extensive experience in financial consulting and business management",
    },
    {
      icon: <Award className="h-8 w-8 text-secondary-600" />,
      title: "Entrepreneurial Vision",
      description: "Founded and leads Phomas Diagnostics with strategic vision",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Founder</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Visionary leadership driving healthcare innovation in Tanzania
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <Image
                  src="/images/founder.jpeg"
                  alt="Thomas Ihombwe, CPA (T)"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary-600 text-white p-4 rounded-xl">
                  <Award className="h-8 w-8" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Thomas Ihombwe, CPA (T)</h2>
              <p className="text-xl text-secondary-600 font-semibold mb-6">Founder & Director</p>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Thomas Ihombwe is the founder and director of Phomas Diagnostics and Medical Supplies Ltd. An
                  accomplished entrepreneur and finance professional, Thomas is a Certified Public Accountant (CPA) and
                  a member of the National Board of Auditors and Accountants (NBAA).
                </p>
                <p>
                  With extensive experience in financial consulting, accounting, and business management, he combines
                  technical expertise with visionary leadership. Under his guidance, Phomas Diagnostics has evolved into
                  a trusted partner for the healthcare and scientific sectors across Tanzania.
                </p>
                <p>
                  Thomas's commitment to excellence and innovation has been instrumental in establishing strategic
                  partnerships, including the collaboration with Avantor/VWR, bringing world-class medical supplies to
                  Tanzania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Professional Excellence</h2>
            <p className="text-xl text-gray-600">Combining financial expertise with entrepreneurial vision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">Leadership Philosophy</h2>
            <blockquote className="text-2xl text-gray-600 italic mb-8 leading-relaxed">
              "Success in healthcare supply is not just about products—it's about building relationships, understanding
              needs, and delivering solutions that truly make a difference in people's lives."
            </blockquote>
            <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Thomas believes in the power of strategic partnerships and quality service. His vision for Phomas
                Diagnostics extends beyond being a supplier—to become a trusted advisor and partner in advancing
                Tanzania's healthcare infrastructure and research capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Leadership-Driven Service</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Connect with our team and experience the difference that visionary leadership makes in healthcare supply
            solutions.
          </p>
          <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
