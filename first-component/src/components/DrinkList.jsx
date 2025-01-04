/* eslint-disable react/prop-types */
function Details({ plant, content, age }) {
  return (
    <dl>
      <dt>Part of plant</dt>
      <dd>{plant}</dd>
      <dt>Caffeine content</dt>
      <dd>{content}</dd>
      <dt>Age</dt>
      <dd>{age}</dd>
    </dl>
  );
}

function Drink({ name }) {
  let details = <Details plant="bean" content="80–185 mg/cup" age="1,000+ years" />;
  if (name == "tea") {
    details = <Details plant="leaf" content="15–70 mg/cup" age="4,000+ years" />;
  }

  return (
    <section>
      <h1>{name}</h1>
      {details}
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
