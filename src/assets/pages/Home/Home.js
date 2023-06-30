import React from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Cards from "../../../components/cards/Cards";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homeBanner">
        <img src="./images/Image1.webp" alt="Photo d'une falaise" />
        <h1 className="homeBanner-txt">Chez vous, partout et ailleurs</h1>
      </div>
      <Cards />

      <Footer />
    </div>
  );
};

export default Home;
