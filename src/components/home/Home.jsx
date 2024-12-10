import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Ensure this imports the styles with your CSS classes

export default function Home() {
    const asideRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const elements = [asideRef.current, headerRef.current];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-left-visible');
                } else {
                    entry.target.classList.remove('slide-left-visible');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => {
            elements.forEach(el => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div className="mx-auto w-full max-w-7xl mt-2">
            <aside ref={asideRef} className="slide-left relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-extrabold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex items-center px-6 py-3 font-medium bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                            to="/"
                        >
                            <svg
                                fill="currentColor"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>
            </aside>

            <h1 ref={headerRef} className="slide-left text-center text-2xl sm:text-5xl py-10 font-bold text-gray-800">
                This is my First Router App
            </h1>
        </div>
    );
}
