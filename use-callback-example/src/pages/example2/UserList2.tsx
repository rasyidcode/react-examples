import { useCallback, useEffect, useState } from "react";
import UserItem from "./UserItem2";
import "./UserList2.css";

export default function UserList2() {
  console.log("re-render UserList2!");

  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async (searchQuery: string) => {
    console.log("fetching users...");
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?q=${searchQuery}`
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
    setLoading(false);
  }, []);

  // Fetch users when query changes
  useEffect(() => {
    fetchUsers(query); // ⚠️ `fetchUsers` is recreated every render, causing unnecessary API calls
  }, []); // ⚠️ Since `fetchUsers` is a new function every time, `useEffect` runs every render

  return (
    <section className="user-list2">
      <h2>Search users</h2>
      <div className="user-list2__search">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => fetchUsers(query)}>Search</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </section>
  );
}
