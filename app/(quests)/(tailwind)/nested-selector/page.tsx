import { cn } from "@/utils/cn"

type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = ({ className, children, ...props }: CardProps) => (
    <div className={cn("p-4 min-w-20 min-h-20 border rounded-md bg-[#1c1b1b] text-background", className)} {...props}>{children}</div>
)

export default function page() {
    return (
        <div className="grid grid-cols-2 gap-6 w-full p-20 bg-[#1c1b1b] rounded-md">
            <div className={cn("flex items-center gap-4",
                "first-of-type:[&>*]:bg-teal-700",
                "last-of-type:[&>*]:bg-orange-600",
            )}>
                {[1, 2, 3, 4, 5].map(item => (
                    <Card key={item}>{item}</Card>
                ))}
            </div>
            <div className={cn("flex items-center gap-4",
                "odd:[&>*]:bg-teal-700",
                "even:[&>*]:bg-orange-600",
            )}>
                {[1, 2, 3, 4, 5].map(item => (
                    <Card key={item}>{item}</Card>
                ))}
            </div>
            <div className={cn("flex items-center gap-4",
                "[&>*]:bg-teal-700"
            )}>
                <Card className="flex gap-4">
                    {['A', 'B'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
                <Card className="flex gap-4">
                    {['C', 'D'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
            </div>
            <div className={cn("flex items-center gap-4",
                "[&_*]:bg-teal-700"
            )}>
                <Card className="flex gap-4">
                    {['A', 'B'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
                <Card className="flex gap-4">
                    {['C', 'D'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
            </div>
            <div className={cn("flex items-center gap-4",
                "first-of-type:[&>*]:bg-teal-700",
                "last-of-type:[&>*]:bg-orange-600",
            )}>
                <Card className="flex gap-4">
                    {['A', 'B'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
                <Card className="flex gap-4">
                    {['C', 'D'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
            </div>
            <div className={cn("flex items-center gap-4",
                "first-of-type:[&>*>*]:bg-teal-700",
                "last-of-type:[&>*>*]:bg-orange-600",
            )}>
                <Card className="flex gap-4">
                    {['A', 'B'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
                <Card className="flex gap-4">
                    {['C', 'D'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
            </div>
            <div className={cn("flex items-center gap-4",
                "[&>*_*]:bg-orange-700",
            )}>
                <Card className="flex gap-4">
                    {['A', 'B'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
                <Card className="flex gap-4">
                    {['C', 'D'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
            </div>
            <div className={cn("flex items-center gap-4",
                "last-of-type:[&>*_*]:bg-orange-700",
            )}>
                <Card className="flex gap-4">
                    {['A', 'B'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
                <Card className="flex gap-4">
                    {['C', 'D'].map(item => (
                        <Card key={item}>{item}</Card>
                    ))}
                </Card>
            </div>
        </div>
    )
}
