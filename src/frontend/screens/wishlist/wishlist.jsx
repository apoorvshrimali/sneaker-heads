import axios from "axios";
import { Card } from "frontend/components";
import { useUser } from "frontend/context";
import { getLocalStorage } from "frontend/helpers";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      try {
        axios.post(
          "/api/user/wishlist",
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
        {user &&
          user.wishlist.map((item) => (
            <Card inCart={false} inWishlist={true} product={item} />
          ))}
      </div>
      {user && user.cart.length > 0 && <h1>Nothing in your Wishlist</h1>}
    </div>
  );
};
