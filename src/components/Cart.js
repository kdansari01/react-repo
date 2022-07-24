import { useContext } from "react";
import { GlobalContext } from "../App";
import { Product } from "./Product";

export const Cart = () => {
  const {global} = useContext(GlobalContext)
  const cart = global.cart


  return (
    <div>
      <h2 className="d-flex bg-primary">Cart</h2>
      <div className="d-flex flex-wrap p-5">
      {cart && cart.map((item) => (
        <Product key={item.id} product={item} isCart />
      ))}
      </div>
    </div>
  );
};
