"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Clock, Mail, Send, ExternalLink } from "lucide-react"

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
      icon: <MapPin className="h-6 w-6 text-secondary-600" />,
      title: "Address",
      details: ["Mikocheni-B, Msikitini Road", "Block 254, House No 66", "Dar es Salaam, Tanzania, 76317"],
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary-600" />,
      title: "Phone",
      details: ["0678 389 075", "0755 378 111", "0764 266 277"],
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary-600" />,
      title: "Business Hours",
      details: ["Monday – Friday: 8:00 AM – 5:00 PM", "Saturday: Closed", "Sunday: Closed"],
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary-600" />,
      title: "Email",
      details: ["info@phomasdiagnosticstz.com"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-secondary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with our team for all your medical supply needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{info.icon}</div>
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
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Visit Our Offices Section */}
          <div className="mb-16">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl text-primary-900">Visit Our Offices</CardTitle>
                <p className="text-gray-600 text-sm md:text-base">
                  Come visit us at our Dar es Salaam location for personalized service and product demonstrations.
                </p>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-secondary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Our Location</h4>
                        <p className="text-gray-600">
                          Mikocheni-B, Msikitini Road
                          <br />
                          Block 254, House No 66
                          <br />
                          Dar es Salaam, Tanzania, 76317
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-6 w-6 text-secondary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Office Hours</h4>
                        <p className="text-gray-600">
                          Monday – Friday: 8:00 AM – 5:00 PM
                          <br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                    <Button
                      className="w-full sm:w-auto bg-secondary-600 hover:bg-secondary-700"
                      onClick={() => window.open("https://maps.app.goo.gl/SBAUGcuAzCJCYQAD6", "_blank")}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View on Google Maps
                    </Button>
                  </div>
                  <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
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
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl text-primary-900">Send us a Message</CardTitle>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form below and we'll contact you via WhatsApp.
                </p>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 h-10 md:h-11"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 h-10 md:h-11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 h-10 md:h-11"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization" className="text-sm font-medium">
                        Organization
                      </Label>
                      <Input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        className="mt-1 h-10 md:h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 h-10 md:h-11"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 resize-none"
                      placeholder="Please describe your inquiry or requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary-900 hover:bg-primary-800 h-11 md:h-12 text-base">
                    <Send className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Need Urgent Supplies?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              For urgent medical supply needs or emergency orders, contact us directly. We understand that healthcare
              can't wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call: 0678 389 075
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
