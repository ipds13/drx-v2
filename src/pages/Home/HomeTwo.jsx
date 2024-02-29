import React from "react";
import About from "../../components/About/About";
import BannerTwo from "../../components/Banner/BannerTwo";
import ContactTwo from "../../components/Contact/ContactOne";
import CountDownTwo from "../../components/CountDown/CountDownTwo";
import CounterArea from "../../components/CounterArea/CounterArea";
import DownloadArea from "../../components/DownloadArea/DownloadArea";
import Faq from "../../components/Faq/Faq";
import Newsletter from "../../components/Newsletter/Newsletter";
import RoadmapTwo from "../../components/Roadmap/RoadmapTwo";
import TeamTwo from "../../components/Team/TeamTwo";
import WhyChooseUsTwo from "../../components/WhyChooseUs/WhyChooseUsTwo";
import LayoutTwo from "../../layouts/LayoutTwo";
import Sales from "../../components/Sales/Sales";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs"; 
import TopPartners from "../../components/TopPartners/TopPartners";

const HomeTwo = () => {
  return (
    <LayoutTwo>
      <main>
        <BannerTwo />
        <CountDownTwo />
        <About />
        <WhyChooseUsTwo />
        <CounterArea />
        <RoadmapTwo />
        {/* <Sales /> */}
        {/* <TeamTwo /> */}
        <TopPartners />
        <DownloadArea />
        {/* <WhyChooseUs /> */}
        <ContactTwo />
        {/* <Newsletter /> */}
      </main>
    </LayoutTwo>
  );
};

export default HomeTwo;
