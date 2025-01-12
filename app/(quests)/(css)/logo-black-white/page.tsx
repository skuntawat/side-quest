import React from 'react'
import Image from 'next/image'

export default function Page() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="border border-black p-4 rounded-md">
                <Image
                    alt='kunkode-logo'
                    src="/images/abstract-logo.png"
                    width={300}
                    height={300}
                />
            </div>
            <div className="border border-black p-4 rounded-md">
                <Image
                    alt='kunkode-logo'
                    src="/images/abstract-logo.png"
                    width={300}
                    height={300}
                    className="brightness-0"
                />
            </div>
            <div className="bg-[#272822] p-4 rounded-md">
                <Image
                    alt='kunkode-logo'
                    src="/images/abstract-logo.png"
                    width={300}
                    height={300}
                    className="brightness-0 invert"
                />
            </div>
        </div>
    )
}
