import "./HeroimgStyles.css";
import IntroImg from "../assets/photo-background.jpg";
import resume from "../assets/Vishwa Resume.pdf";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>
          HI, I'M <b>Vishwa</b>.
        </p>
        <h1>FullStack Developer.</h1>
        <div>
          <Link to={"/project"} className="btn">
            Projects
          </Link>
          <NavLink to={resume} target="blank">
            <button class="btn">
              {" "}
              download CV{" "}
              <FaDownload
                size={16}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
