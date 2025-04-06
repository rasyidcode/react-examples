import { useState, useCallback } from "react";
import Button2 from "./Button2";

export default function ShoppingItem() {
  console.log("Example2 re-rendered!");

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="shopping-item">
      <img src="https://placehold.co/78" alt="Placeholder 78x78" />
      <div className="shopping-item__info">
        <div>
          <span>Shopping item name</span>
          <span>Shopping item price</span>
        </div>
        <div>
          {/* love icon */}
          {/* trash icon */}
          {/* controlled counter */}
        </div>
      </div>
    </div>
  );
}
