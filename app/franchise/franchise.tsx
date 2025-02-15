import { useEffect, useRef, useState } from "react";
import { Building2, Rocket } from "lucide-react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import Link from "next/link"

export default function FranchiseSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const text =
    "Transform your entrepreneurial dreams into reality with our proven franchise model. Access industry-leading support, training, and a pathway to success.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset animation
          setTimeout(() => setIsVisible(true), 200); // Restart after a delay
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Highlighted Tags */}
            <div className="flex justify-center space-x-4">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                <span className="relative inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-blue-100 bg-gradient-to-r from-blue-50 to-purple-50">
                  <Building2 className="mr-2 h-4 w-4" />
                  Franchise Opportunities
                </span>
              </div>
              <Link href="/contact">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow"></div>
                <span className="relative inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-purple-600 ring-1 ring-purple-100 bg-gradient-to-r from-purple-50 to-pink-50">
                  <Rocket className="mr-2 h-4 w-4" />
                  Rapid Growth
                </span>
              </div>
              </Link>
              </div>
            {/* Animated Title */}
            <motion.h1
              key={isVisible ? "visible" : "hidden"} // Forces re-render on visibility change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 text-4xl py-10 font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Join Our Growing Network
            </motion.h1>
          </div>
          {/* 12-Column Grid Layout */}
          {/* <div className="grid grid-cols-12 items-center gap-6"> */}
            {/* Left - 8 Columns for Text */}
            {/* <motion.div className="col-span-12 md:col-span-8 text-white px-20">
              {isVisible &&
                text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="text-white text-lg leading-relaxed"
                  >
                    {char}
                  </motion.span>
                ))}
            </motion.div> */}
            {/* Right - 4 Columns for Globe */}
            {/* <div className="col-span-12 md:col-span-4 flex justify-center">
              <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                <Globe className="w-full h-auto" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return; // Ensure the ref is available

    let phi = 0;
    const canvas = canvasRef.current;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 500,
      height: 500,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [17.40376349837258, 78.45540929356348], size: 0.1 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "auto", maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};