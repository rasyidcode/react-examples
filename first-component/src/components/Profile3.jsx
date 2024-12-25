/* eslint-disable react/prop-types */
function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <h1
        style={{
          color: "red",
          fontSize: "50px",
          fontWeight: "bold",
          padding: "20px",
        }}
      >
        Dawyne Johnson
      </h1>
    </Card>
  );
}
