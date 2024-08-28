import React from 'react';

/**
 * Header component
 * 
 * Renders the top navigation bar with the Abstract logo, 
 * Help Center text, and a "Submit a request" button.
 */
const Header = () => {
    return (
        // Container div with full width, fixed height, and black background
        <div className='w-full h-20 bg-black flex items-center md:px-20 lg:px-32 p-3 md:gap-20 text-center justify-between'>
            {/*
                Left section with logo, title, and separator
            */}
            <div className='flex items-center gap-2'>
                {/*
                    Abstract logo as an SVG
                */}
                <svg className='h-5 md:h-10 w-5 md:w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                    <g className="abstract-logo-mark-footer" fill="#fff">
                        <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                        <circle cx="21.24" cy="29.58" r="4.96"></circle>
                    </g>
                </svg>
                {/*
                    Company name
                */}
                <h1 className='font-semibold 425px:text-xl lg:text-2xl z-0'>Abstract</h1>
                {/*
                    Separator
                */}
                <p className='text-4xl leading-none pb-2 font-extralight'>|</p>
                
                <p className='425px:text-xl lg:text-2xl leading-none font-medium'>Help Center</p>
            </div>
            {/*
                Right section with "Submit a request" button
            */}
            <button className='border border-white rounded-lg bg-zinc-900 p-2 px-4 text-[2vw] md:text-xl lg:text-2xl flex items-center text-center'>
                Submit a request
            </button>
        </div>
    )
}

export default Header;