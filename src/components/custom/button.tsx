import * as React from "react"
import { Button as ButtonShadcn  } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface buttonProps extends React.ComponentProps<typeof ButtonShadcn> {
  loading?: boolean
}

export function Button({ 
  children, 
  loading, 
  className,
  disabled,
  ...props 
}: buttonProps) {
  return (
    <ButtonShadcn
      className={cn(
        "bg-primary hover:bg-primary-hover text-white font-medium",
        "focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="inline-block animate-spin">⏳</span>
          <span>Carregando...</span>
        </>
      ) : (
        children
      )}
    </ButtonShadcn>
  )
}