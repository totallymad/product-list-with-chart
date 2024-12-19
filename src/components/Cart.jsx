import { formatter } from "../util/formatter";

export default function Cart() {
  return (
    <div className="cart">
      <h2>Your Cart(0)</h2>
      <div className="cart-empty">
        <img
          src="/assets/images/illustration-empty-cart.svg"
          alt="empty cart"
        />
        <p>Your added items will appear here</p>
      </div>
      <div className="cart-full">
        <ul>
          <li>
            <h4>Classic Tiramiso</h4>
            <div className="cart-item">
              <p className="cart-quantity">1x</p>
              <p className="cart-price">@ {formatter(5)}</p>
              <p className="cart-price-total">{formatter(5)}</p>
              <img src="/assets/images/icon-remove-item.svg" alt="удалить" />
            </div>
          </li>
        </ul>
        <div className="cart-order-total">
          <p>Order Total</p>
          <span>{formatter(46)}</span>
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
        <button>Confirm Order</button>
      </div>
    </div>
  );
}
