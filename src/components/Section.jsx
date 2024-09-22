import React from 'react'
import SectionSvg from '../assets/svg/SectionSvg'

export default function Section({
    className,
    id,
    crosses = "lg:py-32 xl:py-40",
    crossesOffset,
    customPadding = "py-10 lg:py-16 xl:py-20",
    children
}) {
    return (
        <div id={id} className={`relative ${customPadding} ${crosses} ${className}`}>
            {children}
            <div className='hidden absolute top-0 left-5 w-0.5 h-full bg-stroke-1 pointer-events-none 
            md:block lg:left-7 xl:left-10' />

            <div className='hidden absolute top-0 right-5 w-0.5 h-full bg-stroke-1 pointer-events-none 
            md:block lg:right-7 xl:right-10' />

            {crosses && (
                <>
                    <div className={`hidden absolute top-0 left-7 right-7 h-0.5 bg-stroke-1 
                    ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 xl:right-10`} />
                    <SectionSvg crossesOffset={crossesOffset} /> 
                </>
            )}
        </div>
    )
}
