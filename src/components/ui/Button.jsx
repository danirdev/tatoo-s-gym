import React from 'react';

const Button = ({children, variant = 'primary', className = '', onClick, href}) =>
{
    const baseStyle = "font-bold uppercase tracking-wider py-3 px-8 rounded transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer";
    const variants = {
        primary: "bg-[#FFD700] text-black hover:bg-[#E5C100] shadow-lg shadow-yellow-500/20",
        outline: "border-2 border-white text-white hover:bg-white hover:text-black",
        ghost: "text-gray-300 hover:text-[#FFD700]"
    };

    if(href)
    {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyle} ${variants[variant]} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
