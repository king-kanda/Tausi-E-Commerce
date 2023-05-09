'use Client'

const Nav = () => {
    return (
        <div className="container bg-transparent  top-0 z-10">            
            <nav className="flex bg-white   items-center justify-between py-2">
                    <div className="p-4">
                        <Link href="/">
                            fire
                        </Link>
                    </div>
                    <div className="md:hidden sm:block px-4">
                        <button 
                            type="button"
                            className="text-black px-4 py-3 rounded "
                            // onClick={handleToggle}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="nav-hoolder  hidden w-full md:block md:w-auto " id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                            <li className="p-4">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/about">About Us </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/services"> Services </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/projects"> Projects </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/contact"> Blogs </Link>
                            </li>
                        
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-orange-500 text-white px-4 py-3 rounded ">
                            <Link href="/contact"> Contact Us</Link>
                        </button>
                    </div>
            </nav>
        </div>
    );
}

export default Nav;