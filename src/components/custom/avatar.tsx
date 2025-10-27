import * as React from "react"
import {
	Avatar as AvatarBase,
	AvatarImage as AvatarImageBase,
	AvatarFallback as AvatarFallbackBase,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.ComponentProps<typeof AvatarBase> {}

export function Avatar({ className, ...props }: AvatarProps) {
	return (
		<AvatarBase
			className={cn(
				"border border-border ring-0 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40",
				className
			)}
			{...props}
		/>
	)
}

export interface AvatarImageProps
	extends React.ComponentProps<typeof AvatarImageBase> {}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
	return (
		<AvatarImageBase className={cn("object-cover", className)} {...props} />
	)
}

export interface AvatarFallbackProps
	extends React.ComponentProps<typeof AvatarFallbackBase> {}

export function AvatarFallback({
	className,
	...props
}: AvatarFallbackProps) {
	return (
		<AvatarFallbackBase
			className={cn("bg-muted text-muted-foreground", className)}
			{...props}
		/>
	)
}