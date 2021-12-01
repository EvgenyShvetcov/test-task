import React, { useState, useMemo, useEffect } from "react";

import { Input } from "../atoms/Input";
import { useGetDataQuery } from "../../api/jobs";
import { Modal } from "../moleculas/Modal";
import { Select } from "../atoms/Select";
import { Table } from "../atoms/Table";
import { useAppSelector } from "../../hooks";

export const Main: React.FC = () => {
  // const storeData = useAppSelector((state) => state);

  const { data, isLoading, error } = useGetDataQuery();

  //хуки поиска и группировки

  const [search, setSearch] = useState('')


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
            className='seeMore'
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

  console.log(data);

  return (
    <div className='main'>
      <div className='main__header'> 
      <Input type="text" placeholder="Search bar" value={search} onChange={(e: any) => setSearch(e.target.value)} />
      <Select placeholder="Group by" options={[{label: 'ffffffffff', value:'ffffffffff' }, {label: 'aaaaaaa', value:'aaaaaaa' }]} />
      </div> 
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
    </ div>
  );
};

// --openssl-legacy-provider
