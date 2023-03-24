import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/home' },
        { id: 3, name: 'Orders', path: '/home' },
        { id: 4, name: 'Contact', path: '/home' },
        { id: 5, name: 'About', path: '/home' },
    ]
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="h-6 w-6  md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <ul className={`md:flex justify-center md:static absolute duration-500 ease-intext-4xl ${open ? 'top-4' : 'top-[-120px]'}`}>
                {routes.map(route => <Link key={route.id} route={route} ></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;