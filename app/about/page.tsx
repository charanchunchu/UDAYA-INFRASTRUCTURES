"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { Award, Users, Building, Leaf } from "lucide-react"

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "200+", label: "Projects Completed" },
  { number: "50+", label: "Team Members" },
  { number: "98%", label: "Client Satisfaction" },
]

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve exceptional results.",
  },
  {
    icon: Building,
    title: "Innovation",
    description: "Embracing new technologies and methodologies.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmental responsibility.",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Uday Infrastructure</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Building excellence through innovation and sustainability
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn >
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden h-0 pb-[75%]">
              <Image
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=600&q=80"
                alt="Uday Infrastructure Team"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2005, Uday Infrastructure has grown from a small local contractor to a leading name in the
                infrastructure industry. Our journey has been marked by continuous innovation, unwavering commitment to
                quality, and a deep understanding of our clients' needs.
              </p>
              <p className="text-gray-600">
                Today, we stand as a testament to excellence in infrastructure development, having successfully
                completed numerous landmark projects that have transformed urban landscapes and improved communities.
              </p>
              <Button size="lg">Learn More</Button>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <FadeIn key={index}  delay={index * 0.1}>
              <motion.div className="bg-white rounded-xl p-6 text-center shadow-lg" whileHover={{ y: -5 }}>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <FadeIn key={index}  delay={index * 0.1}>
              <motion.div className="bg-white rounded-xl p-6 text-center shadow-lg" whileHover={{ y: -5 }}>
                <div className="inline-block p-3 bg-gray-100 rounded-lg mb-4">
                  <value.icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
