import { NavLink, Outlet, useLocation } from "react-router";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img
            alt="MongoDB Logo"
            className="h-10 inline"
            src="https://raw.githubusercontent.com/mongodb-developer/mern-stack-example/603144e25ba5549159d1962601337652a7bfa253/mern/client/src/assets/mongodb.svg"
          />
        </NavLink>
        {isHome && (
          <NavLink
            to="/new"
            className=" text-base font-medium border rounded-md px-3"
          >
            Create Employee
          </NavLink>
        )}
      </nav>

      <Outlet />
    </div>
  );
}
