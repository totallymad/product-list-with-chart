import { formatter } from "../util/formatter";

/* eslint-disable react/prop-types */
export default function DesertCard({ desert }) {
  console.log(desert);
  return (
    <div className="desert-card">
      <img src={desert.image.desktop} alt={desert.name} />
      <button>
        <img src="/assets/images/icon-add-to-cart.svg" alt="" />
        <span>Add to Cart</span>
      </button>
      <p className="desert-card-category">{desert.category}</p>
      <h4 className="desert-card-name">{desert.name}</h4>
      <p className="desert-card-price">{formatter(desert.price)}</p>
    </div>
  );
}
