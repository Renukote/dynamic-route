import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(`http://localhost:3001/products/${id}`);
      res = await res.json();
      console.log(res, "res");

      res.name ? setData(res) : setData(null);
    } catch (e) {
      console.log("error", e);
    }
  };

  return data ? (
    <div>
      <div>Product id: {data.id}</div>
      <div>Product name: {data.name}</div>
      <div>Product price: {data.price}</div>
    </div>
  ) : (
    <h1> 404 Product not found </h1>
  );
};
