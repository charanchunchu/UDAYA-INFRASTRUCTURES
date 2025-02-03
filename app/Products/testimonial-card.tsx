import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export function TestimonialCard({ name, role, company, content, rating, image }: TestimonialProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold"
        />
        <div>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
            ))}
          </div>
          <p className="text-gray-700 italic mb-4">{content}</p>
          <div>
            <p className="font-semibold text-luxury-navy">{name}</p>
            <p className="text-sm text-luxury-muted">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}