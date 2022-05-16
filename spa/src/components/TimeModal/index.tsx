import React, { useState } from "react";
import { BsFillCalendar2EventFill, BsXLg, BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import SelectOption from "../SelectOption";
import { toggleTimeModal, setGameTime } from "../../redux/reducers/basics";
import "./styles.css";

const seasons = ["Spring", "Summer", "Fall", "Winter"];

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
];

const TimeModal: React.FC = () => {
  const dispatch = useDispatch();
  const [season, setSeason] = useState("Spring");
  const [day, setDay] = useState(1);
  const { showTimeModal } = useSelector((state: any) => state.basics);

  const selectSeason = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSeason(e.target.value);
  };

  const selectDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(parseInt(e.target.value));
  };

  const closeTimeModal = () => {
    dispatch(toggleTimeModal(true));
  };

  const submitTimeChange = () => {
    dispatch(setGameTime({ season: season, day: day }));
    closeTimeModal();
  };

  return showTimeModal ? (
    <div className="time-modal__overlay">
      <div className="time-modal__container">
        <div className="time-modal__header">
          <div className="time-modal__title-container">
            <BsFillCalendar2EventFill className="time-modal__calendar-icon" />
            <h2 className="time-modal__title">Select a Date</h2>
          </div>
          <BsXLg className="time-modal__cancel" onClick={closeTimeModal} />
        </div>
        <div className="time-modal__input-container">
          <SelectOption
            name="Season"
            options={seasons}
            onChange={selectSeason}
          />
          <SelectOption name="Day" options={days} onChange={selectDay} />
          <button
            className="time-modal__save-button"
            onClick={submitTimeChange}
          >
            SELECT
            <BsCheckLg className="time-modal__save-icon" />
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default TimeModal;
