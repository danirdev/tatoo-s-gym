import React from 'react';

const SectionTitle = ({title, subtitle, align = 'center'}) => (
    <div className={`mb-16 ${align === 'left' ? 'text-left' : 'text-center'}`}>
        <h3 className="text-[#FFD700] font-bold tracking-widest uppercase mb-3 text-sm md:text-base">
            {subtitle}
        </h3>
        <h2 className="font-black text-4xl md:text-5xl uppercase text-white leading-tight">
            {title}
        </h2>
        <div className={`h-1 w-24 bg-[#FFD700] mt-6 ${align === 'left' ? '' : 'mx-auto'}`}></div>
    </div>
);

export default SectionTitle;
