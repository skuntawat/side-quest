/* 
    Decimal star rating with lucide icon
    by: mix-blend-color
*/

import { LucideIcon, Star, Snail, Cat, Bird, Rabbit } from "lucide-react";

type DecimalStarRatingProps = React.HTMLAttributes<HTMLDivElement> & {
    value: number;
    max: number;
    icon?: LucideIcon
}

const DecimalStarRating = ({
    value,
    max,
    icon,
}: DecimalStarRatingProps) => {

    const percentage = Math.round((value / max) * 100);
    const Icon = icon ?? Star

    return (
        <div className="inline-flex items-center relative">
            {Array.from(Array(max).keys()).map((_, i) => (
                <Icon key={i} className="stroke-0 size-10 fill-yellow-500" />
            ))}
            <div
                className="bg-slate-500 absolute top-0 right-0 bottom-0 z-10 mix-blend-color"
                style={{ width: `${100 - percentage}%` }}
            />
        </div>
    );
}

const data = [
    { value: 3.5, max: 5 },
    { value: 2.4, max: 5, icon: Bird },
    { value: 4.8, max: 5, icon: Snail },
    { value: 7.3, max: 10, icon: Cat },
    { value: 8.7, max: 10, icon: Rabbit },
]

export default function page() {
    return (
        <div className="flex flex-col gap-6">
            {data.map((item, key) => (
                <div key={key} className="flex items-center gap-2">
                    <div className="font-medium">{item.value}</div>
                    <DecimalStarRating value={item.value} max={item.max} icon={item?.icon} />
                </div>
            ))}
        </div>
    )
}