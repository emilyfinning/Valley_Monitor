import React from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";
import Tab from "./Tab";

function Header() {
  const { tabs, activeTab } = useSelector((state: any) => state.nav);

  const { loginWithRedirect, logout, user } = useAuth0();

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
          <div className="header__user-name">{user?.name}</div>
          <button onClick={() => loginWithRedirect()}>Log In</button>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
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
