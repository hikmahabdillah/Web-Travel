import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const users = {email, password};
    try {
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        body: JSON.stringify(users),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          console.log(email)
          console.log(password)
          setError("invalid email or password");
        } else {
          setError(json.error || "An error occurred.");
        }
      } else {
        setError(null);
        setEmail("");
        setPassword("");
        event.target.reset();
        navigate("/"); // Redirect to home page
        console.log('Registration success', json);
      }
    } catch (error) {
      setError("Network Error: Please check your connection.");
      console.error("Network error:", error);
    }

  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full h-full justify-center px-6 my-12">
        {/* <!-- Row --> */}
        <div className="w-full h-auto lg:h-[33rem] max-w-lg xl:w-3/4 lg:w-11/12 lg:max-w-4xl flex shadow-lg">
          {/* <!-- Col --> */}
          <div
            className="w-full bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-xl"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/564x/6b/a4/cc/6ba4cc76c17b74c9e6e3f3719ad59bc8.jpg')",
            }}
          ></div>
          {/* <!-- Col --> */}
          <div className="w-full h-full flex flex-col justify-center items-center lg:w-1/2 bg-white p-5 rounded-r-xl lg:rounded-l-none">
            <h3 className="pt-4 font-bold text-2xl text-center text-neutral-800">
              Welcome Back!
            </h3>
            {error && <p className="text-red-600">{error}</p>}
            <form className="w-full px-8 pt-6 mb-4 bg-white rounded" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                />
                <label
                  className="text-sm text-neutral-800"
                  htmlFor="checkbox_id"
                >
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-sm text-center text-neutral-800">
                Don{"'"}t have an account?{" "}
                <Link
                  className="inline-block font-semibold underline-offset-1 text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="/register"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
