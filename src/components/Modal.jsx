import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal() {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal(); // Важно: это открывает <dialog> с backdrop
    }
  }, []);

  return createPortal(
    <dialog className="modal" ref={dialogRef}>
      <img src="/assets/images/icon-order-confirmed.svg" alt="order confirm" />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
    </dialog>,
    document.getElementById("modal")
  );
}
