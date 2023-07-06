import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import createRequest from "../../utils/newRequest";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try {
      await createRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <Link className="link" to="/login">Sign in</Link>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <Link to="/register"><button>Join</button></Link>}
          {currentUser && (
            <div
              className="user"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src={currentUser?.img || "/img/man.png"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link onClick={handleLogout} className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          {/* // menu */}
          <div className="menu">
            <Link className="link menuLink" to="/">Graphic & Design</Link>
            <Link className="link menuLink" to="/">Video & Animation</Link>
            <Link className="link menuLink" to="/">Writing & Translation</Link>
            <Link className="link menuLink" to="/">AI Service</Link>
            <Link className="link menuLink" to="/">Digital Marketing</Link>
            <Link className="link menuLink" to="/">Music & Audio</Link>
            <Link className="link menuLink" to="/">Programming & Tech</Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
