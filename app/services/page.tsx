"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/gallery/image-gallery"
import { FadeIn } from "@/components/animations/fade-in"
import {fadeIn} from "../variants"

const services = [
  {
    title: "Construction Management",
    description: "Expert oversight of construction projects from inception to completion.",
    features: ["Project planning", "Cost estimation", "Quality control", "Timeline management"],
  },
  {
    title: "Sustainable Design",
    description: "Eco-friendly and energy-efficient designs for modern infrastructure.",
    features: ["LEED certification", "Green building materials", "Energy modeling", "Waste reduction strategies"],
  },
  {
    title: "Urban Planning",
    description: "Comprehensive urban development solutions for growing cities.",
    features: ["Master planning", "Zoning analysis", "Traffic management", "Public space design"],
  },
  {
    title: "Infrastructure Maintenance",
    description: "Ongoing maintenance and repair services for existing infrastructure.",
    features: ["Regular inspections", "Preventive maintenance", "Emergency repairs", "Asset management"],
  },
]

const products = {
  windows: [
    {
      id: 1,
      src: "/window_1.jpeg",
      alt: "Modern Window Design",
      title: "Premium Casement Window",
      description: "Energy-efficient casement window with triple-pane glass and advanced thermal insulation.",
    },
    {
      id: 2,
      src: "/window_2.jpg",
      alt: "Sliding Window",
      title: "Sliding Window",
      description: "Smooth sliding window with double-pane glass and secure locking mechanism.",
    },
    {
      id: 3,
      src: "window_3.jpeg",
      alt: "Bay Window",
      title: "Bay Window",
      description: "Elegant bay window with panoramic view and excellent ventilation.",
    },
    {
      id: 4,
      src: "window_4",
      alt: "Awning Window",
      title: "Awning Window",
      description: "Weather-resistant awning window with top-hinged design for improved airflow.",
    },
    {
      id: 5,
      src: "window_5.jpg",
      alt: "Picture Window",
      title: "Picture Window",
      description: "Large picture window with unobstructed views and high energy efficiency.",
    },
    {
      id: 6,
      src: "window_6.webp",
      alt: "Double-Hung Window",
      title: "Double-Hung Window",
      description: "Classic double-hung window with easy tilt-in cleaning and enhanced security.",
    },
    {
      id: 7,
      src: "window_7",
      alt: "Garden Window",
      title: "Garden Window",
      description: "Garden window with shelves for plants and flowers, bringing nature indoors.",
    },
    {
      id: 8,
      src: "window_8",
      alt: "Tilt and Turn Window",
      title: "Tilt and Turn Window",
      description: "Versatile tilt and turn window with dual opening options for ventilation and cleaning.",
    },
  ],
  interior: [
    {
      id: 1,
      src: "/interior_1",
      alt: "Luxury Door Design",
      title: "Executive Entry Door",
      description: "Solid hardwood entry door with reinforced security features and elegant finish.",
    },
    {
      id: 2,
      src: "/interio_2.jpg",
      alt: "French Door",
      title: "French Door",
      description: "Stylish French door with double-pane glass and intricate detailing.",
    },
    {
      id: 3,
      src: "/interior_3.jpg",
      alt: "Patio Door",
      title: "Patio Door",
      description: "Sliding patio door with energy-efficient glass and smooth operation.",
    },
    {
      id: 4,
      src: "/interior_4",
      alt: "Barn Door",
      title: "Barn Door",
      description: "Rustic barn door with sliding mechanism and vintage hardware.",
    },
    {
      id: 5,
      src: "/interior_9.png",
      alt: "Panel Door",
      title: "Panel Door",
      description: "Classic panel door with raised panels and durable construction.",
    },
    {
      id: 6,
      src: "/interio_11.webp",
      alt: "Bi-Fold Door",
      title: "Bi-Fold Door",
      description: "Space-saving bi-fold door with smooth folding action and modern design.",
    },
    {
      id: 7,
      src: "/interior_7",
      alt: "Dutch Door",
      title: "Dutch Door",
      description: "Charming Dutch door with top and bottom halves that open independently.",
    },
    {
      id: 8,
      src: "/inter-8.jpg",
      alt: "Storm Door",
      title: "Storm Door",
      description: "Durable storm door with full-view glass and protective screen.",
    },
  ],
  doors: [
    {
      id: 1,
      src: "/door_1",
      alt: "Luxury Door Design",
      title: "Executive Entry Door",
      description: "Solid hardwood entry door with reinforced security features and elegant finish.",
    },
    {
      id: 2,
      src: "/door_2.jpg",
      alt: "French Door",
      title: "French Door",
      description: "Stylish French door with double-pane glass and intricate detailing.",
    },
    {
      id: 3,
      src: "/door_3.jpg",
      alt: "Patio Door",
      title: "Patio Door",
      description: "Sliding patio door with energy-efficient glass and smooth operation.",
    },
    {
      id: 4,
      src: "/door_4",
      alt: "Barn Door",
      title: "Barn Door",
      description: "Rustic barn door with sliding mechanism and vintage hardware.",
    },
    {
      id: 5,
      src: "/door_5.jpg",
      alt: "Panel Door",
      title: "Panel Door",
      description: "Classic panel door with raised panels and durable construction.",
    },
    {
      id: 6,
      src: "/door_6.jpg",
      alt: "Bi-Fold Door",
      title: "Bi-Fold Door",
      description: "Space-saving bi-fold door with smooth folding action and modern design.",
    },
    {
      id: 7,
      src: "/door_9.png",
      alt: "Dutch Door",
      title: "Dutch Door",
      description: "Charming Dutch door with top and bottom halves that open independently.",
    },
    {
      id: 8,
      src: "/door_8.jpg",
      alt: "Storm Door",
      title: "Storm Door",
      description: "Durable storm door with full-view glass and protective screen.",
    },
  ],
  warranty: [
    {
      id: 1,
      src: "warent_certi.jpg",
      alt: "Warranty Certificate",
      title: "Lifetime Warranty",
      description: "Our comprehensive warranty covers all aspects of our products for complete peace of mind.",
    },
    {
      id: 2,
      src: "warrent_loan.png",
      alt: "Warranty Document",
      title: "Extended Warranty",
      description: "Extended warranty options available for additional coverage and protection.",
    },
    {
      id: 3,
      src: "warent_agree.jpg",
      alt: "Warranty Agreement",
      title: "Warranty Agreement",
      description: "Detailed warranty agreement outlining terms and conditions for product coverage.",
    },
    {
      id: 4,
      src: "warrent_cards.png",
      alt: "Warranty Card",
      title: "Warranty Card",
      description: "Warranty card provided with each product for easy reference and claims.",
    },
    {
      id: 5,
      src: "warrent_serv.jpg",
      alt: "Warranty Service",
      title: "Warranty Service",
      description: "Dedicated warranty service team available to assist with any issues or claims.",
    },
    {
      id: 6,
      src: "warrent_support.jpg",
      alt: "Warranty Support",
      title: "Warranty Support",
      description: "Comprehensive support for all warranty-related inquiries and assistance.",
    },
    {
      id: 7,
      src: "warrent_reg.jpg",
      alt: "Warranty Registration",
      title: "Warranty Registration",
      description: "Easy online warranty registration for quick and hassle-free coverage.",
    },
    {
      id: 8,
      src: "warrent_app.jpg",
      alt: "Warranty Claim",
      title: "Warranty Claim",
      description: "Simple and efficient process for submitting warranty claims and receiving support.",
    },
  ],
}

