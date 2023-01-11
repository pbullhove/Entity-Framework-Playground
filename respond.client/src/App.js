import logo from "./logo.svg";
import "./App.css";
import { User } from "./User";
import { Admin } from "./Admin";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/forms/registerForm";
import LoginForm from "./components/forms/loginForm";
import LogOut from "./components/logout";
import { Home } from "./Home";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/not-found" element={<h1>Page Not Found</h1>} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
