import React from "react";

const ButtonDecrease2 = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("ButtonDecrease2 re-rendered!");
  return <button onClick={onClick}>-</button>;
});

export default ButtonDecrease2;
