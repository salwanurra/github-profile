import SearchInput from "../../atom/searchInput/SearchInput";

function Navbar() {
    return (
        <div className="h-16 bg-header flex items-center justify-between px-8 py-4">
            <div className="flex">
                <img src="github.png" alt="github" className="h-8 w-8 bg-white-1 rounded-full mr-5" />
                <SearchInput />
                <div className="flex items-center text-white-1 mx-4 font-semibold">
                    <p className="mr-4">Pull Request</p>
                    <p className="mr-4">Issues</p>
                    <p className="mr-4">Marketplace</p>
                    <p className="mr-4">Explore</p>
                </div>
            </div>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f0f6fc" className="w-6 h-6 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f0f6fc" className="w-6 h-6 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f0f6fc" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f0f6fc" className="w-3 h-3">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>



            </div>
        </div>
    )
}

export default Navbar;