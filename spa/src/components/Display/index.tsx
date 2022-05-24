import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillCalendar2EventFill,
} from "react-icons/bs";
import {
  incrementGameTime,
  decrementGameTime,
  toggleTimeModal,
} from "../../redux/reducers/basics";
import "./styles.css";
import Header from "../Header";
import TimeModal from "../TimeModal";

function Display() {
  const { season, day } = useSelector((state: any) => state.basics);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementGameTime({ season: season, day: day }));
  };

  const handleDecrement = () => {
    dispatch(decrementGameTime({ season: season, day: day }));
  };

  const openTimeModal = () => {
    dispatch(toggleTimeModal(true));
  };

  return (
    <div className="display">
      <Header />
      <div className="display__container">
        <BsFillArrowLeftCircleFill
          className="display__title-inc-icon"
          onClick={handleDecrement}
        />
        <h1 className="display__title">{`${season} Day ${day}`}</h1>
        <BsFillArrowRightCircleFill
          className="display__title-inc-icon"
          onClick={handleIncrement}
        />
        <BsFillCalendar2EventFill
          id="calendar-icon"
          className="display__title-inc-icon"
          onClick={openTimeModal}
        />
      </div>
      <TimeModal />
    </div>
  );
}
export default Display;
