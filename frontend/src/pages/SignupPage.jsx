import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../store/authstore";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        toast.error("Password must match");
        return;
      }

      await signup(username, email, password);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen text-[#252422] bg-[#f5f5f5] px-4 md:px-12">
      <h2 className="text-center font-semibold pt-8 md:text-2xl w-full max-w-xl mx-auto">
        Sign Up
      </h2>

      <form
        onSubmit={handleSignup}
        className="flex flex-col justify-center items-center w-full max-w-xl mx-auto space-y-4 mt-10"
      >
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your emai id"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-Enter your password"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#403D39] text-[#FFFCF2] py-2 font-medium rounded-lg"
        >
          {isLoading ? "Please wait. . ." : "Sign up"}
        </button>
        <p>
          Already have an account?
          <Link to={"/login"} className="text-[#944424]">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
