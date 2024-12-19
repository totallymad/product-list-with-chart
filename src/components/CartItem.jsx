/* eslint-disable react/prop-types */
import { useContext } from "react";
import { formatter } from "../util/formatter";
import { CartContext } from "../store/CartContext";

export default function CartItem({ item }) {
  const { handleClearItemFromCart } = useContext(CartContext);

  return (
    <li>
      <h4>{item.name}</h4>
      <div className="cart-item">
        <p className="cart-quantity">{item.quantity}x</p>
        <p className="cart-price">@ {formatter(item.price)}</p>
        <p className="cart-price-total">
          {formatter(item.price * item.quantity)}
        </p>
        <img
          onClick={() => handleClearItemFromCart(item)}
          src="/assets/images/icon-remove-item.svg"
          alt="удалить"
        />
      </div>
    </li>
  );
}
