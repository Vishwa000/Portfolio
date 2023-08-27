import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="ABOUT."
        text="I'm a skilled and enthusiastic 🚀👨‍💻 full-stack developer💻.."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
