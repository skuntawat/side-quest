import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'

const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("shadow-md rounded-md", className)} {...props}>{children}</div>
)
/* 
camping-area.jpg
 */
export default function page() {
    return (
        <div className="space-y-10 p-20">
            {/* aspect-square 1:1 */}
            <h2 className='text-lg font-semibold'>aspect-square 1:1</h2>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <Card>
                        <Image
                            alt='travel-mountains'
                            src="/images/travel-mountains.jpg"
                            width={800}
                            height={800}
                            className='aspect-square'
                        />
                    </Card>
                </div>
                <div>
                    <Card className='relative aspect-square'>
                        <Image
                            alt='travel-mountains'
                            src="/images/travel-mountains.jpg"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </Card>
                </div>
            </div>

            {/* aspect-[4/3] 4:3 */}
            <h2 className='text-lg font-semibold'>aspect-[4/3] 4:3</h2>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <Card>
                        <Image
                            alt='travel-mountains'
                            src="/images/camping-area.jpg"
                            width={800}
                            height={800}
                            className='aspect-[4/3]'
                        />
                    </Card>
                </div>
                <div>
                    <Card className='relative aspect-[4/3]'>
                        <Image
                            alt='travel-mountains'
                            src="/images/camping-area.jpg"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </Card>
                </div>
            </div>

            {/* aspect-video 16:9 */}
            <h2 className='text-lg font-semibold'>aspect-video 16:9</h2>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <Card>
                        <Image
                            alt='travel-mountains'
                            src="/images/travel-mountains.jpg"
                            width={800}
                            height={800}
                            className='aspect-video'
                        />
                    </Card>
                </div>
                <div>
                    <Card className='relative aspect-video'>
                        <Image
                            alt='travel-mountains'
                            src="/images/travel-mountains.jpg"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </Card>
                </div>
            </div>

            {/* object cover|contain */}
            <h2 className='text-lg font-semibold'>object-fit: cover | contain</h2>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <Card className='relative aspect-video'>
                        <Image
                            alt='travel-mountains'
                            src="/images/travel-mountains.jpg"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </Card>
                    <div className="text-lg font-medium text-center">object-cover</div>
                </div>
                <div>
                    <Card className='relative aspect-video'>
                        <Image
                            alt='travel-mountains'
                            src="/images/travel-mountains.jpg"
                            fill
                            sizes="100vw"
                            className='object-contain'
                        />
                    </Card>
                    <div className="text-lg font-medium text-center">object-contain</div>
                </div>
            </div>
            

        </div>
    )
}
