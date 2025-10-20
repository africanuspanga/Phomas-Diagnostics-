import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

export const metadata = {
  title: "Events | Phomas Diagnostics",
  description: "Stay updated with Phomas Diagnostics events, exhibitions, and installations across Tanzania.",
}

const events = [
  {
    id: 1,
    title: "Phomas Diagnostics Sponsors MELSAT 2024 in Dodoma",
    location: "Dodoma, Tanzania",
    date: "2024",
    image: "/images/events/melsat-2024-dodoma.jpg",
    description:
      "Phomas Diagnostics and Medical Supplies Limited was proud to be the main sponsor of the MELSAT 2024 exhibition held in Dodoma. The event brought together key stakeholders in the medical and laboratory sector to showcase innovations and strengthen partnerships that drive healthcare excellence in Tanzania. Our sponsorship reflects our continued commitment to supporting the growth and advancement of the medical industry nationwide.",
  },
  {
    id: 2,
    title: "Phomas Diagnostics Exhibits at MELSAT 2025 in Mwanza",
    location: "Mwanza, Tanzania",
    date: "2025",
    image: "/images/events/melsat-2025-mwanza.jpeg",
    description:
      "Phomas Diagnostics and Medical Supplies Limited participated as an exhibitor at the MELSAT 2025 exhibition in Mwanza. The event provided an excellent platform to engage with healthcare professionals, demonstrate our wide range of quality laboratory and medical products, and explore new collaborations that enhance healthcare delivery across Tanzania.",
  },
  {
    id: 3,
    title: "Installation of Humastar 100 at Dr. Atiman Memorial Council Designated Hospital Sumbawanga",
    location: "Rukwa, Tanzania",
    date: "2024",
    image: "/images/events/humastar-installation.jpg",
    description:
      "Phomas Diagnostics successfully completed the installation of the Humastar 100 at Dr. Artiman Hospital in Rukwa. This installation marks another step in our mission to enhance laboratory capacity and improve diagnostic accuracy across Tanzania. Our technical team provided full setup, calibration, and user training to ensure optimal performance and sustainable operation of the equipment.",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Events & Activities</h1>
          <p className="text-xl text-gray-100 max-w-3xl text-pretty">
            Discover how Phomas Diagnostics is actively contributing to the advancement of healthcare in Tanzania
            through exhibitions, installations, and partnerships.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Event Image */}
                <div className="relative h-64 w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>

                {/* Event Content */}
                <div className="p-6">
                  {/* Event Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Event Title */}
                  <h2 className="text-2xl font-bold text-primary-900 mb-4 text-balance">{event.title}</h2>

                  {/* Event Description */}
                  <p className="text-gray-700 leading-relaxed text-pretty">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
            Want to learn more about our upcoming events or collaborate with us? Get in touch today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
