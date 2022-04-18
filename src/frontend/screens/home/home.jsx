import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <section>
        <h1> SneakerHeads</h1>
        <h3>
          A Planet For All SneakerHeads To Explore Wide Variety Of Sneakers!!!
        </h3>
        <button onClick={() => navigate("/products")} className="primary-btn">
          Shop Now
        </button>
      </section>
      <img
        alt="shoe"
        className="img"
        src="https://firebasestorage.googleapis.com/v0/b/bikai-d5ee5/o/images%2Feecb761d-d2d1-410c-9eaa-6b07899b0c2c?alt=media&token=43c5626d-674d-4337-add0-e71f1e6a6169"
      ></img>
    </div>
  );
};
