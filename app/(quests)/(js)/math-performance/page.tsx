"use client"

import React, { useState } from 'react'

// random array of numbers 100,000 with number between 1 - 1000 
const numbers = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));

export default function Page() {

    const [state, setState] = useState({
        'useES6Spread': {
            result: '',
            time: ''
        },
        'useReduce': {
            result: '',
            time: ''
        },
        'useApply': {
            result: '',
            time: ''
        },
        'useLoop': {
            result: '',
            time: ''
        }
    })

    const withPerformance = (callback: () => number, callbackName: string) => {
        const start = performance.now();
        const result = callback()
        const end = performance.now();

        setState({
            ...state,
            [callbackName]: { // cannot use callback.name on production
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

            <button onClick={() => withPerformance(useES6Spread, 'useES6Spread')} className='p-4 bg-[#00c7b0] rounded-md'>useES6Spread</button>
            <div>{state?.useES6Spread?.result}</div>
            <div>{state?.useES6Spread?.time}</div>

            <button onClick={() => withPerformance(useReduce, 'useReduce')} className='p-4 bg-[#ff6038] rounded-md'>useReduce</button>
            <div>{state?.useReduce?.result}</div>
            <div>{state?.useReduce?.time}</div>

            <button onClick={() => withPerformance(useApply, 'useApply')} className='p-4 bg-[#ffa257] rounded-md'>useApply</button>
            <div>{state?.useApply?.result}</div>
            <div>{state?.useApply?.time}</div>

            <button onClick={() => withPerformance(useLoop, 'useLoop')} className='p-4 bg-[#ffce52] rounded-md'>useLoop</button>
            <div>{state?.useLoop?.result}</div>
            <div>{state?.useLoop?.time}</div>

        </div>
    )
}
