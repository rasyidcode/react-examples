import { useEffect, useState } from "react";
import "./Example4.css";

function PostItem({
  post,
  showPostId,
  onShowPostId,
}: {
  post: PostWithUser;
  showPostId: boolean;
  onShowPostId: () => void;
}) {
  console.log(`re-render ${post.title}`);

  const [bgColor, setBgColor] = useState("#f1f1f1");
  return (
    <div style={{ backgroundColor: bgColor }} className="post-item">
      <div className="post-item-header">
        {showPostId && <p className="post-id">{post.id}</p>}
        <h3>{post.user.name}</h3>
        <p>{post.user.email}</p>
      </div>
      <div className="post-item-body">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <button onClick={() => setBgColor("#919191")}>Change background</button>
        <button onClick={onShowPostId}>Show Post ID</button>
      </div>
    </div>
  );
}

function PostList({
  posts,
  onFetchPosts,
}: {
  posts: PostWithUser[];
  onFetchPosts: () => void;
}) {
  console.log("re-render PostList");
  const [showPostId, setShowPostId] = useState(false);
  return (
    <>
      <button className="btn-fetch-posts" onClick={onFetchPosts}>
        Fetch posts
      </button>
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostItem
              showPostId={showPostId}
              onShowPostId={() => setShowPostId(!showPostId)}
              key={post.id}
              post={post}
            />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </>
  );
}

export default function Example4() {
  console.log("re-render Example4");

  const [posts, setPosts] = useState<PostWithUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  async function fetchPosts() {
    console.log("fetching posts...");
    setLoading(true);
    try {
      const postsRes = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsJson: Post[] = await postsRes.json();
      const postsWithUser = await Promise.all(
        postsJson.map(async (postJson) => {
          try {
            const userRes = await fetch(
              `https://jsonplaceholder.typicode.com/users/${postJson.userId}`
            );
            const userJson: User = await userRes.json();
            return {
              id: postJson.id,
              title: postJson.title,
              body: postJson.body,
              user: {
                id: userJson.id,
                name: userJson.name,
                email: userJson.email,
              },
            };
          } catch (error) {
            console.error(error);
            return {
              id: postJson.id,
              title: postJson.title,
              body: postJson.body,
              user: {
                id: -1,
                name: "unknown",
                email: "unknown",
              },
            };
          }
        })
      );

      setPosts(postsWithUser);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
    setLoading(false);
  }

  //   useEffect(() => {
  //     console.log("useEffect running...");
  //     fetchPosts();
  //   }, []);

  return (
    <div>
      <h1>Example4</h1>
      <div className="counter">
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Count +1</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PostList onFetchPosts={fetchPosts} posts={posts} />
      )}
    </div>
  );
}
