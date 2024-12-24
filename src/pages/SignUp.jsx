import Lottie from "lottie-react";
import signUpLottieData from "../assets/animation/signUp.json";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password);

    //password validation
    //show password validation error
    createUser(email, password)
      .then((result) => {
        const user =result.user;
        setUser(user)
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(result => {
          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
          });
          e.target.reset(); 
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="text-center lg:text-left md:h-96">
          <Lottie animationData={signUpLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center pt-5">Sign Up!</h1>
          <form onSubmit={handleRegister} className="card-body">
            {/* Name Input Section */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* email input section */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* PhotoURL input section */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL Link"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password input section */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <p className="text-center -mt-4 text-sm mb-5">
            already have an account?{'\u00A0'}
            <NavLink to="/auth/login">
              <span className="text-blue-700 text-lg">Log In</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
