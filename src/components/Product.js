import { useContext, useState } from "react";
import { GlobalContext } from "../App";
import "./Product.css";

export const Product = ({ product, isCart }) => {
  const [localCart, setAddCart] = useState({});
  const { setGlobal } = useContext(GlobalContext);

  /*
  {cart:[], poduct:[], user:{}}

  */

  const handleSubmit = () => {
    setAddCart(product);
    setGlobal(prev=>({...prev, cart:[...prev.cart, product] }))
  };

  return (
    <div className="product">
      <div className="product-box" key={product.id}>
        <img
          src="https://assets.wagonbasket.com/2021/12/05112821/Apple-Misiri.jpg"
          className="product-image"
        />
        <h3 className="product-name">{product.productName} </h3>
        <p> ₹ {product.price} </p>
        {!isCart && (
          <button className="addBtn" onClick={() => handleSubmit()}>
            {`Add${localCart.id ? "ed" : ""}`}
          </button>
        )}
      </div>
    </div>
  );
};
