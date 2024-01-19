import React from "react";
import downloadImg from "../../assets/img/images/download_img.png";
import downloadBtn01 from "../../assets/img/images/download_btn01.svg";
import downloadBtn02 from "../../assets/img/images/download_btn02.svg";

const DownloadArea = () => {
  return (
    <section className="download-area pt-150 pb-140">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div
              className="download-img text-center wow fadeInRight"
              data-wow-delay=".2s"
            >
              <img src={downloadImg} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div
              className="download-content wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-20">
                <span className="sub-title">Download OUR App</span>
                <h2 className="title">
                DRX APP: Connect, express, and play in one place!         </h2>
              </div>
              <p>
              Stay stylish with fashion updates, enjoy seamless gaming, and grab exclusive giveaways. Your all-in-one hub for fashion, entertainment, and community engagement.
              </p>
              <div className="download-btn">
                <a href="#">
                  <img src={downloadBtn01} alt="" />
                </a>
                <a href="#">
                  <img src={downloadBtn02} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadArea;
