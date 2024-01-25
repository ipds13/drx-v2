import React from "react";
import icon01 from "../../assets/img/icon/h2_choose_icon01.svg";
import icon02 from "../../assets/img/icon/h2_choose_icon02.svg";
import icon03 from "../../assets/img/icon/h2_choose_icon03.svg";
import icon04 from "../../assets/img/icon/h2_choose_icon04.svg";
import WhyChooseUsTwoItem from "./WhyChooseUsTwoItem";

const WhyChooseUsTwo = () => {
  const items = [
    {
      src: icon01,
      title: "DRX Apps - Your All-in-One Solution",
      desc: "Unlock the full potential of the DRX app, serving as your comprehensive platform for scanning NFC, claiming apparel, checking live football match results, integrating NFTs, buying and selling DRX apparel, and engaging in clothing swaps. Seamlessly navigate through diverse functionalities, making DRX your ultimate destination for a multifaceted experience.",
      url: "/#",
    },
    {
      src: icon02,
      title: "Security Guaranteed with Ethereum Technology",
      desc: "Harness the power of Ethereum to ensure high-level transaction security. As part of the Ethereum blockchain ecosystem, every purchase, sale, or exchange of DRX tokens is secured through a safe, reliable, and decentralized process. Utilizing Ethereum technology ensures an optimal level of security to safeguard both funds and user data.",
      url: "/#",
    },
    {
      src: icon03,
      title: "NFC-Enabled Apparel",
      desc: "Enjoy added convenience and security with apparel equipped with NFC technology. With this technology, you can make transactions or access information with a simple touch, enhancing your shopping or interaction experience with the DRX app, making it faster and more efficient.",
      url: "/#",
    },
    {
      src: icon04,
      title: "Charitable Utility Program",
      desc: "Make a positive impact with our utility program geared towards charity. DRX tokens not only provide additional perks for users but also contribute to various charitable causes. Participate in transactions and help support meaningful initiatives through the DRX app.",
      url: "/#",
    },
  ];

  return (
    <section className="choose-area-two choose-bg pb-130">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Why choose DRX Token</span>
              {/* <h2 className="title">Why you choose DRX Token</h2> */}
            </div>
          </div>
        </div>

        <div className="row">
          {items.map((x, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <WhyChooseUsTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsTwo;
