import { useState } from "react";
import { login } from "../api/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await login(username, password);
      window.location.href = "/"; // przekierowanie po zalogowaniu
    } catch {
      setError("Niepoprawny login lub hasło");
    }
  }

 return (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="max-w-lg w-full px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">Sign in</h2>
      </div>

      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="email">Email</label>
          <input
            id="email"
            className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="email"
            placeholder="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="password">Password</label>
          <input
            id="password"
            className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
          <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
            <label htmlFor="remember">
              <input id="remember" type="checkbox" />
              <span className="ml-1 font-extrabold">Remember me</span>
            </label>
          </div>

          <div className="w-full lg:w-auto px-4">
            <a className="inline-block font-extrabold hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
          Sign in
        </button>

        <p className="text-center font-extrabold">
          Don’t have an account?{" "}
          <a className="text-red-500 hover:underline" href="#">
            Sign up
          </a>
        </p>
      </form>
    </div>
  </div>
);
}