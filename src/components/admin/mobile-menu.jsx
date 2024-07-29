import React from 'react'

export default function MobileMenu() {
    return (
        <div> <svg
            onClick={toggleMenu}
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            className="text-[40px] lmd:block lg:hidden"
        >
            <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
            />
        </svg>

            <div className="fixed top-[80px] left-0 right-0 z-80 w-full bg-[rgba(0,0,0,0.6)] h-screen flex justify-center">
                <div className="w-full p-6 gap-4 bg-gray-100 h-screen">
                    <div className="flex flex-col gap-6">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.navTo;
                            const linkStyles = isActive
                                ? "underline font-black text-myDark"
                                : "text-gray-700 font-semibold hover:font-bold transition-font ";

                            return (
                                <div key={item.name}>
                                    <Link
                                        to={item.navTo}
                                        className={`${linkStyles}`}
                                        onClick={() => {
                                            toggleMenu();
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div></div>
    )
}
