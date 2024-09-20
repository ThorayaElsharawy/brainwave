import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

export default function Button({ children, className = '', href, onClick, px = 'px-7', white }) {
    const classes = `
    button relative inline-flex items-center justify-center h-11 transition-colors 
    hover:text-color-1 ${px} ${className} ${white ? 'text-n-8' : 'text-n-1'}`

    const spanClasses = 'relative z-10'
    const renderButton = () => {
        return (
            <button className={classes}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </button>
        )
    }

    const renderLink = () => {
        return (
            <a href={href} className={classes}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </a>
        )
    }

    return href ? renderLink() : renderButton()
}
