import { useEffect, useRef, useState } from "react";
import { Building2, Rocket } from "lucide-react";

export default function FranchiseSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-4">
              {/* Rotating Border Effect */}
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                <span className="relative inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-blue-100 bg-gradient-to-r from-blue-50 to-purple-50">
                  <Building2 className="mr-2 h-4 w-4" />
                  Franchise Opportunities
                </span>
              </div>

              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow"></div>
                <span className="relative inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-purple-600 ring-1 ring-purple-100 bg-gradient-to-r from-purple-50 to-pink-50">
                  <Rocket className="mr-2 h-4 w-4" />
                  Rapid Growth
                </span>
              </div>
            </div>

            {/* H1 with Continuous Fade-in on Scroll */}
            <h1
              className={`mt-8 text-4xl py-10 font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Join Our Growing Network
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 animate-fade-up">
              Transform your entrepreneurial dreams into reality with our proven franchise model. Access industry-leading support, training, and a pathway to success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
