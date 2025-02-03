import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "City Center Skyscraper",
    description: "A 50-story mixed-use building in the heart of downtown.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&q=80",
  },
  {
    id: 2,
    title: "Green Energy Park",
    description: "A 100-acre solar and wind energy facility powering 10,000 homes.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&q=80",
  },
  {
    id: 3,
    title: "Smart Highway System",
    description: "A 50-mile intelligent highway with integrated IoT sensors and electric vehicle charging.",
    image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=600&h=400&q=80",
  },
  {
    id: 4,
    title: "Eco-Friendly Residential Complex",
    description: "A 200-unit residential complex with LEED Platinum certification.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&q=80",
  },
]

export default function Portfolio() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

