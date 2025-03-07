import { useEffect } from "react";
import { useAuthStore } from "../store/authstore";
import { useNavigate } from "react-router";

export default function RedirectAuthUsers({ children }) {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  //for while redirecting or loading
  if (user) {
    return null;
  }

  return <>{children}</>;
}
