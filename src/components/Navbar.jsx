import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState(null)
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="allfoods">All Foods</NavLink>
      </li>
      <li>
        <NavLink to="/">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/">SignUp</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="ml-5 text-3xl font-bold">
          FoodHive
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {/* profile Image section */}
        <div>
            {user ? (<>
                <img src={user?.photoURL || 'default-avatar.png'} alt="profile" />
                <button>Log-Out</button>
            </>):
            <button className="btn">Login</button>
            }
        </div>
        <div>
            {/* blank div */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
