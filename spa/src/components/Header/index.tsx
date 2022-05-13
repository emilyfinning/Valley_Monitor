import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import Tab from "./Tab";

function Header() {
  const { tabs, activeTab } = useSelector((state: any) => state.nav);

  return (
    <div className="header">
      <div className="nav">
        <div className="tab__container">
          {tabs.map((tab: any, i: number) => (
            <Tab
              key={i}
              position={i}
              farmName={tab.farm}
              accentColour={tab.accent}
            />
          ))}
        </div>
        <div className="header__user">
          <div className="header__user-name">Emily Finning</div>
          <img
            src={require("../../images/blank-profile.png")}
            alt="avatar"
            className="header__user-avatar"
          />
        </div>
      </div>
      <div
        className="header__accent-bar"
        style={{ backgroundColor: tabs[activeTab].accent }}
      />
    </div>
  );
}

export default Header;
