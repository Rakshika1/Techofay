import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/whychooseus";
import Technologies from "./components/Technologies";
import CompanyStats from "./components/CompanyStats";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
       <About />
      <Features />
      <CompanyStats/>
      <WhyChooseUs/>
      <Technologies />
      <Contact />
      <Footer /> 
    </main>
  );
}

export default App;
