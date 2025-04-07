export default function ButtonDecrease({
  onClick,
}: {
  onClick: () => void;
}) {
  console.log("ButtonDecrease re-rendered!");
  return (
    <button className="btn-decrease" onClick={onClick}>
      -
    </button>
  );
}
