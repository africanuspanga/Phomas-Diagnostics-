import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products | Medical & Laboratory Supplies | Phomas Diagnostics Tanzania",
  description:
    "Explore our comprehensive range of medical and laboratory products. As Tanzania's leading supplier, we provide Clinical Chemistry, Hematology, ELISA, Laboratory Equipment and more.",
}

export default function ProductsPage() {
  const productCategories = [
    {
      id: "clinical-chemistry",
      title: "Clinical Chemistry",
      description:
        "Advanced clinical chemistry solutions encompassing reagents, systems, photometers, and ISE analyzers designed to meet the demands of modern laboratories.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16090_T2.824b8646-8D2L8XsDkgfgMyt1jdidTQo9KHqIQf.png",
    },
    {
      id: "hematology",
      title: "Hematology",
      description:
        "Automated hematology (CBC) products designed for small to large laboratories, offering throughput ranges from 30 to 80 samples per hour.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lab-Medical-Equipment-Fully-Automated-Blood-Test-Machine-Auto-Portable-3-Part-Haemogram-Hematology-Analyzer-for-Hospital-Clinic-hm90tjkl63JdLWruBnD2Ai6GrxN5cR.avif",
    },
    {
      id: "elisa-line",
      title: "ELISA Line",
      description:
        "Over 50 years of experience with ELISA solutions, providing over 100 assays and fully automated analyzers for diverse diagnostic needs.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/112479-10218972.jpg-MZDy2ThDambjEs6iHFVf7pi8Uaq3Ds.jpeg",
    },
    {
      id: "laboratory-equipment",
      title: "Laboratory Equipment",
      description:
        "Diverse range of high-quality laboratory equipment designed to meet the needs of laboratories worldwide, from essential tools to specialized instruments.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D1320062667690-20160908130113319-JPG.6d765be7.jpg-CKDx18VS6TmHDxYMP2XDrZSFXDM7uC.jpeg",
    },
    {
      id: "coagulation",
      title: "Coagulation",
      description:
        "Comprehensive coagulation testing solutions for accurate hemostasis diagnostics with advanced analyzers and quality reagents.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15800_HumaClot-Pro_Open_Sideview_15800_17112016172135-20161118070934358.64871b54-LSkSz7PCNPpRlNwksCyS9pSWbbyIkC.png",
    },
    {
      id: "auto-immune",
      title: "AUTO Immune",
      description:
        "Advanced autoimmune diagnostic solutions for detecting autoimmune diseases with precision and reliability.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/643f4a5ee09dd-qum9SNUJkwSi2BtpkSIwkYXgCAcpsg.png",
    },
    {
      id: "blood-gas",
      title: "Blood Gas",
      description:
        "Critical care blood gas analyzers for rapid and accurate patient monitoring in emergency and intensive care settings.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLOODGAS__ILWW__GEM5000-CHEMSTAT.jpg-lNcUPtMMy6EAOuRVuQQcbI5SU0QeQA.jpeg",
    },
    {
      id: "microbiology",
      title: "Microbiology",
      description:
        "Comprehensive microbiology solutions for pathogen identification and antimicrobial susceptibility testing.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real-time-pcr-1-JOSyHoZKE7v73jeuMvMnJkGUqNda37.webp",
    },
    {
      id: "microfluidic-fluorescence",
      title: "Microfluidic Fluorescence Immunoassay",
      description: "Advanced microfluidic technology for precise fluorescence-based immunoassays with rapid results.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image20230825162425-w45ujsfA62hBB2gKF3LTfYO6YxeQQj.webp",
    },
    {
      id: "tb-lamp",
      title: "TB-Lamp",
      description:
        "Innovative tuberculosis detection solutions using LAMP technology for rapid and accurate TB diagnosis.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/961000_HumaLoop_T_961000_12072018152744-20180713053001269.467be29e-nveOh6T3BiVYofsGdTuDKdG792vRwO.png",
    },
    {
      id: "urinary",
      title: "Urinary",
      description:
        "Complete urinalysis solutions including automated analyzers and reagent strips for comprehensive urine testing.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uf-5000_v3_466x540-fRT6wZ5IZ9dx1corlT35i125c0CvXK.png",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Categories</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              As Tanzania's leading medical supply partner, we provide world-class laboratory and medical equipment from
              trusted global manufacturers to healthcare facilities nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Comprehensive Medical & Laboratory Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our extensive range of medical and laboratory products. Each category features detailed product
              information and downloadable fliers for your reference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square overflow-hidden rounded-t-lg bg-white">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                  <Button asChild className="w-full bg-secondary-600 hover:bg-secondary-700 text-white">
                    <Link href={`/products/${category.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? As Tanzania's premier medical supply partner, we can source
            specialized equipment and products to meet your specific requirements.
          </p>
          <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
            <Link href="/contact">
              Contact Our Experts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
