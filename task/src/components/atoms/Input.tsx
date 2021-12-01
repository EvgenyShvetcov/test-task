import React, { useState, useEffect } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  type: any;
  value?: any;
  props?: any;
  onChange?: (arg: any)=> void
}

export const Input: React.FC<InputProps> = ({
  className,
  type = "text",
  value,
  placeholder = "Введите текст",
  onChange,
  ...props
}) => {
  return (
    <div className={className ? className : `input`}>
      <input
        type={type}
        placeholder={placeholder}
        className={className ? className : `input__pole`}
        value={value}
        onChange={onChange}
        {...props}
      ></input>
    </div>
  );
};
