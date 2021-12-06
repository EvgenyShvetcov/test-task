import React, { useState, useMemo, ChangeEvent } from "react";
import { Input } from "../atoms/Input";
import { useGetPokemonQuery } from "../../api/pokemons";
import { Modal } from "../moleculas/Modal";
import { Select } from "../atoms/Select";
import { Table } from "../atoms/Table";
import { usePokemonUIActions } from "../../api/pokemons";
import { GroupBy } from "../../models";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";

export const Main: React.FC = () => {
  //хуки поиска и группировки
  const [search, setSearch] = useState("");
  const [groupBy, setGroupBy] = useState(GroupBy.NONE);

  // хуки для модалки
  const [modal, setModal] = useState(false);
  const [currentData, setCurrentData] = useState("");

  //хук для переключения таблицы и карточек

  const [cardInterface, setCardInterface] = useState(false);

  //хуки rtk query
  const pokemonBase = usePokemonUIActions(search, groupBy);
  const pokemonInfo = useGetPokemonQuery(currentData).data;

  const sortHandler = (data: any[]) => {
    return data.reduce(
      (previousValue, currentValue, i) =>
        (previousValue = {
          ...previousValue,
          [currentValue.name[0]]: [
            // ...previousValue[currentValue.name[0]],
            currentValue.name,
          ],
        }),
      {}
    );
  };

  console.log(sortHandler(pokemonBase));

  //настройка колонок в таблице
  const columns = useMemo(
    () => [
      {
        Header: "Pokemon name",
        accessor: "name",
      },
      {
        Header: "country",
        accessor: "country",
      },
      {
        Header: "age",
        accessor: "age",
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
        <Button
          label="Card mode on/off"
          onClick={() => setCardInterface((state) => !state)}
        />
        <Select
          placeholder="Group by"
          value={groupBy}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setGroupBy(e.target.value as GroupBy)
          }
          options={[
            { label: "None", value: GroupBy.NONE },
            { label: "Age", value: GroupBy.AGE },
            { label: "Country", value: GroupBy.COUNTRY },
            { label: "Name", value: GroupBy.NAME },
          ]}
        />
      </div>
      {cardInterface && <Card label="a" data={[]} />}
      {cardInterface === false &&
        ((pokemonBase && <Table columns={columns} data={pokemonBase} />) || (
          <div className="main_info">Loading or no data...</div>
        ))}
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
