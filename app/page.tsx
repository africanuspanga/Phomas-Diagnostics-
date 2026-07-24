import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Truck,
  Users,
  Award,
  Microscope,
  TestTube,
  HeartPulse,
  Zap,
  ShieldCheck,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Partnership",
    description:
      "Access to over 4 million products through our partnership with Avantor/VWR and world-class manufacturers.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "From local LPO collection to doorstep delivery across Tanzania with reliable logistics.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "30+ years of experience with comprehensive technical support and training.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "CE-marked products meeting European standards for healthcare and research excellence.",
  },
]

const productCategories = [
  {
    image: "/images/diagnostic-analyzer.png",
    title: "Clinical Chemistry",
    description: "Analyzers and reagents from 30–80 samples/hour throughput to point-of-care solutions.",
  },
  {
    image: "/images/humacount-5d.avif",
    title: "Hematology Systems",
    description: "From 3-part to 5-part differentiation for accurate, high-volume blood analysis.",
  },
  {
    image: "/images/blood-gas-eaglenos.png",
    title: "Critical Care",
    description: "Blood gas and electrolyte analysis built for emergency and intensive care settings.",
  },
  {
    image: "/images/magnus-microscope.jpeg",
    title: "Microscopy & Lab",
    description: "Precision instruments, microscopes and complete laboratory equipment solutions.",
  },
]

const services = [
  "Clinical Chemistry Analyzers & Reagents",
  "Hematology Systems (3-part to 5-part)",
  "Microbiology Solutions & Culture Media",
  "Blood Gas & Electrolyte Analysis",
  "Coagulation Testing Equipment",
  "Laboratory Equipment & Instruments",
  "Autoimmune Diagnostics & ELISAs",
  "Quality Control Materials & Calibrators",
]

const partners = [
  { name: "Runlab", logo: "/images/partners/runlab-logo.png" },
  { name: "AllTest", logo: "/images/partners/alltest-logo.png" },
  { name: "Meling Biomedical", logo: "/images/partners/meling-logo.png" },
  { name: "Magnus", logo: "/images/partners/magnus-logo.jpeg" },
  { name: "Liofilchem", logo: "/images/partners/liofilchem-logo.jpeg" },
  { name: "QCA", logo: "/images/partners/qca-logo.png" },
  { name: "Tulip Diagnostics", logo: "/images/partners/tulip-logo.png" },
  { name: "BioMérieux", logo: "/images/partners/biomerieux-logo.png" },
  { name: "Eaglenos", logo: "/images/partners/eaglenos-logo.png" },
  { name: "Human Diagnostics", logo: "/images/partners/human-logo.png" },
  { name: "VACURE", logo: "/images/partners/vacure-logo.jpeg" },
]

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "4M+", label: "Products Available" },
  { value: "11", label: "Global Partners" },
  { value: "100%", label: "CE-Marked Quality" },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string
  title: string
  description?: string
  dark?: boolean
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
      <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
        {eyebrow}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 ${
          dark ? "text-white" : "text-primary-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
      )}
    </div>
  )
}

