import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-lake-37138.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="row ">
        
      {products.length === 0 && (
        <div
          style={{ margin: "0 auto" }}
          class="spinner-border text-primary "
          role="status"
        >
          <span class="visually-hidden"></span>
        </div>
      )}

      {products.map((pd) => (
        <Product pd={pd}></Product>
      ))}
    </div>
  );
};

export default Home;
