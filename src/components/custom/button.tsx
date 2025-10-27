import * as React from "react"
import {
  Button as ButtonBase,
  buttonVariants as buttonVariantsBase,
} from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type ButtonVariant = VariantProps<typeof buttonVariantsBase>["variant"];

interface ButtonProps
  extends Omit<React.ComponentProps<typeof ButtonBase>, "variant"> {
  variant?: ButtonVariant;
}

export function Button({
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      variant={variant}
      className={cn(
        variant === "default" &&
          "bg-primary hover:bg-primary-hover text-white font-medium",
        variant === "secondary" &&
          "bg-secondary hover:bg-secondary/90 text-white font-medium",
        "focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40",
        className
      )}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}