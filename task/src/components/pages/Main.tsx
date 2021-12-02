import React, { useState, useMemo, ChangeEvent } from "react";

import { Input } from "../atoms/Input";
import { useGetDataQuery, useGetPokemonQuery } from "../../api/jobs";
import { Modal } from "../moleculas/Modal";
import { Select } from "../atoms/Select";
import { Table } from "../atoms/Table";

export const Main: React.FC = () => {
  //хуки поиска и группировки

  const [search, setSearch] = useState("");

  // хуки для модалки
  const [modal, setModal] = useState(false);
  const [currentData, setCurrentData] = useState("");

  const pokemonBase = useGetDataQuery().data;
  const { data, isLoading, error } = useGetPokemonQuery(currentData);

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
              className="seeMore"
              onClick={() => {
                setCurrentData(el.row.original.name);
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

  console.log(pokemonBase?.filter((EL) => EL.name === search));

  return (
    <div className="main">
      <div className="main__header">
        <Input
          type="text"
          placeholder="Search bar"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <Select
          placeholder="Group by"
          options={[
            { label: "ffffffffff", value: "ffffffffff" },
            { label: "aaaaaaa", value: "aaaaaaa" },
          ]}
        />
      </div>
      {(pokemonBase && (
        <Table
          columns={columns}
          data={
            search
              ? pokemonBase?.filter((EL) => EL.name === search)
              : pokemonBase
          }
        />
      )) || <div>Loading or no data</div>}
      {modal && data && (
        <Modal
          onModalClose={() => {
            setModal(false);
            setCurrentData("");
          }}
          data={data}
        />
      )}
    </div>
  );
};

// --openssl-legacy-provider
