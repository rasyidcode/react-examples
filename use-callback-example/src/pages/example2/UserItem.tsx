export default function UserItem({ user }: { user: User }) {
  console.log(`re-render UserItem: ${user.name}`);
  return <li>{user.name}</li>;
}
