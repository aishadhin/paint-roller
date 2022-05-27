import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewProduct from "./Components/AddNewProduct";
import AllUsers from "./Components/AllUsers";
import Blog from "./Components/Blog";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn";
import MyProfile from "./Components/MyProfile";
import Orders from "./Components/Orders";
import Purchase from "./Components/Purchase";
import RequireAuth from "./Components/RequireAuth";
import Reviews from "./Components/Reviews";
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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Orders />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="allusers" element={<AllUsers/>} />
          <Route path="myprofile" element={<MyProfile/>} />
          <Route path="addnewproduct" element={<AddNewProduct/>} />
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
