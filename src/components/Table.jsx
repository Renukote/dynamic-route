import { TableItem } from "./TableRow";

export const Table = (data) => {
  let tableData = [];

  for (let key in data) {
    tableData = [...tableData, data[key]];
  }

  console.log(tableData);

  return (
    <table style={{margin: "10px auto"}}>
      <thead>
        <tr>
          <th style={{border: "1px solid black"}}>Products</th>
          <th style={{border: "1px solid black"}}>Price</th>
          <th style={{border: "1px solid black"}}>More Details</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((e) => (
          <TableItem {...e} key={e.id} />
        ))}
      </tbody>
    </table>
  );
};
