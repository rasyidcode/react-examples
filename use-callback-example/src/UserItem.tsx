export default function UserItem({ user }: { user: User }) {
//   console.log(`Rendering user: ${user.name}`);
  return <li>{user.name}</li>;
}
