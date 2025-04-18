/* eslint-disable react/prop-types */
import { people } from "../data";
import { getImageUrl2 } from "../utils";

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl2(person)} alt={person.name} />
            <p>
              <b>{person.name}</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );
  return (
    <article>
      <h1>Scientiests</h1>
      <ListSection title="Chemist" people={chemists} />
      <ListSection title="Everyone Else" people={everyoneElse} />
    </article>
  );
}
