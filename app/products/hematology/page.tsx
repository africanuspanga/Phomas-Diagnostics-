import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle, Eye } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hematology Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of hematology solutions in Tanzania. Automated CBC products for laboratories of all sizes with precision and reliability.",
}

export default function HematologyPage() {
  const features = [
    "Automated 3-part differentiation",
    "Automated 5-part differentiation",
    "Erythrocyte Sedimentation Rate (ESR)",
    "Hematocrit Measurement",
    "C-reactive protein (CRP) detection",
    "Benchtop centrifuge for hematocrit (HCT) measurement",
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/products" className="hover:text-primary-900 transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-900 font-medium">Hematology</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hematology Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's premier supplier of advanced hematology equipment for accurate blood analysis
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Precision Hematology Solutions</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies cutting-edge hematology solutions that offer the precision, reliability,
                  and ease of use laboratories require to deliver timely and accurate diagnoses for patients. As
                  Tanzania's trusted medical equipment supplier, we provide hematology solutions designed to meet the
                  needs of laboratories of all sizes.
                </p>
                <p>
                  Our automated hematology (CBC) products are designed for small to large laboratories, offering
                  throughput ranges from 30 to 80 samples per hour. We supply 3-part and 5-part differential systems,
                  with the option of C-reactive protein (CRP) detection, sourced from leading global manufacturers.
                </p>
                <p>
                  To further support your laboratory's hematology needs, we also supply benchtop centrifuges for
                  hematocrit (HCT) measurement and erythrocyte sedimentation rate (ESR) instruments capable of
                  processing up to 24 samples per hour.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-11%20at%2009.12.31-IfXhptzgQt4f582C0Tkdx89xCdr6yL.jpeg"
                  alt="HumaCount 5D CRP hematology analyzer front view"
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain bg-white"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated 3-part differentiation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Automated 3-part differentiation</h2>
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                HumaCount 30<sup>TS</sup> | 80<sup>TS</sup>: More precision, less blood smears
              </h3>
              <div className="space-y-6 text-lg text-gray-600 mb-8">
                <p>
                  HUMAN's 3-part hematology systems provide reliable and precise blood analysis, focusing on essential
                  parameters such as white blood cells, red blood cells, and platelets. Designed for ease of use and
                  efficiency, these systems are ideal for small to medium-sized laboratories, supporting accurate
                  diagnosis and improving workflow in hematology diagnostics.
                </p>
                <p>
                  The models HumaCount 80<sup>TS</sup> and HumaCount 30<sup>TS</sup> can perform 80 or 30 full blood
                  counts per hour. These systems use highly stable reagents that can be stored at temperatures as high
                  as 42°C, making them stand out among 3-part analyzers.
                </p>
              </div>
              <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                <Link
                  href="https://drive.google.com/file/d/1FE9jKq8JPlT9JeuzHTgI2bX-hjnDxRQ3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Flier
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HEM_3part-3nA8cD4lWgmGxO2DvL0EliTWrRVVDn.png"
                  alt="HumaCount 30TS and 80TS Analyzers"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated 5-part differentiation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HEM_5part_2-1MCQZCZdVG9lUE4Z2Vlygy6sRCxrdU.png"
                  alt="HumaCount 5D Analyzer System"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Automated 5-part differentiation</h2>
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                HumaCount 5D | HumaCount 5D<sup>CRP</sup> | HumaCount 5L
              </h3>
              <div className="space-y-6 text-lg text-gray-600 mb-8">
                <p>
                  The HumaCount 5-part systems combine proven impedance detectors and 3D laser technology to deliver
                  comprehensive hematology diagnostics. These systems differentiate five types of white blood cells,
                  including atypical lymphocytes (ALY) and large immature cells (LIC), while also analyzing red blood
                  cells and platelets.
                </p>
                <p>
                  With models like the HumaCount 5D, HumaCount 5D<sup>CRP</sup>, and HumaCount 5L, HUMAN offers robust
                  and reliable solutions tailored to the needs of both small and medium-sized labs, as well as larger
                  laboratories with high throughput demands. The HumaCount 5D<sup>CRP</sup> offers the possibility of
                  simultaneous measurement of CRP and 5-part diff parameters out of one and the same sample.
                </p>
                <p>
                  Our hematology systems have been on the market for many years with excellent references regarding
                  robustness and reliability and meet all requirements of a hematological laboratory.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                  <Link
                    href="https://drive.google.com/file/d/1hLiXpAy1rM59zQzbXQdszNnzxgCcY5O9/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    HumaCount 5D Flier
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white bg-transparent"
                >
                  <Link
                    href="https://drive.google.com/file/d/13jbf4mTeK_DrN00VFZh-fsU2K8QH--9z/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    HumaCount 5D<sup>CRP</sup> Flier
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hematocrit Measurement Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Hematocrit Measurement</h2>
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                HuMax HCT - Hematocrit and microliter benchtop centrifuge
              </h3>
              <div className="space-y-6 text-lg text-gray-600 mb-8">
                <p>Measure hematocrit with the gold standard method. Fast, easy and reliable.</p>
                <p>
                  The programmable microprocessor controlled system is equipped with a maintenance-free brushless
                  induction motor and is delivered with a 24 single segment rotor for hematocrit capillaries.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white bg-transparent"
              >
                <Link href="/products">
                  <Eye className="mr-2 h-5 w-5" />
                  View Products
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HEM_HEMA-m7Y3u5XCzhsMFC2R2HzJkBOXPdRBMn.png"
                  alt="HuMax HCT Hematocrit Centrifuge"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESR Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HEM_ESR-susaUkhpedIymRrz6zftTuyqi2aCKF.png"
                  alt="HumaSRate 24PT ESR Analyzer"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Erythrocyte Sedimentation Rate (ESR)
              </h2>
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                HumaSRate 24<sup>PT</sup> – Sets new standards in ESR automation
              </h3>
              <div className="space-y-6 text-lg text-gray-600 mb-8">
                <p>
                  HUMAN's ESR (erythrocyte sedimentation rate) system is suitable for small to medium sized labs. The
                  use of primary EDTA tubes for ESR reading is cost effective because no additional ESR tube is
                  required.
                </p>
                <p>
                  HumaSRate 24<sup>PT</sup> offers the flexibility to run ESR tests at any time without additional blood
                  collection.
                </p>
              </div>
              <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                <Link
                  href="https://drive.google.com/file/d/1BFZiMP57QZsGbQY318tWbSlb0BLXhLR-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Flier
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Explore Our Hematology Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hematology solutions for laboratories of all sizes across Tanzania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white bg-transparent"
            >
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
            <Button asChild className="bg-secondary-600 hover:bg-secondary-700 text-white">
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
