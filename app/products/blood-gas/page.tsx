import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Blood Gas & Electrolyte Analyzer | Phomas Diagnostics",
  description:
    "Eaglenos blood gas and electrolyte analyzer for rapid, accurate testing. Download product fliers and learn more.",
}

export default function BloodGasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary-900 to-secondary-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-8">
            <Button
              variant="outline"
              asChild
              className="text-white border-white hover:bg-white hover:text-primary-900 bg-transparent"
            >
              <Link href="/products" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Hero copy */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                Eaglenos Blood Gas & Electrolyte Analyzer
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/90">
                Fast, precise, and reliable measurements for blood gases and electrolytes in clinical settings. Designed
                for efficiency with an intuitive touchscreen interface.
              </p>
            </div>

            {/* Hero image */}
            <div className="relative mx-auto md:mx-0">
              <div className="relative overflow-hidden rounded-xl border bg-card">
                <Image
                  src="/images/blood-gas-eaglenos.png"
                  alt="Eaglenos blood gas and electrolyte analyzer with touchscreen interface"
                  width={928}
                  height={768}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA - placed immediately below the hero text and image */}
      <section aria-labelledby="downloads-title" className="bg-muted/30 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="downloads-title" className="sr-only">
            Downloads
          </h2>
          <div className="flex flex-col items-start gap-4 rounded-xl border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm sm:text-base text-muted-foreground">Download product fliers:</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link
                  href="https://drive.google.com/file/d/1LTUSQ0xTFIorho1xQ49PU0VpsVLeSs1_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eaglenos — Blood Gas (ZS)
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link
                  href="https://drive.google.com/file/d/1n6Aqvc3w0AQBty7a5qs-eYB3j9g0sDX8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eaglenos — Electrolyte (ZS)
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content placeholder (optional additional details) */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <h2>Why choose Eaglenos</h2>
            <ul>
              <li>Rapid analysis for critical care decisions</li>
              <li>Integrated touchscreen with intuitive workflow</li>
              <li>Compact footprint for labs and point-of-care</li>
              <li>Reliable, consistent performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild>
            <Link href="/products" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
