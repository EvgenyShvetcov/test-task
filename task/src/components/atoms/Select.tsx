import React from "react";

interface ModalProps {
  value?: any;
  label?: any;
  options?: any[];
  placeholder?: any;
  props?: any;
}

export const Select: React.FC<ModalProps> = ({
  value,
  options = [],
  label,
  placeholder,
}) => {
  return (
    <div className="select">
      {label && <div className="select__label">{label}</div>}
      <select className="select__pole" value={value}>
        {placeholder && (
          <option className="select__placeholder" value="" disabled selected={value ? false : true} hidden>
            {placeholder}
          </option>
        )}
        {options.map(({ label, ...props }) => (
          <option key={label} className="select__option">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
