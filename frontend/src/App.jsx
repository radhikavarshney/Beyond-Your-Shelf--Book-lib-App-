import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddBook from "./pages/AddBook";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authstore";
import { useEffect } from "react";
import RedirectAuthUsers from "./providers/RedirectAuthUsers";
import RedirectUnauthUser from "./providers/RedirectUnauthUser";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import BookPage from "./pages/BookPage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  const { fetchUser, fetchingUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (fetchingUser) {
    return <p>Loading . . .</p>;
  }
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route
          path={"/add-book"}
          element={
            <RedirectUnauthUser>
              <AddBook />
            </RedirectUnauthUser>
          }
        />
        <Route
          path={"/signup"}
          element={
            <RedirectAuthUsers>
              <SignupPage />
            </RedirectAuthUsers>
          }
        />
        <Route
          path={"/login"}
          element={
            <RedirectAuthUsers>
              <LoginPage />
            </RedirectAuthUsers>
          }
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/book/:id/update" element={<UpdatePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
