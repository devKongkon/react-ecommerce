import React from "react";
import { AllProducts, FeaturedProduct, Hero, Services, Trusted } from "../../index";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProduct/>
      <AllProducts/>
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
