import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import Section from "@/components/ui/section" // Declare the Section variable

export const metadata: Metadata = {
  title: "Microbiology Solutions | Phomas Diagnostics Tanzania",
  description:
    "Leading supplier of microbiology solutions in Tanzania. Comprehensive pathogen identification and antimicrobial susceptibility testing systems.",
}

export default function MicrobiologyPage() {
  const features = [
    "Automated Identification Systems",
    "Antimicrobial Susceptibility Testing",
    "Blood Culture Systems",
    "Rapid Diagnostic Tests",
    "Culture Media and Reagents",
    "Quality Control Materials",
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/products" className="hover:text-primary-900 transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-900 font-medium">Microbiology</span>
          </div>
        </div>
      </Section>

      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Microbiology Solutions</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tanzania's trusted supplier of comprehensive microbiology systems for pathogen identification and testing
            </p>
          </div>
        </div>
      </Section>

      {/* Main Content */}
      <Section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Advanced Microbiology Diagnostics
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Phomas Diagnostics supplies comprehensive microbiology solutions for accurate pathogen identification
                  and antimicrobial susceptibility testing across Tanzania's healthcare facilities. As the country's
                  leading medical equipment supplier, we provide advanced microbiology systems that enable laboratories
                  to deliver rapid, reliable results for infectious disease diagnosis and treatment guidance.
                </p>
                <p>
                  Our microbiology portfolio includes automated identification and susceptibility testing systems, blood
                  culture analyzers, and rapid diagnostic platforms that streamline laboratory workflows while
                  maintaining the highest standards of accuracy. These systems are designed to handle the diverse
                  microbiology testing needs of hospitals, reference laboratories, and clinical facilities throughout
                  Tanzania.
                </p>
                <p>
                  From traditional culture methods to cutting-edge molecular diagnostics, our microbiology solutions
                  provide comprehensive testing capabilities for bacteria, fungi, and other pathogens. All systems are
                  supported by high-quality culture media, reagents, and quality control materials to ensure consistent,
                  reliable results that healthcare professionals can trust for patient care decisions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real-time-pcr-1-JOSyHoZKE7v73jeuMvMnJkGUqNda37.webp"
                  alt="Microbiology Laboratory Equipment - Real-time PCR System"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Antibiotic Discs Section */}
      <Section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Antibiotic Discs in Cartridge</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Our antibiotic sensitivity testing discs provide accurate and reliable antimicrobial susceptibility
                  testing for clinical laboratories. These high-quality discs are manufactured to international
                  standards and come in convenient cartridge dispensers for easy handling and storage.
                </p>
                <p>
                  The cartridge system ensures consistent disc placement and reduces contamination risk while
                  maintaining the integrity of antibiotic concentrations. Perfect for routine susceptibility testing in
                  clinical microbiology laboratories across Tanzania.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white" asChild>
                  <a
                    href="https://drive.google.com/file/d/1dIlCNqhtqbjaeF9v0QhhDGIOHwcSyVv9/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Flier
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sensitivity%20Discs-iXlNvJaHMr1UAXXND2xvaDSUUcBEaI.png"
                  alt="Antibiotic Sensitivity Discs in Cartridge"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Blood Culture Bottles Section */}
      <Section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blood%20culture%20bottles.jpg-M7JaX8ryV52VbJjoSn9OXvEAWuvjCZ.jpeg"
                  alt="Blood Culture Bottles - BHI and Schaedler Broth"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Blood Culture Bottles</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  High-quality blood culture bottles including Brain Heart Infusion (BHI) and Schaedler Broth
                  formulations for optimal recovery of aerobic and anaerobic microorganisms from blood specimens. These
                  sterile bottles are designed for reliable detection of bacteremia and fungemia.
                </p>
                <p>
                  Our blood culture bottles support both manual and automated blood culture systems, providing excellent
                  recovery rates for a wide range of pathogens while maintaining sterility and preventing contamination
                  during the culture process.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white" asChild>
                  <a
                    href="https://drive.google.com/file/d/1at35g68X8wyNeB1Klh2xjX1RtalBpzg3/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Flier
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Control Organism Section */}
      <Section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Control Organism</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Quality control organisms are essential for validating the performance of culture media, antimicrobial
                  susceptibility testing, and identification systems. Our control strains are certified reference
                  materials that ensure accurate and reliable laboratory results.
                </p>
                <p>
                  These standardized control organisms help laboratories maintain compliance with international quality
                  standards and provide confidence in test results. Available in various formats including lyophilized
                  and frozen preparations for different laboratory needs.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white" asChild>
                  <a
                    href="https://drive.google.com/file/d/1J1OwTgirwyNRN-kgDXYLeFt6iuKlJGbn/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Flier
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-Quality-Control-organisms.jpeg.jpg-J7Sthd2lTRxikgqVpN1qOAI9EIik7O.jpeg"
                  alt="Quality Control Organisms - CultiControl Escherichia coli"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Dehydrated Culture Media Section */}
      <Section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dehydrated%20Culture%20Media-rq5DjUhmWxMeFX2pD0lZc333PHSA8s.jpeg"
                  alt="Dehydrated Culture Media Products"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Dehydrated Culture Media</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Comprehensive range of dehydrated culture media for isolation, cultivation, and identification of
                  microorganisms. Our media formulations are manufactured to the highest quality standards and provide
                  consistent, reliable performance for routine and specialized microbiology applications.
                </p>
                <p>
                  Available in various package sizes from small bottles for research use to large containers for
                  high-volume laboratories. All media are tested for performance and sterility to ensure optimal growth
                  conditions for target organisms.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white" asChild>
                  <a
                    href="https://drive.google.com/file/d/1HOz95iWIIhUyUp5co3iHxEvWlwqHW0yb/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Flier
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Supplements Section */}
      <Section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Supplements</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Essential supplements for enhancing culture media performance and supporting the growth of fastidious
                  microorganisms. Our supplement range includes blood, serum, vitamins, and other enrichment factors
                  required for specialized microbiology applications.
                </p>
                <p>
                  These high-quality supplements are sterile-filtered and tested for performance to ensure optimal
                  enhancement of culture media. Perfect for laboratories requiring specialized growth conditions for
                  demanding microorganisms.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white" asChild>
                  <a
                    href="https://drive.google.com/file/d/1VAMop8tFiWm4UofUcfY1qOZeRiwTGNva/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Flier
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/supplements.jpg-GNmzNA38rYtOJ7g6Yfsu6JP0AWIDne.jpeg"
                  alt="Laboratory Supplements - Novobiocin"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Tests for Microbial Identification Section */}
      <Section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Biochemical%20Reagents.jpg-0BnagSOHUey0p4dNuN33rNN93RHeD3.jpeg"
                  alt="Biochemical Tests for Microbial Identification"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Tests for Microbial Identification
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Comprehensive range of biochemical and enzymatic tests for accurate identification of bacteria,
                  yeasts, and other microorganisms. Our identification tests include traditional biochemical reagents
                  and modern rapid identification systems for efficient laboratory workflows.
                </p>
                <p>
                  These reliable identification tests provide clear, interpretable results for species-level
                  identification of clinical isolates. Essential tools for clinical microbiology laboratories requiring
                  accurate pathogen identification for appropriate treatment decisions.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white" asChild>
                  <a
                    href="https://drive.google.com/file/d/17JDSETaHSwqHDWOuoBEOFIVnugSQ_obW/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Flier
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Comprehensive Microbiology Testing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete pathogen identification and antimicrobial susceptibility solutions for infectious disease
              management
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
      </Section>

      {/* Navigation */}
      <Section className="py-12 bg-gray-50">
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
      </Section>
    </div>
  )
}
