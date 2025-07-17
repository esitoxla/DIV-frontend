import { button, label } from 'framer-motion/client'
import React from 'react'

const tabItems = [
    {key: "month", label: "Monthly"},
    {key: "Year", label: "Yearly Save 20%"}
]

export default function PricingTab() {
  return (
    <div className='border px-4 py-2  w-[20%] mx-auto flex justify-evenly rounded cursor-pointer font-medium'>
        {tabItems.map((tab) => (
            <button className=''>
                {tab.label}
            </button>
        ))}
    </div>
  )
}
