import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";

const Skills = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="SKILLS." text="My Tech Stack." />
      <Skill />
      <Footer />
    </div>
  );
};

export default Skills;
