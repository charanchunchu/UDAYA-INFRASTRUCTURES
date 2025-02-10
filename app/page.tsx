"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import App from "./sliders/sliders"
import { motion } from "framer-motion"
import { fadeIn } from "./variants"
import AdvantagesSection from "./advantages/advantage"
// import { WorldMapDemo } from "./franchise/franchise"

import dynamic from "next/dynamic";
// import { WorldMapDemo } from "@/components/franchise"

const WorldMapDemo = dynamic(() => import("@/components/franchise/franchise"), {
  ssr: false,
  loading: () => <p className="text-center">Loading...</p>,
});

const slides = [
  {
    id: 1,
    title: "UDAY",
    subtitle: "WINDOWS & DOORS",
    description:
      "Transforming homes with premium windows and doors. We bring light, style, and energy efficiency to every space.",
    image: "/Klissa-Wood.jpg",
  },
  {
    id: 2,
    title: "MODERN",
    subtitle: "INTERIORS",
    description: "Elevate your living spaces with our contemporary interior solutions and expert craftsmanship.",
    image: "modern_interior",
  },
  {
    id: 3,
    title: "MODERN",
    subtitle: "ARCHITECTURE",
    description: "Exploring the heights of modern architectural marvels. Where innovation meets design excellence.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&q=80",
  },
  {
    id: 4,
    title: "LIFETIME",
    subtitle: "WARRANTY",
    description: "We stand behind our products with comprehensive warranty coverage for your peace of mind.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&q=80",
  },
]
const values = [
  {
    title: "Quality",
    description: "We maintain the highest standards in materials and craftsmanship.We maintain the highest standards in materials and craftsmanship.We maintain the highest standards in materials and craftsmanship.We maintain the highest standards in materials and craftsmanship.We maintain the highest standards in materials and craftsmanship.",
    link: "/about#quality",
  },
  {
    title: "Innovation",
    description: "Embracing new technologies for better solutions.Embracing new technologies for better solutions.Embracing new technologies for better solutions.Embracing new technologies for better solutions.Embracing new technologies for better solutions.",
    link: "/about#innovation",
  },
  {
    title: "Sustainability",
    description: "Creating eco-friendly solutions for a better tomorrow.Creating eco-friendly solutions for a better tomorrow.Creating eco-friendly solutions for a better tomorrow.Creating eco-friendly solutions for a better tomorrow.Creating eco-friendly solutions for a better tomorrow.",
    link: "/about#sustainability",
  },
  {
    title: "Reliability",
    description: "Building trust through consistent excellence.Building trust through consistent excellence.Building trust through consistent excellence.Building trust through consistent excellence.Building trust through consistent excellence.",
    link: "/about#reliability",
  },
  {
    title: "Customization",
    description: "Creating eco-friendly solutions for a better tomorrow.Creating eco-friendly solutions for a better tomorrow.Creating eco-friendly solutions for a better tomorrow.Creating eco-friendly solutions for a better tomorrow.Creating eco-friendly solutions for a better tomorrow.",
    link: "/about#sustainability",
  },
  {
    title: "Installation",
    description: "Building trust through consistent excellence.Building trust through consistent excellence.Building trust through consistent excellence.Building trust through consistent excellence.Building trust through consistent excellence.",
    link: "/about#reliability",
  },
]
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "Uday Infrastructure transformed our office space into a modern, efficient workplace. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Mayor, Greenville",
    content: "Their urban development project revitalized our city center. The results are simply outstanding.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Chief Architect, DesignPro",
    content: "Working with Uday Infrastructure was a pleasure. Their innovative approach sets them apart.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
]
const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&h=600&q=80",
    alt: "Modern Windows",
    title: "Sleek Design",
    description: "Contemporary windows for a bright, open feel",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&q=80",
    alt: "Elegant Doors",
    title: "Grand Entrances",
    description: "Make a statement with our premium doors",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&q=80",
    alt: "Interior Finish",
    title: "Perfect Interiors",
    description: "Enhance your living spaces with our interior solutions",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&q=80",
    alt: "Warranty Service",
    title: "Lifetime Support",
    description: "Our products are backed by comprehensive warranties",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&h=600&q=80",
    alt: "Modern Windows",
    title: "Sleek Design",
    description: "Contemporary windows for a bright, open feel",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&q=80",
    alt: "Elegant Doors",
    title: "Grand Entrances",
    description: "Make a statement with our premium doors",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&q=80",
    alt: "Interior Finish",
    title: "Perfect Interiors",
    description: "Enhance your living spaces with our interior solutions",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&q=80",
    alt: "Warranty Service",
    title: "Lifetime Support",
    description: "Our products are backed by comprehensive warranties",
  },
]

