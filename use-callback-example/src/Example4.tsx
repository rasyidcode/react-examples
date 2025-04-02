import { useEffect, useState } from "react";
import "./Example4.css";

function PostItem({ post }: { post: PostWithUser }) {
  return (
    <div className="post-item">
      <div className="post-item-header">
        <h3>{post.user.name}</h3>
        <p>{post.user.email}</p>
      </div>
      <div className="post-item-body">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default function Example4() {
  const [posts, setPosts] = useState<PostWithUser[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchPosts() {
    setLoading(true);
    try {
      const postsWithUser: PostWithUser[] = [];
      const postsRes = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsJson: Post[] = await postsRes.json();
      postsJson.forEach(async (postJson) => {
        const userRes = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postJson.userId}`
        );
        const userJson: User = await userRes.json();
        postsWithUser.push({
          id: postJson.id,
          title: postJson.title,
          body: postJson.body,
          user: {
            id: userJson.id,
            name: userJson.name,
            email: userJson.email,
          },
        });
      });

      console.log(postsWithUser);

      setPosts(postsWithUser);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Example4</h1>
      <div className="post-list">
        {posts.length > 0 &&
          posts.map((post) => <PostItem key={post.id} post={post} />)}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}
