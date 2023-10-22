import React from "react";
import "./Button.css";

export const Button = ({ children, primary = false, ...restProps }) => (
  <button
    className={`button ${primary ? "primary" : "secondary"}`}
    {...restProps}
  >
    {children}
  </button>
);
