import { Link, Outlet } from "react-router";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>useCallback() hook examples</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/example">Example</Link></li>
        <li><Link to="/example2">Example 2</Link></li>
        <li><Link to="/example3">Example 3</Link></li>
        <li><Link to="/example4">Example 4</Link></li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
}
