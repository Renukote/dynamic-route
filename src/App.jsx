import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AllProducts } from "./components/AllProducts";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<h1>404 Page does not exist</h1>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
