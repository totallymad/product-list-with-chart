import data from "../data.json";
import DesertCard from "./DesertCard";

export default function Deserts() {
  const items = data;
  return (
    <div className="deserts">
      <h1>Desserts</h1>
      <div className="deserts-list">
        {items.map((desert) => (
          <DesertCard key={desert.name} desert={desert} />
        ))}
      </div>
    </div>
  );
}
