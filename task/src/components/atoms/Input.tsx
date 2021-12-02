import React from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  type: string;
  value?: string;
  onChange?: (arg: any) => void;
}

export const Input: React.FC<InputProps> = ({
  className,
  type = "text",
  value,
  placeholder = "Введите текст",
  onChange,
}) => {
  return (
    <div className={className ? className : `input`}>
      <input
        type={type}
        placeholder={placeholder}
        className={className ? className : `input__pole`}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
