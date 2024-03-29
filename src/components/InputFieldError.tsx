import React, {HTMLProps} from "react";
import Style from "./InputFieldError.module.css";

export function InputFieldError(props: InputFieldErrorProps) {
  const {children, className, ...component_method_props} = props;
  const {onMouseDown, onClick, onChange, ...component_props} = component_method_props;
  if (!children) return null;
  
  const classes = [Style.Component, "input-field-error"];
  if (className) classes.push(className);
  
  return (
    <div {...component_props} className={classes.join(" ")}>
      {children}
    </div>
  );
}

export interface InputFieldErrorProps extends HTMLProps<HTMLDivElement> {
  children?: string;
}
