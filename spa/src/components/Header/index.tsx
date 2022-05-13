import React from "react";
import "./styles.css";
import Tab from "./Tab";

const tabs = [
  {
    farm: "Amethyst",
    accent: "purple",
    active: true,
  },
  {
    farm: "Emerald",
    accent: "Green",
    active: false,
  },
  {
    farm: "Sapphire",
    accent: "Blue",
    active: false,
  },
];

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <div className="tab__container">
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              position={i}
              farmName={tab.farm}
              accentColour={tab.accent}
              active={tab.active}
            />
          ))}
        </div>
      </div>
      <div className="header__accent-bar" />
    </div>
  );
}

export default Header;
