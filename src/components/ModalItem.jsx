/* eslint-disable react/prop-types */
import { formatter } from "../util/formatter";

export default function ModalItem({ item }) {
  return (
    <li>
      <img src={item.image.thumbnail} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <div className="cart-item">
          <p className="cart-quantity">{item.quantity}</p>
          <p className="cart-price">@ {formatter(item.price)}</p>
        </div>
      </div>
      <p className="modal-price">
        <b>{formatter(item.quantity * item.price)}</b>
      </p>
    </li>
  );
}
