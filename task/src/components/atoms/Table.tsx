import React from "react";
import { useTable, usePagination } from "react-table";

interface TableProps {
  columns?: any;
  data?: any;
  tableInstance?: any;
  initialState?: any;
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const tableInstance: any = useTable(
    {
      columns,
      data,
      // initialState: { pageIndex: 0 },
    },
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = tableInstance;

  return (
    <div>
      <div style={{ fontSize: "18px" }}>
        {" "}
        <button className="button" onClick={() => previousPage()}>
          {"<"}
        </button>{" "}
        <button
          style={{ margin: "0 8px 8px 8px" }}
          className="button"
          onClick={() => nextPage()}
        >
          {">"}
        </button>
        {data.length > 0 ? pageIndex + 1 : 0} of {pageOptions.length}
      </div>
      <table
        style={{
          borderSpacing: 0,
          border: "1px solid black",
          borderRadius: "4px",
          width: "100%",
        }}
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  style={{
                    margin: 0,
                    width: "300px",
                    padding: "0.5rem",
                    border: "1px solid black",
                    background: "#eaeaeb",
                    fontSize: "18px",
                  }}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, i: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td
                      style={{
                        margin: 0,
                        padding: "0.5rem",
                        minWidth: "200px",
                        border: "1px solid black",
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
