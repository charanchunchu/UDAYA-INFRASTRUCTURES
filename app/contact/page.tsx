"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeIn } from "@/components/animations/fade-in"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    description: "UDAYA INFRASTRUCTURE, Mubharak Nagar, Nizamabad - 503003 (Beside RBVRR School)",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+91-97018028077, +91-9700919166",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "info@udayinfrastructure.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon-Sat: 9AM-6PM",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-10">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-16">Get in Touch</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We're here to help! Whether you're looking for uPVC & WPC windows and doors, professional installation, franchise opportunities, or expert guidance, reach out to us today.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-14">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid gap-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <item.icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Map Location</h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3779.085970135858!2d78.11991247335695!3d18.704968863519255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUDAYA%20INFRASTRUCTURE%2C%20Mubharak%20Nagar%2C%20Mubaraknagar%2C%20Nizamabad%20-%20503003%20(Beside%20RBVRR%20School)!5e0!3m2!1sen!2sin!4v1739725770861!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </FadeIn>
{/* 
            <FadeIn direction="right" >
               <FadeIn direction="left">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required rows={6} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
            </FadeIn> */}
          </div>
        </div>
      </div>
    </div>
  )
}

