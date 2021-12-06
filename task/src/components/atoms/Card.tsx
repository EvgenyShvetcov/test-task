import React from "react";

interface CardProps {
  label?: string;
  data?: [];
}

export const Card: React.FC<CardProps> = ({ label, data }) => {
  return (
    <div>
      <div>{label}</div>
      {data?.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
};
