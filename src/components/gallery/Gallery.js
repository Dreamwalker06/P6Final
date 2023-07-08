import React, { useState } from "react";
import logementsDATA from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import "./Gallery.scss";

const Carrousel = () => {
  const carrouselStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
    marginTop: "40px",
  };
  const { id } = useParams();
  const logement = logementsDATA.find((logement) => logement.id === id);
  const galleryPictures = logement.pictures;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryPictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryPictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  const imageCountText = `${currentImageIndex + 1}/${galleryPictures.length}`;
  const renderArrows = galleryPictures.length > 1 && (
    <>
      <div className="leftArrow">
        <img
          src="../images/ArrowLeft.png"
          alt="Flèche Gauche"
          onClick={handlePreviousImage}
        />
      </div>
      <div className="imageCountText">{imageCountText}</div>
      <div className="rightArrow">
        <img
          src="../images/ArrowRight.png"
          alt="Flèche Droite"
          onClick={handleNextImage}
        />
      </div>
    </>
  );

  return (
    <div style={carrouselStyle}>
      <div className="imgCarrousel">
        <img
          src={galleryPictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            height: "100%",
            width: "1240px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        {renderArrows}
      </div>
    </div>
  );
};

export default Carrousel;
