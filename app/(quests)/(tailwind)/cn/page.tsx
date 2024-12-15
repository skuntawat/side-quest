import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function page() {

    const isYellow = true
    const isTextBlack = true

    return (
        <div className='flex flex-col gap-y-6'>
            <button className="p-3 rounded-md text-white bg-blue-500">Blue</button>
            <button className="p-3 rounded-md text-white bg-blue-500 bg-yellow-500">Yellow</button>
            <button className={twMerge("p-3 rounded-md text-white bg-blue-500 bg-yellow-500")}>twMerge</button>
            <button className={clsx(
                "p-3 rounded-md",
                "text-white",
                "bg-blue-500",
                isYellow && "bg-yellow-500",
                {
                    'text-black': isTextBlack
                }
            )}>clsx</button>
            <button className={cn(
                "p-3 rounded-md text-white bg-blue-500",
                isYellow && "bg-yellow-500",
                {
                    'text-black': isTextBlack
                }
            )}>CN</button>
        </div>
    )
}