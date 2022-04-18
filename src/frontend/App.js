import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "./components/nav/nav";
import { Home, Login, Products, Signup, Cart, Wishlist } from "./screens";


import "./styles/App.css";
import { Protected } from "./components/private/private-route";

function App() {

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <Nav />
      <Routes>

        <Route
          element={
            <Protected path="/" />
          }
        >
          <Route
            path="/products"
            element={<Products />}
          ></Route>
        </Route>
        <Route
          element={
            <Protected path="/" />
          }
        >
          <Route
            path="/cart"
            element={<Cart />}
          ></Route>
        </Route>

        <Route
          element={
            <Protected path="/" />
          }
        >
          <Route
            path="/wishlist"
            element={<Wishlist />}
          ></Route>
        </Route>


        <Route element={<Home />} path="/"></Route>
        <Route element={<Products />} path="/products"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Signup />} path="/signup"></Route>
      </Routes>

    </div>
  );
}

export default App;
