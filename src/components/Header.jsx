import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {
            name: 'Random Joke',
            slug: '/',
        },
        {
            name: 'Joke List',
            slug: '/joke-list'
        }
    ]
    return (
        <header className="py-3 shadow-2xs bg-slate-600 rounded-lg font-semibold">
            <nav className="flex">
                <ul className="flex m-auto">
                    {
                        navItems.map((item) =>
                        (<li key={item.name}
                        >
                            <button
                                className={`inline-block px-6 py-2 duration-200 rounded-full ml-2 mr-2 
                            ${location.pathname === item.slug ? "bg-slate-300 text-gray/80" : "hover:bg-blue-100 hover:text-gray-500 text-white cursor-pointer"}`}
                                onClick={() => navigate(item.slug)}
                            >{item.name}</button>
                        </li>)
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;