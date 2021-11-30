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
  ...props
}) => {
  return (
    <div className="select">
      {label && <div className="select__label">{label}</div>}
      <select className="select__pole" value={value} {...props}>
        {placeholder && (
          <option value="" disabled selected={value ? false : true} hidden>
            {placeholder}
          </option>
        )}
        {options.map(({ label, ...props }) => (
          <option key={label} {...props}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
