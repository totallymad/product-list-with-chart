export default function Cart() {
  return (
    <div className="cart">
      <h2>Your Cart(0)</h2>
      <img
        src="/public/assets/images/illustration-empty-cart.svg"
        alt="empty cart"
      />
      <p>Your added items will appear here</p>
      <ul>
        <li>
          <p>Classic Tiramiso</p>
          <div>
            <p>1x</p>
            <p>5</p>
            <p>5</p>
          </div>
        </li>
      </ul>
      <div>
        <p>Order Total</p>
        <span>46</span>
      </div>
      <div>
        <img
          src="/public/assets/images/icon-carbon-neutral.svg"
          alt="carbon neutral delivery"
        />
        <p>
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button>Confirm Order</button>
    </div>
  );
}
