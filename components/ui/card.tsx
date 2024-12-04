import { cn } from "@/utils/cn"

type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = ({ className, children, ...props }: CardProps) => (
    <div className={cn("p-4 w-20 h-20 shadow-sm shadow-white rounded-md bg-sky-700 text-background", className)} {...props}>{children}</div>
)

export { Card }