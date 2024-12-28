/* eslint-disable react/prop-types */
function Profile({ person, imageSize }) {
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
          <b>Born: </b>
          {person.born}
        </li>
        <li>
          <b>Spouses: </b>
          {person.spouses}
        </li>
        <li>
          <b>Movies: {person.movies.size}</b>({person.movies.join(", ")})
        </li>
        <li>
          <b>Height: </b>
          {person.height}
        </li>
        <li>
          <b>Weight: </b>
          {person.weight}
        </li>
      </ul>
    </section>
  );
}

function getImageUrl(imageId) {
  return "https://encrypted-tbn0.gstatic.com/images?q=tbn:" + imageId + "&s";
}

export default function Gallery2() {
  const persons = [
    {
      name: "John Cena",
      imageId: "ANd9GcT2bO-wBQvbFLn5GNlSviEHraP2fqSppeFTcA",
      born: "April 23, 1977 (age 44), West Newbury, Massachusetts, U.S.",
      spouses:
        "Elizabeth Huberdeau (m. 2009–2012), Shay Shariatzadeh (m. 2020)",
      movies: [
        "Piecemaker",
        "The Suicide Squad",
        "Ricky Stanicky",
        "Fast & Furious 9",
      ],
      height: "183 cm",
      weight: "114 kg",
    },
    {
      name: "Dwayne Johnson",
      imageId: "ANd9GcThYP4ebt1dGJEDLt0ySbVb8fKjh4cPbI9Oeg",
      born: "May 2, 1972 (age 52), Hayward, California, Amerika",
      spouses: "Dany Garcia (m. 1997; div. 2008) Lauren Hashian (m. 2019)",
      movies: ["Moana", "Black Adam", "Jumanji", "Red Notice"],
      height: "196 cm",
      weight: "118 kg",
    },
  ];
  return (
    <div>
      <h1>Cool Memes Actor</h1>
      {persons.map((person) => (
        <Profile key={person.name} person={person} />
      ))}
    </div>
  );
}
