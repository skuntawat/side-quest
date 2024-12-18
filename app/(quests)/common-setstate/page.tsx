"use client"

import { useState, useEffect } from 'react'

const ITEM_PRICE = 150

export default function Page() {

    const [count, setCount] = useState(0)

    const [form, setForm] = useState({
        first_name: "First",
        last_name: "Last",
    })

    const [quantity, setQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(quantity * ITEM_PRICE)
    }, [quantity])

    const total = quantity * ITEM_PRICE

    const handleClick = () => {
        //setCount(count + 1)
        //setCount(count + 1)
        //setCount(count + 1)

        //setCount(prev => prev + 1)
        //setCount(prev => prev + 1)
        //setCount(prev => prev + 1)

        setCount(prev => prev + 1)
    }

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setForm({
        //     'first_name': e.target.value
        // })

        // setForm({
        //     ...form,
        //     'first_name': e.target.value
        // })

        // setForm(prev => {
        //     return {
        //         ...prev,
        //         [e.target.name]: e.target.value
        //     }
        // })

        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleQuantityClick = () => {
        setQuantity(prev => prev + 1)
    }

    return (
        <div className='flex flex-col gap-y-10'>
            <button className='p-2 border rounded-md' onClick={handleClick} >{`Count: ${count}`}</button>

            <form className='flex flex-col gap-y-4'>
                <div className="flex gap-4">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        name='first_name'
                        value={form?.first_name}
                        onChange={handleFieldChange}
                        className='border px-1.5 rounded-sm'
                    />
                </div>
                <div className="flex gap-4">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        id="last_name"
                        name='last_name'
                        value={form?.last_name}
                        onChange={handleFieldChange}
                        className='border px-1.5 rounded-sm'
                    />
                </div>
                <code>{JSON.stringify(form)}</code>
            </form >

            <div className="flex items-center gap-4">
                <button className='p-2 border rounded-md' onClick={handleQuantityClick} >{`Quantity: ${quantity}`}</button>
                <div className="font-medium">{`set totalPrice: ${totalPrice}`}</div>
                <div className="font-medium">{`const total: ${total}`}</div>
            </div>
        </div >
    )
}
