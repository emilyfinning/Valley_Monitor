import React, { useState } from "react";
import { BsFillHouseFill, BsXLg, BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { toggleErrorModal, refreshNav } from "../../redux/reducers/nav";

const FarmModal: React.FC = () => {
  const dispatch = useDispatch();

  const closeErrorModal = () => {
    dispatch(toggleErrorModal(true));
  };

  return (
    <div className="modal__overlay">
      <div className="modal__container">
        <div className="modal__header">
          <BsXLg className="modal__cancel" onClick={closeErrorModal} />
        </div>
        <div className="modal__input-container">
          <div className="modal__message">
            You cannot create more than 3 farms.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmModal;
