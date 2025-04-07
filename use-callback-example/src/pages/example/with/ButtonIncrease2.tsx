import React from "react";

const ButtonIncrease2 = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("ButtonIncrease2 re-rendered!");
  return <button onClick={onClick}>+</button>;
});

export default ButtonIncrease2;
