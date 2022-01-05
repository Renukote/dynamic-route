import { useEffect, useState } from "react";
import { Table } from "./Table";

export const AllProducts = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch(`http://localhost:3001/products`);
    res = await res.json();

    console.log(res);
    setData(res);
  };

  return (
    <>
      <h3>All Products </h3>
      {data ? <Table {...data} key={1}/> : null}
    </>
  );
};
