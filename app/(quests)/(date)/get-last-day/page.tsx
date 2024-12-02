import React from 'react'

function getLastDaysInMonth(_month?: number, _year?: number) {
    const month = _month ?? new Date().getMonth() + 1
    const year = _year ?? new Date().getFullYear()

    return new Date(year, month, 0).getDate()
}

function getFirstDaysInMonth() {
    return 1 
}

export default function page() {
    
    return (
        <div className="flex flex-col gap-y-4">
            <div className="">{getLastDaysInMonth(2024, 2)}</div>
            <div className="">{getFirstDaysInMonth()}</div>
        </div>
    )
}
