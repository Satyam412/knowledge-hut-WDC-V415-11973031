import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AllProducts.css";

const AllProducts = () => {
  const [productList, setProductList] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => setProductList(res.data));
  }, []);

  return (
    <>
      <section id="allProducts">
        {productList &&
          productList.map((product) => (
            <ProductCard
              productImage={product.productImg}
              productTitle={product.title}
              productPrice={product.price}
              productId={product.id}
            />
          ))}
      </section>
    </>
  );
};

export default AllProducts;
