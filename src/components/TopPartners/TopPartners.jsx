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
import img21 from "../../assets/img/partner/gudang.png";

const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "" ,link:"https://brickparkour.com/en/"},
    { src: img02, title: "" ,link:"https://www.hipmijaya.org/"},
    { src: img03, title: "" ,link:"https://www.iespa.or.id/"},
    { src: img04, title: "" ,link:"https://ifel.id/"},
    { src: img05, title: "" ,link:"https://garudaku.com/"},
    { src: img06, title: "" ,link:"https://www.instagram.com/sensentertainment/?hl=en"},
    { src: img07, title: "" ,link:"https://www.instagram.com/iwbawoodball/?hl=en"},
    { src: img08, title: "" ,link:"https://dewaunited.com/"},
    { src: img09, title: "" ,link:"https://dewaunited.com/esports/home"},
    { src: img10, title: "" ,link:"https://esportsbrunei.org/"},
    { src: img11, title: "" ,link:"https://nocindonesia.id/"},
    { src: img12, title: "" ,link:"https://www.instagram.com/mahadewaesports/"},
  ];
  const client_list = [
    { src: img21, title: "" ,link:"https://gudangkripto.id/"},
  ];


  return (
    <div className="partner-area mt-4 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Our Client</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul class="list-inline mx-auto justify-content-center">
                {partners_list.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} target="_blank">
                      <img src={item.src} alt={item.title} />
                    </a>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
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
              <ul class="list-inline mx-auto justify-content-center">
                {client_list.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} target="_blank">
                      <img src={item.src} alt={item.title} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>

   
    
  );
};

export default TopPartners;
