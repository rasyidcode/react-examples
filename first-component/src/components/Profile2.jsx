import { getImageURL } from "../utils";

export default function Profile2() {
  return (
    <Card>
      <Avatar size={100} person={{
        name: 'John Cena',
        imageQuery: 'tbn:ANd9GcSLD0WJi3ePhxARZFzZBxEe92XxAk4ALD_qig&s'
      }} />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageURL(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}
