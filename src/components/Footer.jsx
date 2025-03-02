import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const locations = [
  "Vadodara (Head Office)",
  "Bharuch",
  "Gandhidham",
  "Ganjdundwara",
  "Delhi",
];

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-screen bg-gradient-to-b from-[#2c2b5e] to-[#5542ff] py-10 text-white relative overflow-hidden"
    >
      {/* Floating Animated Background Text */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center text-9xl font-bold text-white opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        TECHOFAY
      </motion.div>

      <div className="container mx-auto flex flex-col items-center gap-6 text-center relative z-10">
        {/* Company Name */}
        <motion.h2
          className="text-3xl font-extrabold tracking-widest text-yellow-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          TECHOFAY GLOBAL VENTURES PVT. LTD.
        </motion.h2>

        {/* Locations with Animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {locations.map((location, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-md shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "#ffffff30" }}
            >
              {location}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Media Icons with Glowing Effect */}
        <motion.div className="flex gap-6 mt-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white transition-all duration-300"
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright with Animated Pulse */}
        <motion.p
          className="text-sm text-gray-300 mt-4"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ©Techofay 2024. All rights reserved
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
