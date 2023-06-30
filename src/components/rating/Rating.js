import React from "react";
import "./Rating.scss";

const Rating = ({ logementsDATA }) => {
  const maxRating = 5;
  const filledStarCount = Math.min(logementsDATA, maxRating);

  return (
    <div className="ratingContainer">
      {[...Array(filledStarCount)].map((_, index) => (
        <img src="../images/Filledstar.png" alt="Etoile remplie" key={index} />
      ))}
      {[...Array(maxRating - filledStarCount)].map((_, index) => (
        <img
          src="../images/Emptystar.png"
          alt="Etoile vide"
          key={index + filledStarCount}
        />
      ))}
    </div>
  );
};

export default Rating;
