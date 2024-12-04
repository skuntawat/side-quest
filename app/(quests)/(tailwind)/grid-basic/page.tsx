
import { cn } from "@/utils/cn"

const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-4 shadow-sm shadow-white rounded-md bg-sky-700 text-background", className)} {...props}>{children}</div>
)

export default function page() {
    return (
        <div className="space-y-8 w-full max-w-xl bg-[#272822] p-10 rounded-md">
            <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4,5,6,7,8].map(item => (
                    <Card key={item}>{item}</Card>
                ))}
            </div>

            <div className="grid grid-cols-5 gap-4">
                <Card>A</Card>
                <Card>A</Card>
                <Card className="bg-orange-500 col-span-3">B</Card>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <Card className="h-[100px]">A</Card>
                <Card className="bg-orange-500 col-span-2">B</Card>
            </div>

            {/* Responsive */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                    <Card key={item}>{item}</Card>
                ))}
            </div>

            {/* Responsive & Order */}
            <div className="grid sm:grid-cols-3 gap-4">
                <Card className="h-[100px] order-2 sm:order-1">Sidebar</Card>
                <Card className="bg-orange-500 sm:col-span-2 order-1 sm:order-2">Content</Card>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
                <Card className="bg-orange-500 sm:col-span-2">Content</Card>
                <Card className="h-[100px] sm:-order-1">Sidebar</Card>
            </div>
        </div>
    )
}
