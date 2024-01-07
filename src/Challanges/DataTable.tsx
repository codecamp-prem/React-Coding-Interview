import { useEffect, useMemo, useState } from "react";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import "./common.css";
import { fetchData } from "./utils";
import { PokemonType } from "./utils/fetchData";

const DataTable = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const handleFetchData = async () => {
      const data = await fetchData();
      setData(data);
    };
    handleFetchData();
  }, []);

  const handleHeaderClick = (column: string) => {
    if (column === sortColumn) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const filteredData = useMemo(() => {
    return data
      .map((row) => {
        if (
          row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          String(row.id).includes(searchTerm) ||
          String(row.weight).includes(searchTerm)
        ) {
          return row;
        }
        return null;
      })
      .filter(Boolean);
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    const sorted = [...filteredData];

    return sorted.sort((a, b) => {
      let aValue = a[sortColumn];
      let bValue = b[sortColumn];

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredData, sortColumn, sortOrder]);

  return (
    <div className="container">
      <div>
        <header className="headerFlex">
          <input
            type="text"
            placeholder="Search Items"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
        <table>
          <thead>
            <tr>
              <th>
                <button
                  className="link"
                  aria-label="ID"
                  onClick={() => handleHeaderClick("id")}
                >
                  ID{" "}
                  {sortColumn === "id" &&
                    (sortOrder === "asc" ? (
                      <TbSortAscending />
                    ) : (
                      <TbSortDescending />
                    ))}
                </button>
              </th>
              <th>
                <button
                  className="link"
                  aria-label="Name"
                  onClick={() => handleHeaderClick("name")}
                >
                  Name{" "}
                  {sortColumn === "name" &&
                    (sortOrder === "asc" ? (
                      <TbSortAscending />
                    ) : (
                      <TbSortDescending />
                    ))}
                </button>
              </th>
              <th>
                <button
                  className="link"
                  aria-label="Weight"
                  onClick={() => handleHeaderClick("weight")}
                >
                  Weight{" "}
                  {sortColumn === "weight" &&
                    (sortOrder === "asc" ? (
                      <TbSortAscending />
                    ) : (
                      <TbSortDescending />
                    ))}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => (
              <tr key={row?.id}>
                <td>{row?.id}</td>
                <td>{row?.name}</td>
                <td>{row?.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
