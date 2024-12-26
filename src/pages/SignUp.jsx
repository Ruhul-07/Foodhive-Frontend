import Lottie from "lottie-react";
import signUpLottieData from "../assets/animation/signUp.json";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
const SignUp = () => {
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const navigate = useNavigate();

   // Validate password in real-time
   const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long, contain at least one uppercase letter, and one lowercase letter."
      );
      setPasswordValid(false);
    } else {
      setPasswordError("");
      setPasswordValid(true);
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value.trim();
    validatePassword(password);
  };


  const handleRegister = (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

      // Final validation before submission
    if (!passwordValid) {
      setLoading(false);
      toast.error("Please fix the password issues before proceeding.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(
          (result) => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            toast.success("Account created successfully!");
            navigate("/", { replace: true });
            e.target.reset();
          }
        );
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
                onChange={handlePasswordChange}
              />
               {passwordError && (
                <span className="text-red-500 text-sm mt-2">{passwordError}</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <p className="text-center -mt-4 text-sm mb-5">
            already have an account?{"\u00A0"}
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