function AppStoreBadge() {
  return (
    <svg viewBox="0 0 135 40" className="h-12 w-auto" role="img" aria-label="Download on the App Store">
      <rect width="135" height="40" rx="8" fill="#000" />
      <rect width="134" height="39" x="0.5" y="0.5" rx="7.5" fill="none" stroke="#A6A6A6" />
      <path
        fill="#fff"
        d="M28.348 21.406c-.026-2.87 2.348-4.247 2.454-4.313-1.336-1.955-3.42-2.223-4.162-2.252-1.77-.18-3.456 1.043-4.352 1.043-.897 0-2.283-1.017-3.754-.99-1.93.03-3.71 1.123-4.703 2.85-2.006 3.48-.513 8.63 1.442 11.458.955 1.382 2.093 2.926 3.587 2.87 1.44-.06 1.985-.93 3.726-.93 1.74 0 2.232.93 3.757.9 1.552-.025 2.538-1.405 3.49-2.79 1.1-1.606 1.552-3.162 1.578-3.242-.035-.016-3.027-1.16-3.063-4.604zM25.926 13.31c.795-.965 1.332-2.306 1.186-3.642-1.146.047-2.535.764-3.358 1.727-.738.854-1.384 2.222-1.21 3.532 1.278.1 2.584-.65 3.382-1.617z"
      />
      <text x="42" y="16.5" fill="#fff" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">
        Download on the
      </text>
      <text x="42" y="30" fill="#fff" fontSize="14.5" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
        App Store
      </text>
    </svg>
  )
}

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 155 40" className="h-12 w-auto" role="img" aria-label="Get it on Google Play">
      <rect width="155" height="40" rx="8" fill="#000" />
      <rect width="154" height="39" x="0.5" y="0.5" rx="7.5" fill="none" stroke="#A6A6A6" />
      <path
        fill="#00D9FF"
        d="M10.62 8.42c-.37.4-.6 1.06-.6 1.95v19.26c0 .89.23 1.55.6 1.95l.08.07 10.8-10.8v-.27L10.7 8.35l-.08.07z"
      />
      <path fill="#FFCE00" d="M24.72 23.98l-3.2-3.2v-.27l3.2-3.2.07.04 3.8 2.16c1.08.62 1.08 1.62 0 2.24l-3.8 2.16-.07.07z" />
      <path fill="#FF3A44" d="M24.79 23.91l-3.27-3.27-10.9 10.9c.36.38.96.43 1.63.05l12.54-7.68" />
      <path fill="#00F076" d="M24.79 15.43L12.25 7.75c-.67-.38-1.27-.33-1.63.05l10.9 10.9 3.27-3.27z" />
      <text x="36" y="16.5" fill="#fff" fontSize="8.5" fontFamily="Inter, system-ui, sans-serif">
        GET IT ON
      </text>
      <text x="36" y="30" fill="#fff" fontSize="14.5" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
        Google Play
      </text>
    </svg>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-female-doctor-vaccine.jpeg"
            alt="Laboratory scientist at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6">
              <ShieldCheck className="h-4 w-4 text-secondary-500" />
              Trusted in Tanzania for over 10 years
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Tanzania&apos;s Premier{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-secondary-100">
                Medical Supply
              </span>{" "}
              Partner
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
              World-class laboratory equipment, diagnostic analyzers, and medical supplies from trusted global
              manufacturers — delivered and supported nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 text-base shadow-lg shadow-secondary-600/30"
              >
                <Link href="/products">
                  Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-primary-900 bg-white/5 backdrop-blur-sm px-8 text-base"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/15 bg-white/15 backdrop-blur-md">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-primary-900/60 px-6 py-5 text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Phomas"
            title="Why Choose Phomas Diagnostics?"
            description="We bridge the gap between cutting-edge global technology and Tanzania's healthcare needs with proven expertise and reliable support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-600 to-secondary-700 flex items-center justify-center mb-6 shadow-lg shadow-secondary-600/25 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Advanced Laboratory Solutions"
            description="From small clinics to large hospital laboratories, our equipment delivers precise results with proven reliability."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productCategories.map((category) => (
              <Link
                key={category.title}
                href="/products"
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden bg-gray-50">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-secondary-600">
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary-900 hover:bg-primary-800 text-white px-8">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-primary-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-500 mb-3">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6">
                Comprehensive Medical & Laboratory Solutions
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                From hospitals and private labs to academic institutions and research facilities, we provide CE-marked
                equipment and comprehensive support that meets your specific diagnostic needs.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {services.map((service) => (
                  <li key={service} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 text-[0.95rem]">{service}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white px-8">
                <Link href="/contact">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/medical-supplies.png"
                  alt="Medical laboratory equipment and supplies"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-900">10+ Years</div>
                  <div className="text-sm text-gray-500">Proven Reliability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Partners"
            title="Trusted by World-Class Manufacturers"
            description="We collaborate with leading global manufacturers and suppliers to bring you the highest quality medical equipment and laboratory supplies."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl border border-gray-100 p-6 flex items-center justify-center h-28 hover:shadow-lg hover:border-secondary-600/30 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="max-w-full h-auto max-h-14 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Interested in partnering with us? We&apos;re always looking for innovative companies to collaborate with.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
            >
              <Link href="/contact">
                Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-6">
                <Smartphone className="h-4 w-4 text-secondary-500" />
                Now on Mobile
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Download Our App
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Browse our full product catalogue, request quotes, and track your orders right from your phone. Get
                the Phomas Diagnostics app today.
              </p>
              {/* TODO: replace href="#" with the real App Store / Google Play links when provided */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#"
                  className="inline-block hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <AppStoreBadge />
                </Link>
                <Link
                  href="#"
                  className="inline-block hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <GooglePlayBadge />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/lab-scientist.webp"
                    alt="Scientist using laboratory equipment"
                    width={380}
                    height={480}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-10 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-600 flex items-center justify-center">
                    <TestTube className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-900">4M+ Products</div>
                    <div className="text-xs text-gray-500">at your fingertips</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-secondary-700 to-secondary-600 px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <HeartPulse className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Upgrade Your Laboratory?
              </h2>
              <p className="text-lg md:text-xl text-secondary-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join hospitals, labs, and research institutions across Tanzania who trust Phomas Diagnostics for
                reliable, world-class medical equipment and diagnostic solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-secondary-700 hover:bg-gray-100 px-8 text-base shadow-lg"
                >
                  <Link href="/products">
                    View Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 bg-transparent px-8 text-base"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
