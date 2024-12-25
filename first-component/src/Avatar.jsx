export default function Avatar() {
  const avatar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLD0WJi3ePhxARZFzZBxEe92XxAk4ALD_qig&s";
  const description = "Invisible Man";
  return <img src={avatar} alt={description} className="avatar" />;
}
