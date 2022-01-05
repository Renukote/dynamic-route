import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [data] = useState();


  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
};
