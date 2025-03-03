"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonTheme } from "@/lib/theme"; // Import the theme

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: keyof typeof buttonTheme.variant;
  color?: keyof (typeof buttonTheme.variant)[keyof typeof buttonTheme.variant] | string;
  rounded?: keyof typeof buttonTheme.rounded;
};

const Button = ({
  text,
  icon,
  iconPosition = "left",
  variant = "contained",
  color = "primary",
  rounded = "md",
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = buttonTheme.base;
  const roundedClass = buttonTheme.rounded[rounded];
  const colorClass = buttonTheme.variant[variant]?.[color as keyof typeof buttonTheme.variant.contained] || color;

  return (
    <button className={cn(baseStyles, colorClass, roundedClass, className)} {...props}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
