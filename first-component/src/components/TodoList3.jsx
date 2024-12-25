const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodoList3() {
  //   const name = "John Cena";
  //   return <h1>{name}&apos;s To Do List</h1>;
  return <h1>To Do List for {formatDate(today)}</h1>;
}
