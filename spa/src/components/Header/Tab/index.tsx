import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../redux/reducers/nav";
import "./styles.css";

interface TabProps {
  farmName: string;
  accentColour: string;
  position: number;
}

const Tab: React.FC<TabProps> = ({ accentColour, farmName, position }) => {
  const dispatch = useDispatch();

  const { activeTab } = useSelector((state: any) => state.nav);
  const active = activeTab === position;

  const handleClick = () => {
    console.log("clicked");
    dispatch(setActiveTab(position));
  };

  const tab =
    position === 0 ? (
      !active ? (
        <div className="tab--first" onClick={handleClick}>
          <div className="tab__left" />
          <div className="tab__center">
            <div
              className="tab__accent-circle"
              style={{ backgroundColor: accentColour }}
            />
            {farmName}
          </div>
          <div className="tab__right" />
          <div className="tab__accent__right" />
        </div>
      ) : (
        <div className="tab--first" style={{ zIndex: 1 }} onClick={handleClick}>
          <div
            className="tab__left"
            style={{ backgroundColor: accentColour }}
          />
          <div
            className="tab__center"
            style={{ backgroundColor: accentColour, color: "white" }}
          >
            <div
              className="tab__accent-circle"
              style={{ backgroundColor: "white" }}
            />
            {farmName}
          </div>
          <div
            className="tab__right"
            style={{ backgroundColor: accentColour }}
          />
          <div
            className="tab__accent__right"
            style={{ boxShadow: `-17px 0 0 0 ${accentColour}` }}
          />
        </div>
      )
    ) : !active ? (
      <div
        className="tab"
        style={{ left: `-${position * 50}px` }}
        onClick={handleClick}
      >
        <div className="tab__accent__left" />
        <div className="tab__left" />
        <div className="tab__center">
          <div
            className="tab__accent-circle"
            style={{ backgroundColor: accentColour }}
          />
          {farmName}
        </div>
        <div className="tab__right" />
        <div className="tab__accent__right" />
      </div>
    ) : (
      <div
        className="tab"
        style={{ zIndex: 1, left: `-${position * 50}px` }}
        onClick={handleClick}
      >
        <div
          className="tab__accent__left"
          style={{ boxShadow: `17px 0 0 0 ${accentColour}` }}
        />
        <div className="tab__left" style={{ backgroundColor: accentColour }} />
        <div
          className="tab__center"
          style={{ backgroundColor: accentColour, color: "white" }}
        >
          <div
            className="tab__accent-circle"
            style={{ backgroundColor: "white" }}
          />
          {farmName}
        </div>
        <div className="tab__right" style={{ backgroundColor: accentColour }} />
        <div
          className="tab__accent__right"
          style={{ boxShadow: `-17px 0 0 0 ${accentColour}` }}
        />
      </div>
    );
  return tab;
};

export default Tab;
