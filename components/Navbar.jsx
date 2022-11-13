import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useUser } from "../firebase/useUser";

export function Navbar() {
    const { user, logout } = useUser();
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div className='left-0 top-0 w-full ease-in duration-300 bg-accent'>
            <div className='m-auto flex justify-between items-center p-4 text-highlight'>
                <Link href='/'>
                    <h1 className='font-bold text-highlight text-4xl hover:text-primary duration-300 ml-2'>
                        CONNEQT
                    </h1>
                </Link>
                <ul className='hidden sm:flex'>
                    <li className="mx-6 text-2xl font-bold my-auto hover:text-primary duration-300">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="mx-6 text-2xl font-bold my-auto hover:text-primary duration-300">
                        <Link href="/Contact">Contact</Link>
                    </li>
                    <li className="mr-4 ml-6 text-2xl font-bold my-auto hover:text-primary duration-300">
                        {user ? <div onClick={logout}>Logout</div> : <Link href='/contact'>Login</Link>}
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10 mr-4'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }
                >
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-primary duration-300'>
                            <Link href='/#gallery'>About</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-primary duration-300'>
                            <Link href='/work'>Contact</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-primary duration-300'>
                            {user ? <div onClick={logout}>Logout</div> : <Link href='/contact'>Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
