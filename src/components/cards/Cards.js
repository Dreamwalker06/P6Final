import React from "react";
import logementsDATA from "../../assets/data/logements.json";
import { NavLink } from "react-router-dom";
import "./Cards.scss";

const Card = () => {
  return (
    <div className="cards-container">
      {logementsDATA.map((logement) => (
        <NavLink to={`/logements/${logement.id}`} key={logement.id}>
          <div className="card" key={logement.id}>
            <div className="image-container">
              <div className="text-overlay">
                <h3>{logement.title}</h3>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