const glassTypes = [
  {
    name: "Tinted Glass",
    description: "Filter sunlight with tinted glass",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Laminated Glass",
    description: "Enhanced security with laminated glass",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Clear Glass",
    description: "Soak in great views with clear glass",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Frosted Glass",
    description: "Enhanced privacy with frosted glass",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const woodFinishes = [
  { name: "Walnut", color: "rgb(89, 47, 29)" },
  { name: "Dark Oak", color: "rgb(52, 28, 17)" },
  { name: "Rustic", color: "rgb(101, 67, 33)" },
  { name: "Mahagoni", color: "rgb(103, 28, 28)" },
  { name: "Golden Oak", color: "rgb(184, 115, 51)" },
]

const glazingTypes = [
  {
    title: "Single Glazing",
    description: "Single glazing includes just one single layer of glass.",
  },
  {
    title: "Double Glazing",
    description:
      "In double glazing, two layers of glass are sealed together with an air space left in between the two for better thermal performance.",
  },
  {
    title: "Triple Glazing",
    description:
      "Triple glazing refers to three layers of glass sealed together with an air space left in between the three layers for better thermal performance.",
  },
]

const meshTypes = [
  {
    title: "SS Mesh",
    description:
      "A strong and durable mesh option that offers clear visibility to the outside. It gives improved ventilation and is corrosion and rust free.",
  },
  {
    title: "Fiber Mesh",
    description:
      "Fiber mess coated with Vinyl is commonly preferred as a mesh material in windows & doors. It does not corrode, dent, rust or unravel and is affordable and easy to install.",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <AnimatePresence>
      <div className="container-fluid mx-auto px-4 py-16">
        <FadeIn >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Products & Services</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover our premium collection of windows and doors, backed by industry-leading warranty coverage.
          </p>
        </FadeIn>

        <Tabs defaultValue="windows" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-12">
            <TabsTrigger value="interior">Interior</TabsTrigger>
            <TabsTrigger value="doors">Doors</TabsTrigger>
            <TabsTrigger value="windows">Windows</TabsTrigger>
            <TabsTrigger value="warranty">Warranty</TabsTrigger>
          </TabsList>
          
          <TabsContent value="interior">             
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Interior Design</h2>
                <ImageGallery images={products.interior} columns={4} />
              </div>
          </TabsContent>
          <TabsContent value="doors">             
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Luxury Doors</h2>
                <ImageGallery images={products.doors} columns={4} />
              </div>
          </TabsContent>
          <TabsContent value="windows">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Premium Windows</h2>
                <ImageGallery images={products.windows} columns={4} />
              </div>
          </TabsContent>
          <TabsContent value="warranty">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Warranty Information</h2>
                <ImageGallery images={products.warranty} columns={4} />
              </div>
          </TabsContent>
        </Tabs>
        {/* <h1 className="text-4xl font-bold mb-8 text-center mt-12">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

{/* <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"> */}
      {/* Glass Section */}
      <section id="glass" className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn key="section-1"  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div className="relative h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IbIEfOIAimCL3uE3MQLoEmN0KNuWKE.png"
                  alt="Glass Options"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>
            <FadeIn key="section-2" direction="down" delay={0.2} duration={0.8} amount={0.5}>
              <div>
                <h2 className="text-4xl font-bold mb-6">Glass</h2>
                <p className="text-gray-600 mb-8">
                  Offer your customers a wide choice of glass. Filter sunlight with tinted glass, soak in great views
                  with clear glass, get the benefit of enhanced security with laminated glass. If some customers prefer
                  enhanced privacy, they can opt for frosted glass.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {glassTypes.map((type) => (
                    <motion.div key={type.name} className="p-4 bg-white rounded-lg shadow-md" whileHover={{ y: -5 }}>
                      <h3 className="font-semibold mb-2">{type.name}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Lamination Section */}
      <section id="laminate" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div>
                <h2 className="text-4xl font-bold mb-6">Lamination</h2>
                <p className="text-gray-600 mb-8">
                  As an Okotech fabricator-partner, you can offer customers a range of lamination & texture options,
                  including natural wood finish in Golden Oak, Walnut, Rustic Oak, Dark Oak or Mahogany. Or simply an
                  elegant white.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {woodFinishes.map((finish) => (
                    <motion.div key={finish.name} className="text-center" whileHover={{ scale: 1.05 }}>
                      <div className="w-full h-24 rounded-lg mb-2" style={{ backgroundColor: finish.color }} />
                      <p className="text-sm font-medium">{finish.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div className="relative h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mQGERipbUUvfacw5AoTfgNSdO2AHPo.png"
                  alt="Lamination Options"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Colored Profile Section */}
      <section id="colors" className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div className="relative h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PkHOYm7rzDh2T33rddlGOcC7bElGmH.png"
                  alt="Colored Profiles"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div>
                <h2 className="text-4xl font-bold mb-6">Coloured Profile</h2>
                <p className="text-gray-300 mb-8">
                  Customers can choose the colours they want. Enhancing the look of their home and office spaces. They
                  can also opt for windows and doors with one colour on the inside, and a totally different one for the
                  outside.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="p-4 bg-black rounded-lg">Bold-Black</div>
                  <div className="p-4 bg-white text-black rounded-lg">Elegant-White</div>
                  <div className="p-4 bg-blue-500 rounded-lg">Edgy-Blue</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Glazing Types Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 text-center">Glazing Types</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Your customers can choose between single, double or triple glazed glass units for the Ökotech uPVC windows
              and doors you will fabricate. Deliver on thermal efficiency, and for increased security, customers can opt
              for toughened glass.
            </p>
          </FadeIn>
          {/* <div className="relative h-[400px] mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0ibkzEdNejrAuxZ58REKnlodbpv5H.png"
              alt="Glazing Types"
              fill
              className="object-contain"
            />
          </div> */}
          <div className="grid md:grid-cols-3 gap-8">
            {glazingTypes.map((type, index) => (
              <FadeIn key={type.title} delay={index * 0.1}>
                <motion.div className="bg-white p-6 rounded-lg shadow-lg" whileHover={{ y: -5 }}>
                  <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mesh Options Section */}
      <section id="hardware" className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div className="relative h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I8BnOr1b4j6RNkwG8k54EzUtTrbVYW.png"
                  alt="Mesh Options"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div>
                <h2 className="text-4xl font-bold mb-6">Mesh Options</h2>
                <p className="text-gray-600 mb-8">
                  Fiberglass, stainless steel or pet-resistant — Ökotech uPVC window and door profiles are designed to
                  suit multiple mesh options to keep mosquitoes and other insects away without obstructing views or
                  blocking ventilation.
                </p>
                <div className="space-y-6">
                  {meshTypes.map((type) => (
                    <motion.div key={type.title} className="p-6 bg-gray-50 rounded-lg" whileHover={{ scale: 1.02 }}>
                      <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Grill Section */}
      <section id="mesh" className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div>
                <h2 className="text-4xl font-bold mb-6">Grill</h2>
                <p className="text-gray-600 mb-8">
                  Offer clients customized grills. Enhancing not only the aesthetics of the Okotechu PVC windows and
                  doors, but the entire façade of the structure. Give customers the choice of fixing the grills onUPVC
                  window frame itself, or follow the traditional installation system.
                </p>
              </div>
            </FadeIn>
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div className="relative h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k6tL9ZdrJw369NjSOPAbOZYvxcz2wx.png"
                  alt="Grill Options"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Hardware Options Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div className="relative h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-as4VeM89lSBUUSJr2pwTfZYAsqB4AE.png"
                  alt="Hardware Options"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>
             <FadeIn  direction="up" delay={0.2} duration={0.8} amount={0.5}>
              <div>
                <h2 className="text-4xl font-bold mb-6">Hardware Options</h2>
                <p className="text-gray-300 mb-8">
                  Offer customers customization of not just the profile, colour, texture and glass, but give them the
                  options of picking the hardware that they want on their Ökotech windows and doors.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
    </AnimatePresence>
      </div>
    // </div>
  )
}



// motion.div variants={fadeIn("up", 0.1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}