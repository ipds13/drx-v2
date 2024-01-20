import React from "react";
import img01 from "../../assets/img/client/Brick Hitam.png";
import img02 from "../../assets/img/client/Hipmi-06.png";
import img03 from "../../assets/img/client/IESPA-06.png";
import img04 from "../../assets/img/client/Ifel-19.png";
import img05 from "../../assets/img/client/Logo Garudaku.png";
import img06 from "../../assets/img/client/Logo Sens.png";
import img07 from "../../assets/img/client/Wood Ball Indonesia.png";
import img08 from "../../assets/img/client/duFc.png";
import img09 from "../../assets/img/client/duesport.png";
import img10 from "../../assets/img/client/esb.png";
import img11 from "../../assets/img/client/indo.png";
import img12 from "../../assets/img/client/mahadewa.png";

const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "" },
    { src: img02, title: "" },
    { src: img03, title: "" },
    { src: img04, title: "" },
    { src: img05, title: "" },
    { src: img06, title: "" },
    { src: img07, title: "" },
    { src: img08, title: "" },
    { src: img09, title: "" },
    { src: img10, title: "" },
    { src: img11, title: "" },
    { src: img12, title: "" },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Our top Client</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index}>
                    <img src={item.src} alt={item.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Our Partners</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index}>
                    <img src={item.src} alt={item.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}

    </div>

   
    
  );
};

export default TopPartners;
