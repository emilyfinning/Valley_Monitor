import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";
import Tab from "./Tab";
import { setTabs } from "../../redux/reducers/nav";

function Header() {
  const { tabs, activeTab } = useSelector((state: any) => state.nav);

  const { loginWithRedirect, logout, user } = useAuth0();

  const dispatch = useDispatch();

  const getFarms = async () => {
    const farms = await fetch(
      `${process.env.REACT_APP_API_URL}/farms/em@emilyjay.co.uk`
    ).then((res) => res.json());
    console.log(farms);
    dispatch(setTabs(farms));
  };

  useEffect(() => {
    if (user) {
      getFarms();
    }
  }, [user]);

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
          {user ? (
            <div className="header__info-container">
              <div className="header__user-name">{user?.email}</div>
              <button
                className="header__button"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="header__info-container">
              <button
                className="header__button"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </div>
          )}
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
