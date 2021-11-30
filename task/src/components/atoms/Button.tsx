import React from "react";

interface ButtonProps {
  label?: string;
  type?: any;
  className?: string;
  icon?: any;
  props?: any;
  onClick?: any;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  type,
  icon,
  onClick,
  ...props
}) => {
  return (
    <>
      {!icon ? (
        <button
          className={className ? className : "button"}
          type={type}
          onClick={onClick}
          {...props}
        >
          {label}
        </button>
      ) : (
        <button className={className} type={type} {...props}>
          <span className="">{icon}</span>
        </button>
      )}
    </>
  );
};
