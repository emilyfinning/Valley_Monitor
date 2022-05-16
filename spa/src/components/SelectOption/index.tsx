import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import "./styles.css";

interface SelectOptionProps {
  name: string;
  options: string[] | number[];
  onChange: (e: string) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  name,
  options,
  onChange,
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleOptions = () => {
    setOpenOptions(!openOptions);
  };

  const selectOption = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedOption(e.currentTarget.id);
    onChange(e.currentTarget.id);
    toggleOptions();
  };

  return (
    <div className="select__parent">
      <div className="select__header" onClick={toggleOptions}>
        <div>{selectedOption ? selectedOption : `Select ${name}`}</div>
        <BsFillCaretDownFill />
      </div>
      <div className="select__option-container">
        {openOptions ? (
          <div>
            {options.map((option, i) => {
              return (
                <div
                  key={i}
                  id={String(option)}
                  className="select__option"
                  onClick={selectOption}
                >
                  {option}
                </div>
              );
            })}{" "}
          </div>
        ) : null}
      </div>
    </div>
    // <select
    //   name={name}
    //   id={name}
    //   onChange={onChange}
    //   className="select__parent"
    // >
    //   <option value="" className="select__option">{`Select ${name}`}</option>
    //   {options.map((option, i) => {
    //     return (
    //       <option key={i} value={option} className="select__option">
    //         {option}
    //       </option>
    //     );
    //   })}
    // </select>
  );
};

export default SelectOption;
