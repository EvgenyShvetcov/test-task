import React from "react";
import { Card } from "../atoms/Card";

interface CardTableProps {
  data?: string[];
  groupBy?: string;
}

export const TableCard: React.FC<CardTableProps> = ({ data, groupBy }) => {
  const group = ["aaaaa", "bbbbb"];

  const sortHandler = (data: any[]) => {
    // // let letter = data[0][0];
    // let newData = {};
    // for (let i = 0; i < data.length; i++) {
    //   newData = { ...newData, [data[i][0]]: [] };
    //   if (data[i][0] === data[i + 1][0]) {
    //     newData = { ...newData, [letter]: [] };
    //   }
    //   letter = data[i][0];
    // }
  };

  return (
    <div>
      {data?.map((el) => (
        <Card label="a" data={[]} />
      ))}
    </div>
  );
};
