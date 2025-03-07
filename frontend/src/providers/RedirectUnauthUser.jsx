import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authstore";
import { useEffect } from "react";

export default function RedirectUnauthUser({ children }) {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  //for while redirecting or loading
  if (!user) {
    return null;
  }

  return <>{children}</>;
}
