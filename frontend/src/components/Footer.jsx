import React from 'react';

const Footer = () => {
    const links = [
        {
            topic: 'Abstract',
            links: [
                { text: 'Branches', href: '#' },
            ],
        },
        {
            topic: 'Resources',
            links: [
                { text: 'Blog', href: '#' },
                { text: 'Help Center', href: '/' },
                { text: 'Release Notes', href: '#' },
                { text: 'Status', href: '#' },
            ],
        },
        {
            topic: 'Community',
            links: [
                { text: 'Twitter', href: '#' },
                { text: 'LinkedIn', href: '#' },
                { text: 'Facebook', href: '#' },
                { text: 'Dribbble', href: '#' },
                { text: 'Podcast', href: '#' },
            ],
        },

        {
            topic: 'Company',
            links: [
                { text: 'About Us', href: '#' },
                { text: 'Careers', href: '#' },
                { text: 'Legal', href: '#' },
            ],
            section: {
                name: 'Contact us',
                link: 'info@abstract.com'
            }
        },
    ];

    return (
        <footer className="bg-black text-white w-full md:pl-20">
            <div className="container flex flex-col md:flex-row mx-auto p-4 pt-6 pb-12 w-full gap-10 text-center md:text-start items-center justify-center">
                <div className="flex flex-wrap justify-end mb-4 w-[70%]">
                    {links.map((linkGroup, index) => (
                        <div key={index} className="w-full lg:w-1/4 xl:w-1/4 md:w-1/2 sm:w-full p-4">
                            <h5 className=" text-xl font-bold mb-2">{linkGroup.topic}</h5>
                            <ul>
                                {linkGroup.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-">
                                        <a href={link.href} className="text-white hover:text-gray-400">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {linkGroup.section &&
                                <div className='mt-5'>
                                    <p className='text-lg font-bold mb-2'>{linkGroup.section.name}</p>
                                    <a>{linkGroup.section.link}</a>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <div className='flex flex-col gap-3 justify-end items-center md:items-start'>
                    <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
                        <g fill="#fff">
                            <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                            <circle cx="21.24" cy="29.58" r="4.96"></circle>
                        </g>
                    </svg>
                    <p className='text-xl'>
                        © Copyright 2024<br></br>

                        Abstract Studio Design, Inc.<br></br>

                        All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;