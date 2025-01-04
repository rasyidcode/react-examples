import { people } from '../data'
import { getImageUrl2 } from '../utils'
export default function List() {
  const chemists = people.filter((people) => people.profession === "chemist");
  const listItems = chemists.map((person) => <li>
    <img src={getImageUrl2(person)} alt={person.name} />
    <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
    </p>
  </li>);
  return <ul>{listItems}</ul>;
}
