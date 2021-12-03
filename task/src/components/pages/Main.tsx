import React, { useState, useMemo, ChangeEvent } from "react";
import { Input } from "../atoms/Input";
import {  useGetPokemonQuery } from "../../api/pokemons";
import { Modal } from "../moleculas/Modal";
import { Select } from "../atoms/Select";
import { Table } from "../atoms/Table";
import { usePokemonUIActions } from "../../api/pokemons";
import { GroupBy } from "../../models";

export const Main: React.FC = () => {
  //хуки поиска и группировки
  const [search, setSearch] = useState("");
  const [groupBy, setGroupBy] = useState(GroupBy.NONE)

  // хуки для модалки
  const [modal, setModal] = useState(false);
  const [currentData, setCurrentData] = useState("");

  //хуки rtk query
  const pokemonBase = usePokemonUIActions(search, groupBy);
  const pokemonInfo = useGetPokemonQuery(currentData).data;
  

  //настройка колонок в таблице
  const columns = useMemo(
    () => [
      {
        Header: "Pokemon name",
        accessor: "name",
      },
      {
        Header: "Pokemon card",
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
          value={groupBy}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGroupBy(e.target.value as GroupBy)}
          options={[
            { label: "None", value: GroupBy.NAME },
            { label: "Name", value: GroupBy.NONE },
          ]}
        />
      </div>
      {(pokemonBase && (
        <Table
          columns={columns}
          data={
             pokemonBase
          }
        />
      )) || <div className="main_info">Loading or no data...</div>}
      {modal && pokemonInfo && (
        <Modal
          onModalClose={() => {
            setModal(false);
            setCurrentData("");
          }}
          data={pokemonInfo}
        />
      )}
    </div>
  );
};

// --openssl-legacy-provider
// перенести хук в модалку
