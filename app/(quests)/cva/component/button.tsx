import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition ring-transparent hover:ring-2 hover:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "border-0",
				outline: "!bg-transparent border-2",
			},
			intent: {
				default: "bg-foreground text-background hover:bg-foreground/80 ring-foreground border-foreground",
				success: "bg-green-500 text-background hover:bg-green-500/80 ring-green-500 border-green-500",
				info: "bg-blue-500 text-background hover:bg-blue-500/80 ring-blue-500 border-blue-500",
				warning: "bg-yellow-500 text-foreground hover:bg-yellow-500/80 ring-yellow-500 border-yellow-500",
				danger: "bg-red-500 text-foreground hover:bg-red-500/80 ring-red-500 border-red-500",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 px-3 rounded-md",
				lg: "h-11 px-8 rounded-md",
				icon: "h-10 w-10",
			},
			ring: {
				true: 'hover:ring-2',
				false: 'hover:ring-0',
			}
		},
		compoundVariants: [
			{
				variant: "outline",
				intent: "default",
				className: "text-foreground",
			},
			{
				variant: "outline",
				intent: "success",
				className: "text-green-500",
			},
			{
				variant: "outline",
				intent: "info",
				className: "text-blue-500",
			},
			{
				variant: "outline",
				intent: "warning",
				className: "text-yellow-500",
			},
			{
				variant: "outline",
				intent: "danger",
				className: "text-red-500",
			},
		],
		defaultVariants: {
			variant: "default",
			intent: "default",
			size: "default",
			ring: true,
		},
	}
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = ({ className, variant, intent, size, ...props }: ButtonProps) => (
	<button
		className={cn(buttonVariants({ variant, intent, size }), className)}
		{...props}
	/>
)

export { Button, buttonVariants }