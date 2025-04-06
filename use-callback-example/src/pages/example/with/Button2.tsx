import React from "react";

const Button2 = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Button2 re-rendered!");
  return <button onClick={onClick}>Increment from child</button>;
});

export default Button2;