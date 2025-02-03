import { Trophy } from "lucide-react";

const awards = [
  {
    year: "2023",
    title: "Best Sustainable Design",
    organization: "Green Building Council",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Innovation in Architecture",
    organization: "Design Excellence Awards",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "Best Residential Project",
    organization: "Architecture Digest",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "Customer Satisfaction",
    organization: "Builder's Choice",
    icon: Trophy,
  },
];

export function AwardsSection() {
  return (
    <div className="py-16 bg-luxury-navy text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-luxury-gold">Awards</span> & Recognition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <award.icon className="w-12 h-12 text-luxury-gold mb-4" />
              <p className="text-luxury-gold font-semibold mb-2">{award.year}</p>
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-sm text-gray-400">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}