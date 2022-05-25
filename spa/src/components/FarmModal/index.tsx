import React, { useState } from "react";
import { BsFillHouseFill, BsXLg, BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { toggleFarmModal, refreshNav } from "../../redux/reducers/nav";
import "./styles.css";

interface FarmModalProps {
  id: string;
}

const FarmModal: React.FC<FarmModalProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state: any) => state.basics);

  const [farmName, setFarmName] = useState("");
  const [accentColour, setAccentColour] = useState("");
  const [error, setError] = useState(false);

  const closeFarmModal = () => {
    dispatch(toggleFarmModal(true));
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFarmName(event.target.value);
  };

  const handleColourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccentColour(event.target.value);
  };

  const handleClick = () => {
    const hexRegex = new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");

    if (hexRegex.test(accentColour) && farmName) {
      handleSubmit();
    } else {
      setError(true);
    }
  };

  const handleSubmit = async () => {
    const farmId = id ? id : v4();

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: farmId,
        name: farmName,
        accent: accentColour,
      }),
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/farm/${userEmail}`,
      params
    ).then((res) => res.json());

    dispatch(refreshNav(true));

    closeFarmModal();
  };

  return (
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
          {error && (
            <div className="modal__error">
              Please enter a farm name and a valid hex colour (e.g. #000000)
            </div>
          )}
          <div className="modal__input-label">NAME</div>
          <input
            type="text"
            className="modal__text-input"
            onChange={handleNameChange}
          />
          <div className="modal__input-label">ACCENT COLOUR (HEX)</div>
          <input
            type="text"
            className="modal__text-input"
            onChange={handleColourChange}
          />
          <button className="modal__save-button" onClick={handleClick}>
            ADD FARM
            <BsCheckLg className="modal__save-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmModal;
