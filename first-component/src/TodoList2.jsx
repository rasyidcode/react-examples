const person = {
  name: "Invisible Man",
  theme: {
    backgroundColor: "navy",
    color: "red",
  },
};

export default function TodoList2() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s Todos</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLD0WJi3ePhxARZFzZBxEe92XxAk4ALD_qig&s"
        alt="Invisible Man"
        className="avatar"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </div>
  );
}
