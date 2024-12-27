/* eslint-disable react/prop-types */
import { getImageUrl } from "../utils";

function Profile({ person, imageSize = 70 }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery3() {
  const scientiests = [
    {
      name: "Maria Skłodowska-Curie",
      profession: "physicist and chemist",
      awards: [
        "Nobel Prize in Physics",
        "Nobel Prize in Chemistry",
        "Davy Medal",
        "Matteucci Medal",
      ],
      discovered: "polonium (chemical element)",
      imageId: "szV5sdG",
    },
    {
      name: "Katsuko Saruhashi",
      profession: "geochemist",
      awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
      discovered: "a method for measuring carbon dioxide in seawater",
      imageId: "YfeOqp2",
    },
  ];
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientiests.map((person) => (
        <Profile key={person.name} person={person} />
      ))}
    </div>
  );
}
