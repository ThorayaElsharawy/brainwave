import React from 'react'
import brackets from '../assets/svg/Brackets'

export default function Tagline({ className = '', children }) {
    return (
        <div className={`${className} flex items-center `}>
            {brackets("left")}
            <div className='mx-3 text-n-3'>
                {children}
            </div>
            {brackets("right")}
        </div>
    )
}
