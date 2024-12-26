import Lottie from "lottie-react";
import loginLottieData from "../assets/animation/login.json";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const { signInUser, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // form data collect
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try{
      const result = await signInUser(email, password);
      const user = result.user;
      await axios.post(
        "http://localhost:5000/jwt",
        { email: user.email },
        { withCredentials: true }
      );
      
      toast.success("Successfully logged in!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || "Failed to log in!")
      setError(err.message);
    } finally {
      setLoading(false)
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user;
      navigate(location.state?.from || "/");
    })
    .catch((err) => {
      setError({ ...error, login: err.code });
    });
  }
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
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center -mt-4 text-sm">
            already have an account?{"\u00A0"}
            <NavLink to="/auth/signUp">
              <span className="text-blue-700 text-lg">SignUp</span>
            </NavLink>
          </p>
          <div className="divider w-[320px] mx-auto">OR</div>
          <div className="form-control mb-5">
            <button onClick={handleGoogleLogin} className="btn btn-outline mx-auto w-[320px]">
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
