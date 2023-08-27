import "./WorkCardStyles.css";
import pro1 from "../assets/project1.png";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = ({ imgsrc, title, skills, text, view, source }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="image" />
      <h2 className="project-title">
        {title}
        <h6>{skills}</h6>
      </h2>

      <div className="pro-details">
        <p>{text}</p>

        <div className="pro-btns">
          <NavLink to={view} className="btn" target="blank">
            View
          </NavLink>
          <NavLink to={source} className="btn" target="blank">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
