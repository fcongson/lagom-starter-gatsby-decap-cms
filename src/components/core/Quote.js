import React from "react";
import "./Quote.css";

export const Quote = ({ children, ...restProps }) => (
  <blockquote className="lagom-quote" {...restProps}>
    {children}
  </blockquote>
);
