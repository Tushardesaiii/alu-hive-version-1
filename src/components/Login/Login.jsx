import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseauth/Firebase";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return ( <>  
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('/loginbg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="w-full px-6 py-8  md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-center text-gray-600">Welcome back!</p>

          <button
  onClick={handleGoogleSignIn}
  className="flex items-center justify-center w-full mt-4 bg-black text-white transition-all duration-300 transform border border-gray-300 rounded-lg shadow-sm  hover:bg-gray-800 hover:shadow-md active:scale-95"
>
  <div className="px-4 py-2">
    <svg className="w-6 h-6" viewBox="0 0 40 40">
      <path
        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
        fill="#FFC107"
      />
    </svg>
  </div>
  <span className="w-5/6 px-4 py-3 font-bold text-center">
    Sign in with Google
  </span>
</button>


          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Email Address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
              type="email"
              required
            />

            <label className="block mt-4 mb-2 text-sm font-medium text-gray-600">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
              type="password"
              required
            />

            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 text-sm font-medium tracking-wide text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Do not have an account? {" "}
              <Link to="/signup" className="text-black hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;