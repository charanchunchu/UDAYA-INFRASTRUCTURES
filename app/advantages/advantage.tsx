import React from "react";
import "./advatage.css";
import { Layers, BarChart, Shield, CheckCircle, Repeat } from "lucide-react";

// const advantages = [
//   { id: 1, image: "/adv-pic1.png", text: "High Wall-Thickness" },
//   { id: 2, image: "/images/chamber.png", text: "Multi Chambered" },
//   { id: 3, image: "/images/titanium.png", text: "7-Parts of Titanium" },
//   { id: 4, image: "/images/rohs.png", text: "RoHS Certified" },
//   { id: 5, image: "/images/quality.png", text: "24/7 Quality Monitoring" },
//   { id: 6, image: "/images/quality.png", text: "100% Recyclable, Lead-Free" },
// ];
const advantages = [
  { id: 1, icon: <Layers size={23} />, text: "High Wall-Thickness" },
  { id: 2, icon: <BarChart size={23} />, text: "Multi Chambered" },
  { id: 3, icon: <Shield size={23} />, text: "7-Parts of Titanium" },
  { id: 4, icon: <CheckCircle size={23} />, text: "RoHS Certified" },
  { id: 5, icon: <Repeat size={23} />, text: "24/7 Quality Monitoring" },
  { id: 6, icon: <Layers size={23} />, text: "High Wall-Thickness" },
];
const AdvantagesSection = () => {
  return (
    <div className="container-fluid banner-color bg-gray-900">
      <div className="container advantage-wrapper">
        {/* Left Section - Title */}
        <div className="advantage-title">
          <h2>
            Advantages of <br />
            <span className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 text-transparent bg-clip-text">
              UDAYA INFRA
            </span>
          </h2>
        </div>

        {/* Right Section - Advantages */}
        <div className="advantage-grid">
          {advantages.map((adv) => (
            <div key={adv.id} className="advantage-box mt-12">
              <div className="icon-wrapper">
                {/* <img src={adv.image} alt={adv.text} className="icon-image" /> */}
                {adv.icon}
              </div>
              <span>{adv.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
