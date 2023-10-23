import React from "react";
import { Button } from "./Button";
import "./LinkButton.css";

export const LinkButton = ({
  children,
  to,
  Component,
  primary = false,
  ...restProps
}) =>
  !!Component ? (
    <Component className={`lagom-link-button`} to={to}>
      <Button {...restProps}>{children}</Button>
    </Component>
  ) : (
    <a className={`lagom-link-button`} href={to}>
      <Button {...restProps}>{children}</Button>
    </a>
  );
