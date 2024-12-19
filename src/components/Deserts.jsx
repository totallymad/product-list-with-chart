import { useContext } from "react";
import DesertCard from "./DesertCard";
import { CartContext } from "../store/CartContext";

export default function Deserts() {
  const { items } = useContext(CartContext);

  return (
    <div className="deserts">
      <h1>Desserts</h1>
      <div className="deserts-list">
        {items.map((desert) => (
          <DesertCard key={desert.id} desert={desert} />
        ))}
      </div>
    </div>
  );
}
