export default function Button({ onClick }: { onClick: () => void }) {
  console.log("Button re-rendered!");
  return (
    <>
      <button onClick={onClick}>Increment from child</button>
    </>
  );
}
