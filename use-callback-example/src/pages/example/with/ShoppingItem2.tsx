import { useState, useCallback } from "react";
import ButtonDecrease2 from "./ButtonDecrease2";
import ButtonIncrease2 from "./ButtonIncrease2";
import "./ShoppingItem2.css";

export default function ShoppingItem2() {
  console.log("ShoppingItem2 re-rendered!");

  const [count, setCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleDecrease = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, [count]);

  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  function handleFavorite() {
    setFavorite(!favorite);
  }

  function handleRemove() {
    setRemove(true);
  }

  return (
    <div
      className="shopping-item2"
      style={{ display: remove ? "none" : "flex" }}
    >
      <img src="https://placehold.co/78" alt="Placeholder 78x78" />
      <div className="shopping-item2__info">
        <div className="shopping-item2__info-name">
          <p>GTX 1660 Super</p>
          <span>Rp. 2.700.000</span>
        </div>
        <div className="shopping-item2__info-actions">
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
          <div className="shopping-item2__info-actions-count">
            <ButtonDecrease2 onClick={handleDecrease} />
            <span>{count}</span>
            <ButtonIncrease2 onClick={handleIncrease} />
          </div>
        </div>
      </div>
    </div>
  );
}
