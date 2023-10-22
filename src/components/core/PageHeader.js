import React from "react";
import "./PageHeader.css";

export const PageHeader = ({ children, color, ...restProps }) => {
  return (
    <h1 className="lagom-page-header" style={{ color }} {...restProps}>
      {children}
    </h1>
  );
};