import { createPortal } from "react-dom";
import { useContext, useEffect, useRef } from "react";
import { formatter } from "../util/formatter";
import { CartContext } from "../store/CartContext";
import ModalItem from "./ModalItem";

export default function Modal({ open }) {
  const { cartItems, handleStartNewOrder } = useContext(CartContext);

  const dialog = useRef(null);

  const totalOrder = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }
    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <img src="/assets/images/icon-order-confirmed.svg" alt="order confirm" />
      <h2>Order Confirmed</h2>
      <p className="modal-subheader">We hope you enjoy your food!</p>
      <div className="modal-wrapper">
        <ul>
          {cartItems.map((item) => (
            <ModalItem key={item.id} item={item} />
          ))}
        </ul>
        <div className="modal-order-total">
          <p>Order Total</p>
          <span>{formatter(totalOrder)}</span>
        </div>
      </div>
      <button onClick={handleStartNewOrder}>Start New Order</button>
    </dialog>,
    document.getElementById("modal")
  );
}
