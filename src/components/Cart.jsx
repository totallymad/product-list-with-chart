import { useContext } from "react";
import { formatter } from "../util/formatter";
import { CartContext } from "../store/CartContext";
import CartItem from "./CartItem";
import Modal from "./Modal";

export default function Cart() {
  const { cartItems, openModal, handleOpenModal } = useContext(CartContext);

  const totalOrder = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <div className="cart">
      <h2>Your Cart(0)</h2>
      {cartItems.length > 0 ? (
        <div className="cart-full">
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="cart-order-total">
            <p>Order Total</p>
            <span>{formatter(totalOrder)}</span>
          </div>
          <div className="cart-carbon">
            <img
              src="/assets/images/icon-carbon-neutral.svg"
              alt="carbon neutral delivery"
            />
            <p>
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>
          <button onClick={handleOpenModal}>Confirm Order</button>
        </div>
      ) : (
        <div className="cart-empty">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="empty cart"
          />
          <p>Your added items will appear here</p>
        </div>
      )}
      <Modal open={openModal} />
    </div>
  );
}
