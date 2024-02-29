import React from "react";
import img10 from "../../assets/img/team/h2_team_img10.png";
import img12 from "../../assets/img/team/h2_team_img12.png";
import TeamTwoItem from "./TeamTwoItem";

const TeamTwo = () => {
  const team_members = [
    {
      src: img10,
      name: "Sanjev",
      designation: "Chief Executive Officer",
    },
    {
      src: img12,
      name: "Kash Topan",
      designation: "Chief Marketing Officer",
    },
   
  ];

  return (
    <section className="team-area-two team-bg">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">The Mastermind</span>
              <h2 className="title">
                {/* The Leadership <br /> */}
                {/* <span>The Mastermind</span> */}
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((x, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <TeamTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTwo;
