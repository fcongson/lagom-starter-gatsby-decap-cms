import React from "react";
import "./Container.css";

export const Container = ({
  children,
  className,
  marginNone,
  ...restProps
}) => {
  return (
    <div
      className={`lagom-container ${!!className ? className : ""} ${
        !!marginNone ? "lagom-container--margin-none" : ""
      }`}
      {...restProps}
    >
      {children}
    </div>
  );
};
