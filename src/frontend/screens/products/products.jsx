import axios from "axios";
import { Card } from "frontend/components";
import { useProduct, useUser } from "frontend/context";
import React, { useEffect } from "react";
import "./products.css";
import { Filter } from "./filter";

export const Products = () => {
  const { user } = useUser();
  const {
    products: { products },
    productDispatch,
  } = useProduct();

  useEffect(() => {
    (async function () {
      if (products.length <= 0) {
        const {
          data: { products },
        } = await axios.get("/api/products");
        productDispatch({ payload: products, action: "UPDATE-PRODUCTS" });
      }
    })();
  }, []);

  productDispatch({ payload: "", action: "" });
  return (
    <div className="products">
      <Filter />
      <div className="product-listing">
        {products.map((product) => {
          return (
            <Card
              product={product}
              isAddedToCart={
                user
                  ? user.cart.find((item) => item._id === product._id)
                    ? true
                    : false
                  : false
              }
              isAddedToWishlist={
                user
                  ? user.wishlist.find((item) => item._id === product._id)
                    ? true
                    : false
                  : false
              }
            />
          );
        })}
      </div>
    </div>
  );
};