const customizationOptions = [
  {
    id: "colors",
    icon: "/colours.png",
    label: "Colours",
    position: { top: "20%", left: "20%" },
    href: "/services#colors", 
  },
  {
    id: "glass",
    icon: "/glass.png",
    label: "Glass",
    position: { top: "40%", left: "30%" },
    href: "/services#glass", 
  },
  {
    id: "hardware",
    icon: "/hardware.png",
    label: "Hardware",
    position: { top: "60%", left: "46%" },
    href: "/services#hardware", 
  },
  {
    id: "mesh",
    icon: "/mesh.png",
    label: "Mesh & Grill",
    position: { top: "40%", right: "30%" },
    href: "/services#mesh", 
  },
  {
    id: "laminate",
    icon: "/laminate.png",
    label: "Laminate",
    position: { top: "20%", right: "20%" },
    href: "/services#laminate", 
  },
];
const windowColors = [
  { id: 'brown', src: '/half.png', label: 'Classic Brown' },
  { id: 'white', src: '/customization-pic.jpg', label: 'Pure White' },
  { id: 'black', src: '/lovable-uploads/window-black.png', label: 'Modern Black' },
  { id: 'gray', src: '/lovable-uploads/window-gray.png', label: 'Urban Gray' },
];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(windowColors[0]);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div className="min-h-screen">
      <div id="banner" className="min-h-screen bg-black text-white">
        <div
          className="relative h-screen overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}

          <div className="relative h-full">
            <div className="container mx-auto px-4 h-full flex items-center">
              <motion.div variants={fadeIn("up", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
              className="max-w-xl">
                <h1 className="text-7xl font-bold mb-4 transition-all duration-500 transform">
                  <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text block">{slides[currentSlide].title}</span>
                  <span className="text-white">{slides[currentSlide].subtitle}</span>
                </h1>
                <p className="text-gray-300 mb-8 text-lg transition-all duration-500">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </div>
          </div>



          <div className="absolute bottom-8 right-8 flex gap-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors ${currentSlide === index ? "border-orange-500" : "border-transparent"
                  }`}
              >
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${currentSlide === index ? "w-8 bg-orange-500" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-black text-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&q=80"
                  alt="Our Approach"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4 relative group inline-block">
                  Our Approach
                  <span className="absolute left-0 bottom-[-6px] h-1 w-10 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-white-600 mb-6">
                  At Uday Infrastructure, we believe in a holistic approach to urban development. Our team of experts
                  combines innovative design, sustainable practices, and cutting-edge technology to create
                  infrastructure that not only meets the needs of today but is also prepared for the challenges of
                  tomorrow.
                </p>
                <Button size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our values are</h2>
          <p className="text-4xl text-center mb-12">
            <span className="text-red-500">part of</span> <span className="text-purple-500">everything</span> we build.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow bg-gray-100 text-black column large-7 medium-12"
                style={{
                  fontSize: '17px',
                  lineHeight: '1.47059',
                  fontWeight: 400,
                  letterSpacing: '-.022em',
                  fontFamily: 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                  boxSizing: 'border-box',
                  padding: '2.23529em 8.33333%',
                  borderRadius: '18px',
                  backgroundColor: '#f5f5f7',
                  border: '1px solid transparent',
                  color: '#1d1d1f',
                  transform: 'matrix(1, 0, 0, 1, 0, 0)',
                  opacity: 1,
                  transition: 'transform 0.3s ease, opacity 0.3s ease'
                }}
              >
                <h3
                  className="text-4xl font-semibold mb-3"
                  style={{
                    lineHeight: '1.08349',
                    letterSpacing: '-.025em',
                    fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif'
                  }}
                >
                  {value.title}
                </h3>
                <p className="text-white-600 mb-4">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Customization Section */}
      <section className="bg-gray-900">
        {/* <FadeIn> */}
          <div className="relative py-24 min-h-screen flex items-center">
            <div className="container mx-auto px-4">
             <div className="text-center">
             <h2 className="text-4xl text-white text-center font-bold mb-4 relative group inline-block">
              Customization
                  <span className="absolute left-0 bottom-[-6px] h-1 w-20 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
             </div>
              <div className="relative flex justify-center min-h-[600px] mt-12">
                {/* Central Window Image */}
                <div className="relative w-[300px] h-[300px] transition-all duration-500 hover:scale-105">
                  <img
                    src={selectedColor.src}
                    alt="Window Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Customization Options */}
                {customizationOptions.map((option) => (
                  <Link key={option.id} href={option.href}>
                    <div
                      className="absolute cursor-pointer transform hover:scale-110 transition-transform"
                      style={{
                        ...option.position,
                        zIndex: 5, // Adjusted z-index
                      }}
                    >
                      <div>
                        <img
                          src={option.icon}
                          alt={option.label}
                          className="w-20 h-20 object-cover rounded-full z-10"
                        />
                      </div>
                      <p className="text-white text-sm mt-2 text-center">
                        {option.label}
                      </p>
                    </div>
                  </Link>
                ))}
                {/* Color Selection */}
                {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex gap-4">
                    {windowColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${selectedColor.id === color.id
                            ? "border-luxury-gold scale-110"
                            : "border-transparent hover:border-white/50"
                          }`}
                      >
                        <img
                          src={color.src}
                          alt={color.label}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </button>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        {/* </FadeIn> */}
      </section>

      <section className="py-20 bg-gray-100">
        <App />
      </section>

      { /* Projects Section */}
      {/* <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carouselImages.map((image) => (
              <div key={image.id} className="relative overflow-hidden rounded-lg group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-white">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Testimonials Section */}
      <section className="py-0 bg-gray-900">
      <div className="container mx-auto px-4">
        <AdvantagesSection />
        </div>
      </section>

      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20">
        <WorldMapDemo />
      </section>
    </div>
  )
}

