import axios from "axios";
import { useUser } from "frontend/context";
import { getLocalStorage } from "frontend/helpers";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cart, Wishlist } from "../svg-icons";
import "./card.css";
export const Card = ({
  product,
  isAddedToCart = false,
  isAddedToWishlist = false,
  inCart = false,
  inWishlist = false,
}) => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  async function removeFromCart() {
    try {
      const data = await axios.delete("/api/user/cart/" + product._id, {
        headers: {
          authorization: getLocalStorage("token"),
        },
      });
      setUser((user) => ({
        ...user,
        cart: user.cart.filter((item) => item._id !== product._id),
      }));
    } catch (e) {
      console.log(e);
    }
  }
  async function addToCart() {
    try {
      const { data } = await axios.post(
        "/api/user/cart",
        {
          product: product,
        },
        {
          headers: {
            authorization: getLocalStorage("token"),
          },
        }
      );

      setUser((user) => ({ ...user, cart: [...user.cart, product] }));
    } catch (e) {
      console.log(e);
    }
  }

  async function addToWishlist() {
    try {
      await axios.post(
        "/api/user/wishlist",
        {
          product: product,
        },
        {
          headers: {
            authorization: getLocalStorage("token"),
          },
        }
      );
      setUser((user) => ({ ...user, wishlist: [...user.wishlist, product] }));
    } catch (e) {
      console.log(e);
    }
  }

  async function removeFromWishlist() {
    try {
      await axios.delete("/api/user/wishlist/" + product._id, {
        headers: {
          authorization: getLocalStorage("token"),
        },
      });
      setUser((user) => ({
        ...user,
        wishlist: user.wishlist.filter((item) => item._id !== product._id),
      }));
    } catch (e) {}
  }

  return (
    <div className="card">
      <img src={product.img} alt="sneaker" className="card-hero" />
      <h2 className="card-heading">{product.heading}</h2>
      <h3 className="card-sub-heading">{product.subTitle}</h3>
      <div className="pricing">
        <p className="card-discounted-price">₹{product.discountedPrice}</p>
        <p className="card-strikethrough-price">₹{product.price}</p>
        <p className="card-discount">{product.discount}</p>
      </div>
      {!inCart && !inWishlist && (
        <div className="actions">
          {!isAddedToCart ? (
            <button onClick={addToCart} className="card-btn primary-btn">
              Add to cart <Cart color="#fff" size="1rem" />
            </button>
          ) : (
            <button
              onClick={() => navigate("/cart")}
              className="card-btn primary-btn"
            >
              Go To Cart <Cart color="#fff" size="1rem" />
            </button>
          )}
          {!isAddedToWishlist ? (
            <button
              onClick={addToWishlist}
              className="card-btn card-btn-secondary secondary-btn"
            >
              Add to Wishlist <Wishlist size="0.75rem" />
            </button>
          ) : (
            <button
              onClick={removeFromWishlist}
              className="card-btn card-btn-secondary secondary-btn remove-wishlist"
            >
              Remove Wishlist <Wishlist size="0.75rem" />
            </button>
          )}
        </div>
      )}

      {inWishlist && (
        <button
          onClick={removeFromWishlist}
          className="card-btn card-btn-secondary secondary-btn remove-wishlist"
        >
          Remove Wishlist <Wishlist size="0.75rem" />
        </button>
      )}
      {inCart && (
        <div className="actions">
          <button
            onClick={removeFromCart}
            className="card-btn card-btn-secondary secondary-btn remove-wishlist"
          >
            Remove From Cart
          </button>
        </div>
      )}
    </div>
  );
};
