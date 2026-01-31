import React, { use } from "react";
import LoginWithGoogle from "../shared/LoginWithGoogle";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../authcontext/AuthContext";
const SignUp = () => {
    const navigate = useNavigate();
    const {user} = use(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
    }
        if(user){
        navigate('/');
    }
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <h2 className="text-center text-2xl font-bold mt-3">Welcome Back</h2>
        <LoginWithGoogle/>
        <form className="card-body" onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input outline-none input-bordered w-full"
              type="email"
              id="email"
              placeholder="example@email.com"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input outline-none input-bordered w-full"
              type="password"
              id="password"
              placeholder="********"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#8550fb] text-white w-full">Sign Up</button>
          </div>
        </form>
        <p className="text-center text-gray-500 font-semibold mb-4">Didn't Signed Up? <Link className="text-[#8550fb] font-semibold" to={'/signup'}>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
