import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn";
import Purchase from "./Components/Purchase";
import RequireAuth from "./Components/RequireAuth";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import NotFound from "./Components/Shared/NotFound";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
