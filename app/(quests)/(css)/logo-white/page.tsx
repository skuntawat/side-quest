import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'

export default function Page() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#272822] p-4 rounded-md">
                <Image
                    alt='kunkode-logo'
                    src="/images/abstract-logo.png"
                    width={300}
                    height={300}
                />
            </div>
            <div className="bg-[#272822] p-4 rounded-md">
                <Image
                    alt='kunkode-logo'
                    src="/images/abstract-logo.png"
                    width={300}
                    height={300}
                    className={cn(
                        "brightness-0 invert"
                    )}
                />
            </div>
            <div className="bg-[#272822] p-4 rounded-md">
                <Image
                    alt='kunkode-logo'
                    src="/images/abstract-logo.png"
                    width={300}
                    height={300}
                />
            </div>
            <div className="bg-[#272822] p-4 rounded-md">
                <Image
                    alt='kunkode-logo'
                    src="/images/abstract-logo.png"
                    width={300}
                    height={300}
                    style={{
                        filter: "brightness(0) invert(1)"
                    }}
                />
            </div>
        </div>
    )
}
