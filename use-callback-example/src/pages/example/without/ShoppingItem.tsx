import { useState } from "react";
import "./ShoppingItem.css";
import ButtonIncrease from "./ButtonIncrease";
import ButtonDecrease from "./ButtonDecrease";

export default function ShoppingItem() {
  console.log("ShoppingItem re-rendered!");

  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [remove, setRemove] = useState(false);

  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleFavorite() {
    setFavorite(!favorite);
  }

  function handleRemove() {
    setRemove(true);
  }

  return (
    <div
      className="shopping-item"
      style={{ display: remove ? "none" : "flex" }}
    >
      <img src="https://placehold.co/78" alt="Placeholder 78x78" />
      <div className="shopping-item__info">
        <div className="shopping-item__info-name">
          <p>GTX 1660 Super</p>
          <span>Rp. 2.700.000</span>
        </div>
        <div className="shopping-item__info-actions">
          <button
            className="btn-favorite"
            onClick={handleFavorite}
            style={{ color: favorite ? "red" : "black" }}
          >
            Favorite
          </button>
          <button className="btn-remove" onClick={handleRemove}>
            Remove
          </button>
          <div className="shopping-item__info-actions-count">
            <ButtonDecrease onClick={handleDecrease} />
            <span>{count}</span>
            <ButtonIncrease onClick={handleIncrease} />
          </div>
        </div>
      </div>
    </div>
  );
}
