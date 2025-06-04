import React from "react";
import classNames from "classnames";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: "normal" | "medium" | "bold";
  color?: "black" | "gray" | "blue" | "red" | "white";
  align?: "left" | "center" | "right";
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  size = "base",
  weight = "normal",
  color = "black",
  align = "left",
}) => {
  const classes = classNames(
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg": size === "lg",
      "text-xl": size === "xl",

      "font-normal": weight === "normal",
      "font-medium": weight === "medium",
      "font-bold": weight === "bold",

      "text-black": color === "black",
      "text-gray-500": color === "gray",
      "text-white": color === "white",

      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right",
    },
    className
  );

  return <span className={classes}>{children}</span>;
};

export default Text;
