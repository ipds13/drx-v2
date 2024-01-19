import React from "react";
import aboutImg from "../../assets/img/images/h2_about_img.png";
import shape01 from "../../assets/img/images/about_shape01.png";
import shape02 from "../../assets/img/images/about_shape02.png";
import WP from "../../assets/img/images/DRX WHITEPAPER.pdf";

const About = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title">ABOUT DRX</span>
                <h2 className="title">
                Elevate Your Lifestyle with DRX
                </h2>
              </div>
              <p>
              DRX stands as the unrivaled leader worldwide, seamlessly blending cutting-edge NFC technology 
              with innovative Apparel. Our groundbreaking approach revolutionizes user 
              experiences by seamlessly integrating into the Web3 landscape. As pioneers, 
              we've set the standard, making DRX the go-to choice for a harmonious fusion of technology, 
              fashion, and the decentralized web. Embrace the future with DRX, where NFC meets Apparel in perfect harmony within the Web3 realm.
              </p>
              {/* <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Mouthwatering leading how
                    real formula also
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Locked-in have can mountain
                    thought
                  </li>
                </ul>
              </div> */}

              <a
                href={WP}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-two"
              >
                Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        {/* <img src={shape01} alt="" className="shape-one" />
        <img src={shape02} alt="" className="shape-two rotateme" /> */}
      </div>
    </section>
  );
};

export default About;
