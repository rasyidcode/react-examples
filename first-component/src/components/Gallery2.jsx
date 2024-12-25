export default function Gallery2() {
  return (
    <div>
      <h1>Cool Memes Actor</h1>
      <section className="profile">
        <h2>John Cena</h2>
        <img
          className="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bO-wBQvbFLn5GNlSviEHraP2fqSppeFTcA&s"
          alt="John Cena"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Born: </b>
            April 23, 1977 (age 44), West Newbury, Massachusetts, U.S.
          </li>
          <li>
            <b>Spouses: </b>
            Elizabeth Huberdeau (m. 2009–2012), Shay Shariatzadeh (m. 2020)
          </li>
          <li>
            <b>Movies: 4</b>
            (Piecemaker, The Suicide Squad, Ricky Stanicky, Fast & Furious 9)
          </li>
          <li>
            <b>Height:</b>
            183 cm
          </li>
          <li>
            <b>Weight:</b>
            114 kg
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Dwayne Johnson</h2>
        <img
          className="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYP4ebt1dGJEDLt0ySbVb8fKjh4cPbI9Oeg&s"
          alt="Dwayne Johnson"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Born: </b>
            Dwayne Douglas Johnson May 2, 1972 (age 52)
          </li>
          <li>
            <b>Spouses: </b>
            Dany Garcia (m. 1997; div. 2008) Lauren Hashian (m. 2019)
          </li>
          <li>
            <b>Movies: 4</b>
            (Moana, Jumanji, Red Notice, Black Adam)
          </li>
          <li>
            <b>Height:</b>
            196 cm
          </li>
          <li>
            <b>Weight:</b>
            118 kg
          </li>
        </ul>
      </section>
    </div>
  );
}
