/* eslint-disable react/prop-types */
import Avatar from "./Avatar2";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile(props) {
  return (
    <Card>
      <Avatar {...props} />
    </Card>
  );
}
