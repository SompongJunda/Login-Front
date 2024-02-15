import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const guestNav = [
  { to: "/", text: "Login" },
  { to: "/register", text: "Register" },
];

const userNav = [
  // { to: "/", text: "Home" },
  // { to: "/new", text: "New Todo" },
];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : guestNav;

  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };
  const navStyle = {
    backgroundColor: "#01002D",
  };

  return (
    <div className="navbar text-[#FFE177]" style={navStyle}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">IT Equipment</a>
      </div>

      <ul className="menu menu-horizontal  content text-[#dadada]">
        <li>
          <details>
            <summary>ทั้งหมด</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      <div className="form-control text-[#dadada]">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-100 md:w-auto min-w-[900px]"
        />
      </div>
      <button type="submit" className="btn  bg-amber-200 text-[#151515] ">
        Search
      </button>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {finalNav.map((el) => (
            <li key={el.to}>
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          {user?.id && (
            <li>
              <Link to="#" onClick={hdlLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
