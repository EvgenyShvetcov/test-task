import React from "react";

interface ModalProps {
  value?: any;
  label?: string;
  options?: any[];
  placeholder?: string;
  onChange?: (arg: any) => void 
}

export const Select: React.FC<ModalProps> = ({
  value,
  options = [],
  label,
  placeholder,
  onChange
}) => {
  return (
    <div className="select">
      {label && <div className="select__label">{label}</div>}
      <select className="select__pole" value={value} onChange={onChange}>
        {placeholder && (
          <option
            className="select__placeholder"
            value=""
            disabled
            selected={value ? false : true}
            hidden
          >
            {placeholder}
          </option>
        )}
        {options.map(({ label }) => (
          <option key={label} className="select__option">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
