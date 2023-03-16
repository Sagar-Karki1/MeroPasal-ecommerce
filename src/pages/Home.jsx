import React from "react";
import FeatureProducts from "../components/FeatureProducts";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";

const Home = () => {
  const data = {
    name: "Mero Pasal",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
