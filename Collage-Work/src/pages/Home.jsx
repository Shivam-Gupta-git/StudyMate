import React from "react";
import Carousel from "../Components/Carousel";
import { items, Template1 } from "../Components/CarouselData";
import Template from "../Components/Template";
import Phase3 from "../Components/Phase3";
import Phase4 from "../Components/Phase4";
import Phase5 from "../Components/Phase5";
import Phase6 from "../Components/Phase6";
import Phase7 from "../Components/Phase7";
import Phase8 from "../Components/Phase8";
import Phase9 from "../Components/Phase9";
import "./Home.css";

const Home = ({ onToast }) => {
  return (
    <div className="main-container">
      <Carousel items={items} />
      <Template Template1={Template1} />
      <Phase3 />
      <Phase4 onToast={onToast} />
      <Phase5 onToast={onToast} />
      <Phase6 />
      <Phase7 />
      <Phase8 />
      <Phase9 />
    </div>
  );
};

export default Home;