import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";

const ContactOne = () => {
  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>
          Support@drxasia.com
        </>
      ),
    },
    
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
          Ventura Building,  South Jakarta City, Jakarta Indonesia <br/>
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="team-bg pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Connect with US</span>
              {/* <h2 className="title">
                Connect with US
              </h2> */}
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {info_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <ContactOneInfoItem item={x} />
              </div>
            ))}
          </div>
        </div>

        {/* section form */}
        {/* <ContactOneForm /> */}
      </div>
    </section>
  );
};

export default ContactOne;
