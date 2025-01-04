import { people } from "../data";
import { getImageUrl2 } from "../utils";

export default function List() {
  const chemists = people.filter(person => person.profession === 'chemist')
  const elses = people.filter(person => person.profession !== 'chemist')
  const listChemist = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl2(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  const listElse = elses.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl2(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Scientiests</h1>
      <h2>Chemists</h2>
      <ul>{listChemist}</ul>
      <h2>Everyone Else</h2>
      <ul>{listElse}</ul>
    </article>
  );
}
