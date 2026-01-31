import { Link } from "react-router";
import { AuthContext } from "../../authcontext/AuthContext";
import { use, useState } from "react";
const Avatar = () => {
  const { user, logOut } = use(AuthContext);
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const handleSignOut = () => {
    logOut();
  };
  const handleToggler = () => {
    setToggleAvatar(!toggleAvatar)
  }
  return (
    <div className="relative z-50 group">
      <div className="avatar cursor-pointer" onClick={handleToggler}>
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>
      <div className={`mt-3 flex-col items-start gap-1 absolute flex bg-blue-50 shadow w-32 ${toggleAvatar ? '' : 'hidden'}`} >
        <Link to={"/profile"} className="w-full font-semibold hover:bg-blue-100 px-2 py-1">
          View Profile
        </Link>
        <button onClick={handleSignOut} className="w-full text-start cursor-pointer px-2 py-1 font-semibold hover:bg-blue-100">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Avatar;
