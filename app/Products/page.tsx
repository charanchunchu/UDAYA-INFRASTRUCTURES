import { CheckCircle, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/gallery/image-gallery"
import { FadeIn } from "@/components/animations/fade-in"
import { TestimonialCard } from "./testimonial-card"
import { AwardsSection } from "./awards-section"

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
      src: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=800&h=600&fit=crop",
      alt: "Modern Window Design",
      title: "Premium Casement Window",
      description: "Energy-efficient casement window with triple-pane glass and advanced thermal insulation."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
      alt: "Sliding Window",
      title: "Sliding Window",
      description: "Smooth sliding window with double-pane glass and secure locking mechanism."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      alt: "Bay Window",
      title: "Bay Window",
      description: "Elegant bay window with panoramic view and excellent ventilation."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      alt: "Awning Window",
      title: "Awning Window",
      description: "Weather-resistant awning window with top-hinged design for improved airflow."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600573472591-ee6c8e695481?w=800&h=600&fit=crop",
      alt: "Picture Window",
      title: "Picture Window",
      description: "Large picture window with unobstructed views and high energy efficiency."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      alt: "Double-Hung Window",
      title: "Double-Hung Window",
      description: "Classic double-hung window with easy tilt-in cleaning and enhanced security."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop",
      alt: "Garden Window",
      title: "Garden Window",
      description: "Garden window with shelves for plants and flowers, bringing nature indoors."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      alt: "Tilt and Turn Window",
      title: "Tilt and Turn Window",
      description: "Versatile tilt and turn window with dual opening options for ventilation and cleaning."
    }
  ],
  doors: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517005097604-3ba5a5c8a535?w=800&h=600&fit=crop",
      alt: "Luxury Door Design",
      title: "Executive Entry Door",
      description: "Solid hardwood entry door with reinforced security features and elegant finish."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=800&h=600&fit=crop",
      alt: "French Door",
      title: "French Door",
      description: "Stylish French door with double-pane glass and intricate detailing."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      alt: "Patio Door",
      title: "Patio Door",
      description: "Sliding patio door with energy-efficient glass and smooth operation."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600566752826-461c1b5c2a8d?w=800&h=600&fit=crop",
      alt: "Barn Door",
      title: "Barn Door",
      description: "Rustic barn door with sliding mechanism and vintage hardware."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600566752348-6e9e83c79eef?w=800&h=600&fit=crop",
      alt: "Panel Door",
      title: "Panel Door",
      description: "Classic panel door with raised panels and durable construction."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600566752441-92bd32d2b5a8?w=800&h=600&fit=crop",
      alt: "Bi-Fold Door",
      title: "Bi-Fold Door",
      description: "Space-saving bi-fold door with smooth folding action and modern design."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      alt: "Dutch Door",
      title: "Dutch Door",
      description: "Charming Dutch door with top and bottom halves that open independently."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1600566752616-25f74e2f4e4b?w=800&h=600&fit=crop",
      alt: "Storm Door",
      title: "Storm Door",
      description: "Durable storm door with full-view glass and protective screen."
    }
  ],
  warranty: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      alt: "Warranty Certificate",
      title: "Lifetime Warranty",
      description: "Our comprehensive warranty covers all aspects of our products for complete peace of mind."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      alt: "Warranty Document",
      title: "Extended Warranty",
      description: "Extended warranty options available for additional coverage and protection."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop",
      alt: "Warranty Agreement",
      title: "Warranty Agreement",
      description: "Detailed warranty agreement outlining terms and conditions for product coverage."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
      alt: "Warranty Card",
      title: "Warranty Card",
      description: "Warranty card provided with each product for easy reference and claims."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      alt: "Warranty Service",
      title: "Warranty Service",
      description: "Dedicated warranty service team available to assist with any issues or claims."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      alt: "Warranty Support",
      title: "Warranty Support",
      description: "Comprehensive support for all warranty-related inquiries and assistance."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      alt: "Warranty Registration",
      title: "Warranty Registration",
      description: "Easy online warranty registration for quick and hassle-free coverage."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      alt: "Warranty Claim",
      title: "Warranty Claim",
      description: "Simple and efficient process for submitting warranty claims and receiving support."
    }
  ]
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Modern Homes Inc.",
    content: "The attention to detail and quality of work exceeded our expectations. A truly remarkable experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Director",
    company: "Urban Development Corp",
    content: "Their innovative approach to sustainable design has transformed our projects.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Emma Thompson",
    role: "Architect",
    company: "Thompson & Partners",
    content: "The best in the industry. Their windows and doors are simply outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-pearl to-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/80 to-luxury-navy/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
              Elevating Spaces Through
              <span className="text-luxury-gold"> Excellence</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-up">
              Discover our premium collection of architectural solutions that transform spaces into masterpieces.
            </p>
            <button className="bg-luxury-gold text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-luxury-accent transition-colors animate-fade-up">
              Explore Our Collection
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Products Section */}
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Premium <span className="text-luxury-gold">Collections</span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore our curated selection of premium windows and doors, crafted with precision and backed by industry-leading warranty coverage.
          </p>
        </FadeIn>

        <Tabs defaultValue="windows" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-12">
            <TabsTrigger value="windows">Windows</TabsTrigger>
            <TabsTrigger value="interior">Interior</TabsTrigger>
            <TabsTrigger value="doors">Doors</TabsTrigger>
            <TabsTrigger value="warranty">Warranty</TabsTrigger>
          </TabsList>
          
          <TabsContent value="windows">
            <FadeIn >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Premium Windows</h2>
                <ImageGallery images={products.windows} columns={4} />
              </div>
            </FadeIn>
          </TabsContent>
          <TabsContent value="interior">
            <FadeIn >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Interior Design</h2>
                <ImageGallery images={products.windows} columns={4} />
              </div>
            </FadeIn>
          </TabsContent>
          <TabsContent value="doors">
            <FadeIn >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Luxury Doors</h2>
                <ImageGallery images={products.doors} columns={4} />
              </div>
            </FadeIn>
          </TabsContent>
          <TabsContent value="warranty">
            <FadeIn >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Warranty Information</h2>
                <ImageGallery images={products.warranty} columns={4} />
              </div>
            </FadeIn>
          </TabsContent>
        </Tabs>

        {/* Services Grid */}
        <h2 className="text-4xl font-bold text-center mt-24 mb-12">
          Our <span className="text-luxury-gold">Services</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="text-luxury-gold mr-3 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Client <span className="text-luxury-gold">Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <AwardsSection />

      {/* Contact CTA Section */}
      <div className="bg-luxury-pearl py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and discover how our premium solutions can elevate your space.
          </p>
          <button className="bg-luxury-gold text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-luxury-accent transition-colors">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

