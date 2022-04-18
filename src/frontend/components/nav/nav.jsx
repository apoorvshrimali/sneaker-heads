import { useUser } from "frontend/context";
import { removeLocalStorage } from "frontend/helpers";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Cart, Wishlist } from "../svg-icons";
import "./nav.css";

export const Nav = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  function clickHandler() {
    if (user) {
      removeLocalStorage("token");
      setUser(null);
      navigate("/login");
    } else {
      navigate("/login");
    }
  }
  return (
    <nav className="nav">
      <NavLink className="nav-link logo" to="/">
        SneakerHeads
      </NavLink>
      <div>
        <ul className="nav-ul">
          <li>
            <NavLink className="nav-link" to="/cart">
              <Cart />
              {user && user.cart.length > 0 && <div>{user.cart.length}</div>}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/wishlist">
              <Wishlist />
            </NavLink>
          </li>
          <button
            onClick={() => clickHandler()}
            className="nav-btn secondary-btn"
          >
            {!user ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </nav>
  );
};
