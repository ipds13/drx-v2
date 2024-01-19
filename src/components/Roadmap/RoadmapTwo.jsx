import React from "react";
import RoadmapTwoItem from "./RoadmapTwoItem";

const RoadmapTwo = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q1 2024 Business Focus",
      title: "",
      info: <>
      <i className="fa fa-spinner"></i> DRX ACTIVEWEAR products. <br />
      <i className="fa fa-spinner"></i> DRX partnership with Liga 1 team products. <br />
      <i className="fa fa-spinner"></i> DRX streetwear products. <br />
      <i className="fa fa-spinner"></i> Introduction of COC®️ - Concierge of Crime®️ (sister company) high-end apparel line. <br />
      <i className="fa fa-spinner"></i> Whitepaper & Tokenomics Development. <br />
      </>,
    },
    {
      roadmapTitle: "Q1 2024 Apps Focus",
      title: "",
      info: (
        <>
          <i className="fa fa-spinner"></i> Development of DRX ACTIVEWEAR app features.<br />
          <i className="fa fa-spinner"></i> Integration of Liga 1 team partnership features.<br />
          <i className="fa fa-spinner"></i> Launching COC®️ app with unique functionalities.<br />
          <i className="fa fa-spinner"></i> R&D efforts focused on app development and user engagement strategies.<br />
          <i className="fa fa-spinner"></i> Initiating the development of Whitepaper & Tokenomics for the DRX APPS.<br />
        </>
      ),
    },
    {
      roadmapTitle: "Q2 2024 Business Focus",
      title: "",
      info: (
        <>
         <i className="fa fa-spinner"></i>  Signing Pre-Contract agreement with a target of 8 clubs in Indonesia Major League<br />
         <i className="fa fa-spinner"></i>  Signing at least 3 athlete & Artis for brand ambassadors.<br />
         <i className="fa fa-spinner"></i>  Opening of flagship DRX megastore.<br />
         <i className="fa fa-spinner"></i>  Presale token and announcement to the public about the pre-contract with 8 clubs in Indonesia Major League<br />
         <i className="fa fa-spinner"></i>  ICO TOKEN DRX in Uniswap.<br />

        </>
      ),
    },
    {
      roadmapTitle: "Q2 2024 Apps Focus",
      title: "",
      info: <>
       <i className="fa fa-spinner"></i>  Developing DRX APPS: Add Friends, Blogging, Live Chat, API News, Payment Gateway Connect, Buy Tickets Merchandise, Weekly, Monthly, Yearly Giveaway.<br />
       <i className="fa fa-spinner"></i>  Finalizing and optimizing the DRX token integration within the app.<br />
      </>,
    },
  ];

  return (
    <section id="roadmap" className="roadmap-area-two pt-130 pb-100">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title section-title-two text-center mb-65">
              <span className="sub-title">roadmap</span>
              <h2 className="title">
                DRX Strategy and <br />
                Project Plan
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="roadmap-wrap-two">
              {roadmap_items.map((x, index) => (
                <RoadmapTwoItem key={index} item={x} />
              ))}
            </div>

            {/* <div className="roadmap-wrap-two bottom">
              {roadmap_items.map((x, index) => (
                <RoadmapTwoItem key={index} item={x} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTwo;
