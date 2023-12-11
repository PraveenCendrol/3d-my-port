import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};
const renderContent = {
  1: (
    <h1 className="sm:text-center sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Praveen,KB</span>👉👈
      <br />A Software Developer from INDIA
    </h1>
  ),
  2: (
    <InfoBox
      text={"Worked with Cendrol and Picked up many skills along the way"}
      link={"/about"}
      btnText={"Learn More"}
    />
  ),
  3: (
    <InfoBox
      text={"Worked as Lead developer in 3+ projects. Curious about results?"}
      link={"/potfolio"}
      btnText={"Visit my Portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a Project done or Looking for a dev, I am just few clicks away."
      }
      link={"/contact"}
      btnText={"Lets Talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};

export default HomeInfo;
