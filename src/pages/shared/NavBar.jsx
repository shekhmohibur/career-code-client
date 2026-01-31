import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../authcontext/AuthContext";

const NavBar = () => {
  const {user} = use(AuthContext);
  const navLinks = [
    {id: 1, name:'Home', path:'/'},
    {id: 2, name:'Find Job', path:'/findJobs'},
    {id: 3, name:'Recruiters', path:'/recruiters'},
    {id: 4, name:'Candidates', path:'/candidates'},
  ]
  return <div>
    <div className="flex justify-between items-center py-3 container mx-auto px-2 md:px-0">
      <div className="logo">
        <Link className="btn btn-ghost text-blue-500 font-bold text-lg hover:bg-transparent" to={'/'}>CodeCareer</Link>
      </div>
      <div className="navLinks gap-5 hidden md:flex">
          {
            navLinks?.map((link) => <NavLink to={link.path} key={link.id} className={'hover:text-blue-500 font-semibold'}>{link.name}</NavLink>)
          }
      </div>
      <div className="userLogin">
        {
          user ? <span className="font-semibold text-gray-600">Hello, {user.email}</span> : <Link to={'/signup'} className="btn bg-[#8550fb] text-white font-semibold shadow-[#8550fb] hover:shadow-sm border-none transition-all duration-300">Get Started</Link>
        }
      </div>
    </div>
  </div>;
};

export default NavBar;
