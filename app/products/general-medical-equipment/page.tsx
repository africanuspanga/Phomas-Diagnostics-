import Link from "next/link"
import { ArrowLeft, Heart, Shield, Zap, Users, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GeneralMedicalEquipmentPage() {
  const equipmentCategories = [
    { name: "Incubators", icon: "🔬" },
    { name: "Blood Pressure Monitors", icon: "🩺" },
    { name: "Thermometers", icon: "🌡️" },
    { name: "Patient Monitors", icon: "📊" },
    { name: "ECG/EEG Machines", icon: "💓" },
    { name: "Refrigerators and Freezers", icon: "❄️" },
    { name: "Defibrillators", icon: "⚡" },
    { name: "Nebulizers", icon: "💨" },
    { name: "Infusion Pumps", icon: "💉" },
    { name: "Suction Machines", icon: "🔧" },
    { name: "Examination Lights", icon: "💡" },
    { name: "Biosafety Cabinets", icon: "🛡️" },
    { name: "Autoclave Machines", icon: "🔥" },
    { name: "Pulse Oximeters", icon: "📈" },
    { name: "Centrifuges", icon: "🌀" },
    { name: "Hospital Beds", icon: "🛏️" },
    { name: "Laboratory Mixers", icon: "🔄" },
    { name: "Stretchers & Trolleys", icon: "🚑" },
    { name: "Autoclaves & Sterilizers", icon: "🧼" },
    { name: "Examination Tables", icon: "🏥" },
  ]

  const keyFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-secondary-600" />,
      title: "Safety First",
      description: "All equipment meets international safety standards and regulatory requirements",
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary-600" />,
      title: "Advanced Technology",
      description: "State-of-the-art medical devices with cutting-edge features and reliability",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary-600" />,
      title: "Professional Support",
      description: "Comprehensive training and technical support for all medical equipment",
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary-600" />,
      title: "Patient Care",
      description: "Equipment designed to enhance patient comfort and treatment outcomes",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/products">
              <Button variant="ghost" className="text-white hover:bg-white/10 p-2">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">General Medical Equipment</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our General Medical Equipment category features a comprehensive range of tools and devices designed to
                support healthcare professionals in their daily work. These products ensure safety, accuracy, and
                efficiency in diagnosis, treatment, and patient monitoring.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-sm">Trusted by Healthcare Professionals</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/gynecological-room.jpeg"
                alt="Modern medical examination room with advanced equipment"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Complete Range of Medical Equipment</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From essential diagnostic instruments to advanced hospital devices, we provide reliable equipment trusted
              by medical facilities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {equipmentCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary-600"
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-medium text-primary-900">{category.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/images/medical-equipment-illustration.jpeg"
                alt="Medical equipment and supplies illustration"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Professional Healthcare Solutions</h3>
              <p className="text-gray-600 mb-6">
                Our medical equipment selection encompasses everything healthcare facilities need for optimal patient
                care. From basic diagnostic tools to sophisticated monitoring systems, each product is carefully
                selected for quality, reliability, and performance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                  <span className="text-gray-700">FDA approved and CE certified equipment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                  <span className="text-gray-700">Comprehensive warranty and service support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                  <span className="text-gray-700">Training and installation services available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Why Choose Our Medical Equipment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with leading manufacturers to bring you the highest quality medical equipment that meets the
              demanding needs of modern healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img
              src="/images/stethoscope-bp-monitor.jpeg"
              alt="Stethoscope and blood pressure monitor"
              className="rounded-lg shadow-lg mx-auto mb-8 w-full max-w-md h-64 object-cover"
            />
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Essential Diagnostic Tools</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every healthcare professional needs reliable diagnostic equipment. Our selection includes the fundamental
              tools that form the backbone of medical practice, from stethoscopes and blood pressure monitors to
              advanced patient monitoring systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Selecting Equipment?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our medical equipment specialists are here to help you find the right solutions for your healthcare
            facility. Contact us for personalized recommendations and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                Contact Our Specialists
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-900 bg-transparent"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-4">
          <Link href="/products">
            <Button variant="ghost" className="text-primary-900 hover:bg-primary-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
