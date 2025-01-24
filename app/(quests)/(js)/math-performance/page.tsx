"use client"

import React, { useState } from 'react'
import numbers from './data/numbers.json'

export default function Page() {

    const [performance, setPerformance] = useState({
        useES6Spread: {
            result: '',
            time: ''
        },
        useReduce: {
            result: '',
            time: ''
        },
        useApply: {
            result: '',
            time: ''
        },
        useLoop: {
            result: '',
            time: ''
        }
    })

    const withPerformance = (callback: () => void) => {
        const start = window.performance.now();
        const result = callback()
        const end = window.performance.now();

        setPerformance({
            ...performance,
            [callback.name]: {
                result,
                time: (end - start)
            }
        })
    }

    const useES6Spread = () => {
        return Math.max(...numbers)
    }

    const useReduce = () => {
        return numbers.reduce((a, b) => Math.max(a, b))
    }

    const useApply = () => {
        // eslint-disable-next-line prefer-spread
        return Math.max.apply(Math, numbers);
    }

    const useLoop = () => {
        let max = numbers[0]
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[index] > max) {
                max = numbers[index]
            }
        }
        return max
    }


    return (
        <div className='grid grid-cols-3 items-center gap-4'>

            <div className='col-span-3 font-semibold'>Math.max Performance Test (100,000 numbers in array)</div>

            <div className="font-semibold">Function</div>
            <div className="font-semibold">Result</div>
            <div className="font-semibold">Time(ms)</div>

            <button onClick={() => withPerformance(useES6Spread)} className='p-4 bg-slate-400 rounded-md'>useES6Spread</button>
            <div>{performance?.useES6Spread?.result}</div>
            <div>{performance?.useES6Spread?.time}</div>

            <button onClick={() => withPerformance(useReduce)} className='p-4 bg-slate-400 rounded-md'>useReduce</button>
            <div>{performance?.useReduce?.result}</div>
            <div>{performance?.useReduce?.time}</div>

            <button onClick={() => withPerformance(useApply)} className='p-4 bg-slate-400 rounded-md'>useApply</button>
            <div>{performance?.useApply?.result}</div>
            <div>{performance?.useApply?.time}</div>

            <button onClick={() => withPerformance(useLoop)} className='p-4 bg-slate-400 rounded-md'>useLoop</button>
            <div>{performance?.useLoop?.result}</div>
            <div>{performance?.useLoop?.time}</div>

        </div>
    )
}
