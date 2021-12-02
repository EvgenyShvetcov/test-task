import React from "react";

interface ButtonProps {
  label?: string;
  className?: string;
  icon?: any;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  return (
    <button className={className ? className : "button"} onClick={onClick}>
      {label}
    </button>
  );
};
