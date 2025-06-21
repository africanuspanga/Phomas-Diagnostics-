import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Phomas Diagnostics | Lab & Medical Supplies Dar es Salaam",
  description:
    "Get in touch with Phomas Diagnostics. Call us, visit our Dar es Salaam office, or fill out our contact form. We're here to help with your lab and medical supply needs.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
