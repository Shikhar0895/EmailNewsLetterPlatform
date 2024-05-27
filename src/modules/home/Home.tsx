import Header from "@/shared/widgets/header";
import Banner from "./features/banner";
import Branding from "./features/branding";
import Benefits from "./features/benefits";
import FeatureHighlight from "./features/featureHighlight";
import Pricing from "./features/pricing";
import React from "react";
import Footer from "@/shared/widgets/footer/Footer";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
