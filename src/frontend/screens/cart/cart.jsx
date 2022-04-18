import axios from "axios";
import { Card } from "frontend/components";
import { useUser } from "frontend/context";
import { getLocalStorage } from "frontend/helpers";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      try {
        axios.post(
          "/api/user/cart",
          {},
          {
            headers: {
              authorization: getLocalStorage("token"),
            },
          }
        );
      } catch (e) {
        navigate("/login");
      }
    }
  }, []);
  return (
    <div className="cart">
      <div className="cart-products">
        {user && user.cart.map((item) => <Card inCart={true} product={item} />)}
      </div>
      {user && user.cart.length > 0 ? (
        <div className="cart-total">
          Total :{" "}
          {user.cart.reduce(
            (acc, curr) => acc + Number(curr.discountedPrice.replace(",", "")),
            0
          )}
          <button className="secondary-btn">Check out</button>
        </div>
      ) : (
        <h1>Nothing in your cart</h1>
      )}
    </div>
  );
};
