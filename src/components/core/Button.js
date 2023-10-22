import React from "react";
import "./Button.css";

export const Button = ({ children, primary = false, ...restProps }) => (
  <button
    className={`lagom-button ${primary ? "lagom-button--primary" : "lagom-button--secondary"}`}
    {...restProps}
  >
    {children}
  </button>
);
