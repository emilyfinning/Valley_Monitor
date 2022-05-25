import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./styles.css";
import Tab from "./Tab";
import {
  setTabs,
  toggleErrorModal,
  toggleFarmModal,
} from "../../redux/reducers/nav";
import FarmModal from "../FarmModal";
import ErrorModal from "../ErrorModal";

function Header() {
  const { tabs, activeTab, refresh, showFarmModal, showErrorModal } =
    useSelector((state: any) => state.nav);
  const { userEmail } = useSelector((state: any) => state.basics);

  const { loginWithRedirect, logout, user } = useAuth0();

  const dispatch = useDispatch();

  const getFarms = useCallback(async () => {
    const farms = await fetch(
      `${process.env.REACT_APP_API_URL}/farms/${userEmail}`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
    dispatch(setTabs(farms));
  }, [userEmail]);

  const attemptCreateFarm = () => {
    if (tabs.length < 3) {
      dispatch(toggleFarmModal(true));
    } else {
      dispatch(toggleErrorModal(true));
    }
  };

  useEffect(() => {
    if (userEmail) {
      getFarms();
    }
  }, [userEmail, getFarms, refresh]);

  return (
    <div className="header">
      <div className="nav">
        <BsFillPlusCircleFill
          className="tab__add-icon"
          onClick={attemptCreateFarm}
        />
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
              <div className="header__user-name">{userEmail}</div>
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
      {showFarmModal && <FarmModal id={""} />}
      {showErrorModal && <ErrorModal />}
    </div>
  );
}

export default Header;
