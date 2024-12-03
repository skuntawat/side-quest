import { cn } from "@/utils/cn"

const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-4 w-20 h-20 shadow-sm shadow-white rounded-md bg-sky-700 text-background", className)} {...props}>{children}</div>
)

export default function page() {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold">Flex Row</h3>
            <div className="grid grid-cols-2 gap-6 w-full">
                <div className="space-y-4 rounded-md p-10 border-2 bg-[#272822]">
                    <div className="flex">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="flex justify-center">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="flex justify-between">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                </div>
                <div className="space-y-4 rounded-md p-10 border-2 bg-[#272822]">
                    <div className="flex gap-4">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="flex gap-6">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="flex gap-8">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                </div>
                <div className="space-y-4 rounded-md p-10 border-2 bg-[#272822]">
                    <div className="flex">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="flex items-center">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="flex items-end">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                </div>
                <div className="space-y-4 rounded-md p-10 border-2 bg-[#272822]">
                    <div className="flex justify-end items-center">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="flex justify-center items-center">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="flex justify-between items-center">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                </div>
            </div>
            <h3 className="text-lg font-semibold">Flex Column</h3>
            <div className="grid grid-cols-2 gap-6 w-full">
                <div className="grid grid-cols-3 gap-6 p-10 rounded-md border-2 bg-[#272822]">
                    <div className="h-[300px] flex flex-col">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="h-[300px] flex flex-col justify-center">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="h-[300px] flex flex-col justify-between">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 p-10 rounded-md border-2 bg-[#272822]">
                    <div className="h-[300px] flex flex-col gap-4">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="h-[300px] flex flex-col gap-6">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="h-[300px] flex flex-col gap-8">
                        <Card>A</Card>
                        <Card>B</Card>
                        <Card>C</Card>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 p-10 rounded-md border-2 bg-[#272822]">
                    <div className="h-[300px] flex flex-col">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="h-[300px] flex flex-col items-center">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="h-[300px] flex flex-col items-end">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 p-10 rounded-md border-2 bg-[#272822]">
                    <div className="h-[300px] flex flex-col justify-end items-center">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="h-[300px] flex flex-col justify-center items-center">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                    <div className="h-[300px] flex flex-col justify-between items-center">
                        <Card>A</Card>
                        <Card className="h-14 w-14 bg-orange-500">B</Card>
                        <Card>C</Card>
                    </div>
                </div>
            </div>
            <h3 className="text-lg font-semibold">Flex Grow / Flex Shrink</h3>
            <div className="space-y-4 rounded-md p-10 border-2 bg-[#272822]">
                <div className="flex">
                    <Card className="bg-orange-500 flex-1">A</Card>
                    <Card>B</Card>
                    <Card>C</Card>
                </div>
                <div className="flex">
                    <Card>A</Card>
                    <Card className="bg-orange-500 flex-1">B</Card>
                    <Card>C</Card>
                </div>
                <div className="flex">
                    <Card>A</Card>
                    <Card>B</Card>
                    <Card className="bg-orange-500 flex-1">C</Card>
                </div>
            </div>
            <div className="grid grid-cols-3 h-[600px] rounded-md p-10 border-2 bg-[#272822]">
                <div className="flex flex-col items-center">
                    <Card className="bg-orange-500 flex-1">A</Card>
                    <Card>B</Card>
                    <Card>C</Card>
                </div>
                <div className="flex flex-col items-center">
                    <Card>A</Card>
                    <Card className="bg-orange-500 flex-1">B</Card>
                    <Card>C</Card>
                </div>
                <div className="flex flex-col items-center">
                    <Card>A</Card>
                    <Card>B</Card>
                    <Card className="bg-orange-500 flex-1">C</Card>
                </div>
            </div>
        </div>
    )
}
