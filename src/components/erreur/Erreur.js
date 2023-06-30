import React from "react";
import "./Erreur.scss";
import { NavLink } from "react-router-dom";

const Erreur = () => {
  return (
    <div className="erreurPage">
      <img className="erreurImage" src="../images/404.svg" alt="Image 404" />
      <p className="erreurTextOops">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/">
        <p className="erreurTextRedirection">Retourner sur la page d'accueil</p>
      </NavLink>
    </div>
  );
};

export default Erreur;
