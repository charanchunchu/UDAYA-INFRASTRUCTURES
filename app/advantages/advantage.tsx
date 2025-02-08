import React from "react";
import { Layers, BarChart, Shield, CheckCircle, Repeat,  } from "lucide-react";
import "./advatage.css"; // Ensure this CSS file exists

const advantages = [
  { id: 1, icon: <Layers size={23} />, text: "High Wall-Thickness" },
  { id: 2, icon: <BarChart size={23} />, text: "Multi Chambered" },
  { id: 3, icon: <Shield size={23} />, text: "7-Parts of Titanium" },
  { id: 4, icon: <CheckCircle size={23} />, text: "RoHS Certified" },
  { id: 5, icon: <Repeat size={23} />, text: "24/7 Quality Monitoring" },
//   { id: 6, icon: <Recycling size={23} />, text: "100% Recyclable, Lead-Free" }
];

const AdvantagesSection = () => {
  return (
    <div className="container-fluid banner-color bg-gray-900">
      <div className="container advantage-wrapper">
        {/* Left Section - Title */}
        <div className="advantage-title">
          <h2>Advantages of ÖKOTECH</h2>
        </div>

        {/* Right Section - Advantages */}
        <div className="advantage-grid">
          {advantages.map((adv) => (
            <div key={adv.id} className="advantage-box">
              {adv.icon}
              <span>{adv.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
