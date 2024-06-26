import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext)

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <i class="fa-solid fa-building-columns"></i>
          <span>Eniusrealestate.</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img 
              src={ currentUser.avatar || "../../user.png"}
              alt="" />
            <span>{currentUser.username}</span>
            
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}

        <div
          className={`menuIcon ${open ? "white" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
