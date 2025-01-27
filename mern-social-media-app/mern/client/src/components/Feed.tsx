import PostList from "./PostList";
import PostStatusForm from "./PostStatusForm";

export default function Feed() {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      <PostStatusForm />
      <PostList />
    </div>
  );
}
