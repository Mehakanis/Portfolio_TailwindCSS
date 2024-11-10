import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

import React from 'react'

const About = () => {
  return (
    // <main className="flex min-h-screen flex-col bg-[#121212]">
        <main className="flex min-h-screen bg-[#121212]">
        <div className="container  mx-auto px-12 py-4">

      <Navbar />
     {/* <div className="container mt-24 mx-auto px-2 py-2"> */}
     <AboutSection />
     
     <Footer />
     </div>
    </main>
  )
}

export default About;