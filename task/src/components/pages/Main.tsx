import React, { useState, useMemo, useEffect } from "react";

import { Input } from "../atoms/Input";
import { useGetDataQuery } from "../../services/fetchService";
import { Modal } from "../moleculas/Modal";
import { Select } from "../atoms/Select";
import { Table } from "../atoms/Table";
import { useAppSelector } from "../../hooks";

export const Main: React.FC = () => {
  const storeData = useAppSelector((state) => state);

  const { data } = useGetDataQuery("");

  // хуки для модалки
  const [modal, setModal] = useState(false);
  const [currentData, setCurrentData] = useState({});

  const columns = useMemo(
    () => [
      {
        Header: "Job name",
        accessor: "name",
      },
      {
        Header: "Job card",

        Cell: (el: any) => {
          return (
            <div
              onClick={() => {
                setCurrentData(el.row.original);
                setModal(true);
              }}
            >
              See more...
            </div>
          );
        },
      },
    ],

    []
  );

  console.log(storeData);

  return (
    <>
      <Input type="text" placeholder="Search bar" />
      <Select label="Group by" />
      {data && <Table columns={columns} data={data.jobs} />}
      {modal && (
        <Modal
          onModalClose={() => {
            setModal(false);
            setCurrentData({});
          }}
          data={currentData}
        />
      )}
    </>
  );
};

// --openssl-legacy-provider
