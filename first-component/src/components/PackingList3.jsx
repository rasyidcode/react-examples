/* eslint-disable react/prop-types */
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? "✅" : "❌"}
    </li>
  );
}

export default function PackingList3() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
