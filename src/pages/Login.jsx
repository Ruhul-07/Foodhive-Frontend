import Lottie from "lottie-react";
import loginLottieData from "../assets/animation/login.json";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(result => {
        const user = result.user;
        setUserId(user)
    })
    .catch(error => {
        console.log(error.message)
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="text-center lg:text-left md:h-96">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center pt-5">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center -mt-4 text-sm">
            already have an account?{"\u00A0"}
            <NavLink to="/auth/signUp">
              <span className="italic text-blue-700 text-lg">Login</span>
            </NavLink>
          </p>
          <div className="divider w-[320px] mx-auto">OR</div>
          <div className="form-control mb-5">
            <button className="btn btn-outline mx-auto w-[320px]">
              <FcGoogle className="text-xl" />
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
