import { useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const WhyChooseUs = () => {
  const frameRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: index * 0.2,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }
    });
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="why-choose-us" className="min-h-screen w-screen bg-white text-black">
      <div className="flex size-full flex-col items-center py-5 pb-16">
        <p className="font-general text-sm uppercase md:text-[10px] text-gray-600">
          why choose us?
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Wh<b>y</b> Choose <br /> <b>Us?</b>"
            containerClass="mt-3 pointer-events-none mix-blend-difference relative z-10"
          />
        </div>

        {/* Cards Section */}
        <div className="mt-6 grid w-full max-w-4xl gap-6 md:grid-cols-3 text-center">
          {[
            {
              title: "Expertise You Can Trust",
              desc: "Years of experience with seasoned professionals delivering top-notch IT services.",
              icon: "💡",
            },
            {
              title: "Customer-Centric Approach",
              desc: "Your goals are our priority, ensuring impactful solutions tailored to your needs.",
              icon: "🤝",
            },
            {
              title: "End-to-End Solutions",
              desc: "From strategy to implementation, we cover every step of your IT journey.",
              icon: "⚙️",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            >
              <span className="text-5xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <Button title="Discover More" containerClass="mt-8" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
