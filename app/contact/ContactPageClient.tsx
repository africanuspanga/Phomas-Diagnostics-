"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Clock, Mail, Send, ExternalLink, MessageCircle } from "lucide-react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construct WhatsApp message with form data
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone || "Not provided"}%0A*Organization:* ${formData.organization || "Not provided"}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`

    // WhatsApp URL with the phone number and pre-filled message
    const whatsappURL = `https://wa.me/255678389075?text=${whatsappMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Mikocheni-B, Msikitini Road", "Block 254, House No 66", "Dar es Salaam, Tanzania, 76317"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["0678 389 075", "0755 378 111", "0764 266 277"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday – Friday: 8:00 AM – 5:00 PM", "Saturday: Closed", "Sunday: Closed"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@phomasdiagnosticstz.com"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6">
            <MessageCircle className="h-4 w-4 text-secondary-500" />
            We&apos;re here to help
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-secondary-100">
              Us
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for all your medical supply needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-600 to-secondary-700 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-secondary-600/25 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className={`text-gray-600 text-sm md:text-base ${info.title === "Email" ? "break-all" : ""}`}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Visit Our Offices Section */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="text-center pt-10 md:pt-12 px-6">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
                  Find Us
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-3">
                  Visit Our Offices
                </h2>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                  Come visit us at our Dar es Salaam location for personalized service and product demonstrations.
                </p>
              </div>
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-secondary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Our Location</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Mikocheni-B, Msikitini Road
                          <br />
                          Block 254, House No 66
                          <br />
                          Dar es Salaam, Tanzania, 76317
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-secondary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Office Hours</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Monday – Friday: 8:00 AM – 5:00 PM
                          <br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                    <Button
                      className="w-full sm:w-auto bg-secondary-600 hover:bg-secondary-700 text-white shadow-lg shadow-secondary-600/25"
                      onClick={() => window.open("https://maps.app.goo.gl/SBAUGcuAzCJCYQAD6", "_blank")}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View on Google Maps
                    </Button>
                  </div>
                  <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6789!2d39.237604!3d-6.754126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z2KzCsDQ1JzA1LjkiUyAzOcKwMTQnMjQuNCJF!5e0!3m2!1sen!2stz!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Phomas Diagnostics Office Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="text-center pt-10 md:pt-12 px-6">
                <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-3">
                  Get In Touch
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-3">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form below and we&apos;ll contact you via WhatsApp.
                </p>
              </div>
              <div className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-primary-900">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1.5 h-11 md:h-12 rounded-xl border-gray-200 focus-visible:ring-secondary-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-primary-900">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1.5 h-11 md:h-12 rounded-xl border-gray-200 focus-visible:ring-secondary-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-primary-900">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1.5 h-11 md:h-12 rounded-xl border-gray-200 focus-visible:ring-secondary-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization" className="text-sm font-medium text-primary-900">
                        Organization
                      </Label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        className="mt-1.5 h-11 md:h-12 rounded-xl border-gray-200 focus-visible:ring-secondary-600"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-primary-900">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1.5 h-11 md:h-12 rounded-xl border-gray-200 focus-visible:ring-secondary-600"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-primary-900">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1.5 resize-none rounded-xl border-gray-200 focus-visible:ring-secondary-600"
                      placeholder="Please describe your inquiry or requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary-900 hover:bg-primary-800 text-white h-12 md:h-13 text-base rounded-xl shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-secondary-700 to-secondary-600 px-8 py-16 md:px-16 text-center shadow-2xl">
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
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Urgent Supplies?</h2>
              <p className="text-lg md:text-xl text-secondary-50 mb-10 max-w-3xl mx-auto leading-relaxed">
                For urgent medical supply needs or emergency orders, contact us directly. We understand that healthcare
                can&apos;t wait.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-secondary-700 hover:bg-gray-100 px-8 text-base shadow-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 0678 389 075
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/10 bg-transparent px-8 text-base"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
