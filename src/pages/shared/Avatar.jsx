import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
const Avatar = () => {
  const { logOut } = useAuth();
  const [toggleAvatar, setToggleAvatar] = useState(false);
  const avatarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(e.target) &&
        toggleAvatar
      ) {
        setToggleAvatar(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [toggleAvatar]);
  const handleSignOut = () => {
    logOut();
  };
  const handleToggler = (e) => {
    e.stopPropagation();
    setToggleAvatar(!toggleAvatar);
  };
  return (
    <div className="relative z-50 group">
      <div className="avatar cursor-pointer" onClick={handleToggler}>
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>
      <div
        ref={avatarRef}
        className={`mt-3 flex-col items-start gap-1 absolute flex bg-blue-50 shadow w-32 ${toggleAvatar ? "" : "hidden"}`}
      >
        <Link
          to={"/profile"}
          className="w-full font-semibold hover:bg-blue-100 px-2 py-1"
        >
          View Profile
        </Link>
        <button
          onClick={handleSignOut}
          className="w-full text-start cursor-pointer px-2 py-1 font-semibold hover:bg-blue-100"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Avatar;
