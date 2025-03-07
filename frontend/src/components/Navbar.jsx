import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../store/authstore";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  console.log(user);

  const handleLogout = async () => {
    const { message } = await logout();
    toast.success(message);
    navigate("/");
  };
  return (
    <nav className="bg-[#252422] flex justify-between items-center text-[#FFFCF2] px-4 md:px-12 py-4 md:py-6">
      <Link to={"/"}>
        <label className="font-semibold tracking-wider md:text-lg lg:text-xl cursor-pointer">
          Beyond the Shelf
        </label>
      </Link>

      {user ? (
        <div className="flex items-center space-x-5 md:text-lg">
          <Link to={"/add-book"}>
            <p>Add Book</p>
          </Link>
          <p
            className="bg-[#403D39] px-3 py-2 cursor-pointer"
            onClick={handleLogout}
          >
            LogOut({user.username})
          </p>
        </div>
      ) : (
        <div className="flex items-center space-x-5 md:text-lg">
          <Link to={"/login"}>
            <p>Add Book</p>
          </Link>
          <Link to={"/login"}>
            <p>Log in</p>
          </Link>
          <Link to={"/signup"}>
            <p className="bg-[#403D39] px-3 py-2">Sign up</p>
          </Link>
        </div>
      )}
    </nav>
  );
}
