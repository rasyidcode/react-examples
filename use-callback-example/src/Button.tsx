import React from "react";

const Button = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child re-rendered!");
  return <button onClick={onClick}>Increment from child</button>;
});

export default Button;

// export default function Button({ onClick }: { onClick: () => void }) {
//   console.log("child re-render");
//   return (
//     <>
//       <button onClick={onClick}>Increment from child</button>
//     </>
//   );
// }
