import * as React from "react"
import { Button as ButtonShadcn  } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface buttonProps extends React.ComponentProps<typeof ButtonShadcn> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export function Button({
  children,
  className,
  variant = "default",
  ...props
}: buttonProps) {
  return (
    <ButtonShadcn
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
    </ButtonShadcn>
  );
}