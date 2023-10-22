import React from "react";
import "./SectionHeader.css";

export const SectionHeader = ({ children, color, ...restProps }) => {
  return (
    <h2 className="lagom-section-header" style={{ color }} {...restProps}>
      {children}
    </h2>
  );
};
