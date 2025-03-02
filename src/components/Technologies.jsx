import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import AnimatedTitle from "./AnimatedTitle";

const Technologies = () => {
  const sectionRef = useRef(null);
  const techRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    techRefs.current.forEach((tech, index) => {
      gsap.fromTo(
        tech,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tech,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const technologies = [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "🌐" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎩" },
    { name: "MongoDB", icon: "🍃" },
    { name: "GraphQL", icon: "🔗" },
    { name: "Tailwind CSS", icon: "🎨" },
  ];

  return (
    <div id="technologies" ref={sectionRef} className="relative min-h-screen w-screen bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-40" />

      <div className="container mx-auto flex flex-col items-center py-20 px-6 text-center">
        <p className="font-general text-sm uppercase md:text-[10px] text-gray-400">
          Technologies We Work With
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Techn<b>o</b>logies We <br /> <b>Use</b>"
            containerClass="mt-3 pointer-events-none mix-blend-difference relative z-10"
          />
        </div>

        <p className="mt-4 max-w-xl text-lg text-gray-300">
          We leverage the latest tools and frameworks to deliver high-performance solutions.
        </p>

        {/* Tech Grid */}
        <div className="mt-6 grid w-full max-w-5xl gap-6 md:grid-cols-4 sm:grid-cols-2 text-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              ref={(el) => (techRefs.current[index] = el)}
              className="relative flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <span className="text-5xl">{tech.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-200">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
