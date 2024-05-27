import Header from "@/shared/widgets/header";
import Banner from "./features/banner";
import Branding from "./features/branding";
import Benefits from "./features/benefits";
import FeatureHighlight from "./features/featureHighlight";
import React from "react";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
    </div>
  );
};

export default Home;
