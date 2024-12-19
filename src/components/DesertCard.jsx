import { useContext } from "react";
import { formatter } from "../util/formatter";
import { CartContext } from "../store/CartContext";

/* eslint-disable react/prop-types */
export default function DesertCard({ desert }) {
  const { handleAddToCart, handleDeleteFromCart, cartItems } =
    useContext(CartContext);

  const existingInCart = cartItems.find((item) => item.id === desert.id);

  return (
    <div className="desert-card">
      <img
        src={desert.image.desktop}
        srcSet={`${desert.image.mobile} 600w, ${desert.image.tablet} 1000w, ${desert.image.desktop} 1800w`}
        alt={desert.name}
      />
      {!existingInCart ? (
        <button
          className="desert-card-button"
          onClick={() => handleAddToCart(desert)}
        >
          <img src="/assets/images/icon-add-to-cart.svg" alt="" />
          <span>Add to Cart</span>
        </button>
      ) : (
        <div className="desert-card-button-checked">
          <button onClick={() => handleDeleteFromCart(desert)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </button>

          <span>{existingInCart.quantity}</span>

          <button onClick={() => handleAddToCart(desert)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
            </svg>
          </button>
        </div>
      )}

      <p className="desert-card-category">{desert.category}</p>
      <h4 className="desert-card-name">{desert.name}</h4>
      <p className="desert-card-price">{formatter(desert.price)}</p>
    </div>
  );
}
