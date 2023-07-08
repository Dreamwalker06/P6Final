import React from "react";
import logementsDATA from "../../data/logements.json";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Collapse from "../../../components/collapse/Collapse";
import Tags from "../../../components/tags/Tags";
import Gallery from "../../../components/gallery/Gallery";
import { useParams } from "react-router-dom";
import "./Fiche.scss";
import Error404 from "../Error404";
import Rating from "../../../components/rating/Rating";

const Fiche = () => {
  const { id } = useParams();
  const logement = logementsDATA.find((logement) => logement.id === id);

  if (!logement) {
    return (
      <div>
        <Error404 />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Gallery />
      <div className="infoContainer">
        <div className="titleLocation">
          <h1 className="ficheTitle">{logement.title}</h1>
          <p className="ficheLocation">{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        <div className="hostAndRating">
          <div className="host">
            <p className="hostName">{logement.host.name}</p>
            <img
              className="hostPicture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Rating logementsDATA={logement.rating} />
        </div>
      </div>

      <div className="collapseFiche">
        <Collapse title="Description" text={logement.description} />
        <Collapse
          title="Equipements"
          text={
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default Fiche;
