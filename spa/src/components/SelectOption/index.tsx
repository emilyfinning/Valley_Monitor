import React from "react";
import "./styles.css";

interface SelectOptionProps {
  name: string;
  options: string[] | number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  name,
  options,
  onChange,
}) => {
  return (
    <select
      name={name}
      id={name}
      onChange={onChange}
      className="select__parent"
    >
      <option value="" className="select__option">{`Select ${name}`}</option>
      {options.map((option, i) => {
        return (
          <option key={i} value={option} className="select__option">
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default SelectOption;
