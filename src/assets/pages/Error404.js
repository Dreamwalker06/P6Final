import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Erreur from "../../components/erreur/Erreur";

const Home = () => {
  return (
    <div>
      <Header />
      <Erreur />
      <Footer />
    </div>
  );
};

export default Home;
