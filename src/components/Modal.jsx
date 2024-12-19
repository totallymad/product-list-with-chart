import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { formatter } from "../util/formatter";

export default function Modal() {
  const dialogRef = useRef(null);

  // useEffect(() => {
  //   if (dialogRef.current && !dialogRef.current.open) {
  //     dialogRef.current.showModal(); // Важно: это открывает <dialog> с backdrop
  //   }
  // }, []);

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      <img src="/assets/images/icon-order-confirmed.svg" alt="order confirm" />
      <h2>Order Confirmed</h2>
      <p className="modal-subheader">We hope you enjoy your food!</p>
      <div className="modal-wrapper">
        <ul>
          <li>
            <img src="/assets/images/image-baklava-thumbnail.jpg" alt="" />
            <div>
              <h4>Classic Tiramiso</h4>
              <div className="cart-item">
                <p className="cart-quantity">1x</p>
                <p className="cart-price">@ {formatter(5)}</p>
              </div>
            </div>
            <p className="modal-price">
              <b>{formatter(5)}</b>
            </p>
          </li>
          <li>
            <img src="/assets/images/image-baklava-thumbnail.jpg" alt="" />
            <div>
              <h4>Classic Tiramiso</h4>
              <div className="cart-item">
                <p className="cart-quantity">1x</p>
                <p className="cart-price">@ {formatter(5)}</p>
              </div>
            </div>
            <p className="modal-price">
              <b>{formatter(5)}</b>
            </p>
          </li>
        </ul>
        <div className="modal-order-total">
          <p>Order Total</p>
          <span>{formatter(46)}</span>
        </div>
      </div>
      <button>Start New Order</button>
    </dialog>,
    document.getElementById("modal")
  );
}
