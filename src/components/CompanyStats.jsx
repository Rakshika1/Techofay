import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const CompanyStats = () => {
  const frameRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const element = frameRef.current;
    const container = containerRef.current;
    const textBlock = textRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8, y: 100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      textBlock,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textBlock,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div id="stats" className="min-h-screen w-screen bg-black text-blue-50 flex items-center justify-center px-6">
      <div ref={containerRef} className="max-w-5xl w-full flex flex-col items-center py-10 pb-24 text-center">
        <p className="font-general text-sm uppercase tracking-widest opacity-80">Our Achievements</p>

        <div className="relative w-full mt-5">
          <AnimatedTitle
            title="Our C<b>o</b>mpany <br /> At a Gl<b>a</b>nce"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="stats-card flex flex-col items-center p-8 bg-gray-800 text-white rounded-lg shadow-xl">
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-sm opacity-80">Clients Worldwide</p>
            </div>
            <div className="stats-card flex flex-col items-center p-8 bg-gray-800 text-white rounded-lg shadow-xl">
              <h3 className="text-4xl font-bold">10 Years</h3>
              <p className="text-sm opacity-80">Industry Experience</p>
            </div>
            <div className="stats-card flex flex-col items-center p-8 bg-gray-800 text-white rounded-lg shadow-xl">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-sm opacity-80">Successful Projects</p>
            </div>
          </div>
        </div>

        <div ref={textRef} className="mt-10 flex flex-col items-center text-center md:text-left md:items-start">
          <p className="max-w-md text-violet-50 opacity-80">
            We are proud to have served global clients with top-notch solutions, delivering high-quality projects with over a decade of expertise.
          </p>

          <Button
            id="more-info-btn"
            title="Learn More"
            containerClass="mt-5 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
