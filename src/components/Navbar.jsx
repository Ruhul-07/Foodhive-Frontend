import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import avatar from "../assets/avatar.png";
import { ThemeContext } from "../providers/ThemeProvider";
import axios from "axios";

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { user, logOutUser } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [isDark]);


  const handleLogOut = () => {
    axios.post("https://food-hive-backend.vercel.app/logout", {}, { withCredentials: true });
    logOutUser()
      .then((result) => {
        // console.log("user succefully LogOut");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    console.log("Dropdown toggled: ", !isDropdownOpen);
  };

  const links = (
    <>
      <li>
        <NavLink to="/" activeClassName="text-background underline">Home</NavLink>
      </li>
      <li>
        <NavLink to="allfoods" activeClassName="text-background underline">All Foods</NavLink>
      </li>
      <li>
        <NavLink to="gallery" activeClassName="text-background underline">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="contactUs" activeClassName="text-background underline">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="auth/signUp" activeClassName="text-background underline">SignUp</NavLink>
      </li>
    </>
  );
  return (
    <div className="px-12 navbar bg-primary opacity-90 text-white sticky z-20 top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content font-semibold text-lg bg-base-100 rounded-box z-[10] mt-3 w-52 shadow-lg"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className=" text-text text-3xl font-bold">
          FoodHive
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-semibold text-lg">{links}</ul>
      </div>
      <div className="navbar-end gap-2">

        {/* profile Image section */}
        <div className="relative">
          {user ? (
            <>
              <div className="flex gap-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  onClick={toggleDropdown}
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || avatar} alt="profile" />
                  </div>
                </div>
                <button onClick={handleLogOut} className="btn">
                  Log-Out
                </button>
              </div>
              {/* dropdown section */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
                  <ul>
                    <li>
                      <Link
                        to="/myFoods"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Foods
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/addFood"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Add Food
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/myOrders"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link to="/auth/login">
              <button className="btn bg-accent">Login</button>
            </Link>
          )}
        </div>
         {/* theme toogling section */}
       <div className="flex flex-col justify-center items-center">
          <input
            type="checkbox"
            className="toggle toggle-lg"
            checked={isDark}
            onChange={toggleTheme}
            aria-label="Toggle dark/light theme"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
