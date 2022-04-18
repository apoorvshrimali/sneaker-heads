import React from "react";
import ReactDOM from "react-dom";
import "./frontend/styles/index.css";
import App from "./frontend/App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductContext, UserContext } from "frontend/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductContext>
        <UserContext>
          <App />
        </UserContext>
      </ProductContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
