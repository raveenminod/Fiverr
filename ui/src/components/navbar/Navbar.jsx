import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Raveen Minod",
    isSeller: true,
    img: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
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
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div
              className="user"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src={currentUser?.img} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">Gigs</Link>
                      <Link to="/add" className="link">Add New Gig</Link>
                    </>
                  )}
                  <Link to="/orders" className="link">Orders</Link>
                  <Link to="/messages" className="link">Messages</Link>
                  <Link to="/" className="link">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          {/* // menu */}
          <div className="menu">
            <span className="test">Test</span>
            <span className="test">Test 2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
