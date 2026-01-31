import React, { use, useState } from "react";
import LoginWithGoogle from "../shared/LoginWithGoogle";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../authcontext/AuthContext";

const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const {createUser, user} = use(AuthContext);
    if(user){
        navigate('/');
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }else{
            setError(null);
        }
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            setError(error.message);
        });
    }
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <h2 className="text-center text-2xl font-bold mt-3">Sign Up</h2>
        <LoginWithGoogle/>
        {
            error && <p className="text-red-500 text-center font-semibold">{error}</p>
        }
        
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
          <div className="form-control">
            <label className="label" htmlFor="confirmPassword">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              className="input outline-none input-bordered w-full"
              type="password"
              id="confirmPassword"
              placeholder="********"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#8550fb] text-white w-full">Sign Up</button>
          </div>
        </form>
        <p className="text-center text-gray-500 font-semibold mb-4">Already Signed Up? <Link className="text-[#8550fb] font-semibold" to={'/signin'}>Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
