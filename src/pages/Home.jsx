import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";

const Home = () => {
  const data = {
    name: "Mero Pasal",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
    </>
  );
};

export default Home;
