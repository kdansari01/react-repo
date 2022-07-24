import { useEffect, useState } from "react";
import { Product } from "./components/Product";
import "./eCommerce.css";

export const Home = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/861381f0-dfc4-427e-b96f-b3919e3dee8e")
      .then((response) => response.json())
      .then((data) => {
        setAllProduct(
          data.map((p) => ({
            ...p,
            image:
              "https://assets.wagonbasket.com/2021/11/30115924/Ash-Gourd-1-1.jpg",
          }))
        );
      });
  }, []);
  //   console.log(allProduct);

  return (
    <>
      <div className="product-list">
        <h2 className="feature-head">Products</h2>
        {allProduct.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};
