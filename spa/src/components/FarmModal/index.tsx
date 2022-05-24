import React from "react";
import { BsFillHouseFill, BsXLg, BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleFarmModal } from "../../redux/reducers/nav";
import "./styles.css";

const FarmModal: React.FC = () => {
  const dispatch = useDispatch();
  const { showFarmModal } = useSelector((state: any) => state.nav);

  const closeFarmModal = () => {
    dispatch(toggleFarmModal(true));
  };

  return showFarmModal ? (
    <div className="modal__overlay">
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title-container">
            <BsFillHouseFill className="modal__icon" />
            <h2 className="modal__title">Create a New Farm</h2>
          </div>
          <BsXLg className="modal__cancel" onClick={closeFarmModal} />
        </div>
        <div className="modal__input-container">
          <div className="modal__input-label">NAME</div>
          <input type="text" className="modal__text-input" />
          <div className="modal__input-label">ACCENT COLOUR (HEX)</div>
          <input type="text" className="modal__text-input" />
          <button className="modal__save-button">
            ADD FARM
            <BsCheckLg className="modal__save-icon" />
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default FarmModal;
