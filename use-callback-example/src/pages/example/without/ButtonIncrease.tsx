export default function ButtonIncrease({ onClick }: { onClick: () => void }) {
  console.log("ButtonIncrease re-rendered!");
  return (
    <button className="btn-increase" onClick={onClick}>
      +
    </button>
  );
}
