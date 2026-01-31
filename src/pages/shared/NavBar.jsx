import { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../authcontext/AuthContext";
import Avatar from "./Avatar";
import { Menu } from "lucide-react";

const NavBar = () => {
  const { user } = use(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
  const handleClickOutside = (e) => {
    // Check if the click is outside the menuRef div
    if (menuRef.current && !menuRef.current.contains(e.target) && menuOpen) {
      setMenuOpen(false);
    }
  };

  // Add event listener for clicks outside of the menu
  window.addEventListener('click', handleClickOutside);

  // Cleanup the event listener when the component unmounts or updates
  return () => {
    window.removeEventListener('click', handleClickOutside);
  };
}, [menuOpen]);  
  const handleDropDown = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };
  
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Find Job", path: "/findJobs" },
    { id: 3, name: "Recruiters", path: "/recruiters" },
    { id: 4, name: "Candidates", path: "/candidates" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center py-3 container mx-auto px-2 md:px-0">
        <div className="logo flex justify-center items-center gap-3">
          <Menu size={23} className="cursor-pointer lg:hidden" onClick={handleDropDown}/>
          <Link
            className="btn btn-ghost text-blue-500 font-bold text-lg hover:bg-transparent"
            to={"/"}
          >
            CodeCareer
          </Link>
        </div>
        <div ref={menuRef} className={`navLinks flex-col ${menuOpen ? "flex" : 'hidden'} absolute top-12 bg-blue-50 rounded-sm shadow-md w-28`}>
          {navLinks?.map((link) => (
            <NavLink
              to={link.path}
              key={link.id}
              className={"hover:text-blue-500 font-semibold w-full px-1 hover:bg-blue-100 py-2"}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="navLinks gap-5 hidden lg:flex">
          {navLinks?.map((link) => (
            <NavLink
              to={link.path}
              key={link.id}
              className={"hover:text-blue-500 font-semibold"}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="userLogin">
          {user ? (
            <Avatar />
          ) : (
            <Link
              to={"/signup"}
              className="btn bg-[#8550fb] text-white font-semibold shadow-[#8550fb] hover:shadow-sm border-none transition-all duration-300"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
