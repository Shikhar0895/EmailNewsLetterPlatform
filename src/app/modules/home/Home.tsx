import Header from "@/app/shared/widgets/header";
import Banner from "./elements/banner";
import Branding from "./elements/branding";
import Benefits from "./elements/benefits";
import FeatureHighlight from "./elements/featureHighlight";
import Pricing from "./elements/pricing";
import React from "react";
import Footer from "@/app/shared/widgets/footer/Footer";

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
