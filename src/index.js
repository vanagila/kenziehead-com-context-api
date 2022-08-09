import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./providers/Products";
import { CartProvider } from "./providers/Cart";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
