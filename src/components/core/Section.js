import React from "react";
import "./Section.css";

export const Section = ({
  children,
  className,
  backgroundColor,
  ...restProps
}) => {
  return (
    <section
      className={`lagom-section ${!!className ? className : ""} ${
        !!backgroundColor ? "lagom-section--background-color" : ""
      }`}
      style={!!backgroundColor ? { backgroundColor: backgroundColor } : null}
      {...restProps}
    >
      {children}
    </section>
  );
};
