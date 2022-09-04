function TabLink() {
    return (
        <div className="flex items-center text-white-gray">
            <div className="flex items-center pb-3 pr-1 border-2 border-transparent border-b-[#f78166]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={1.5} stroke="gray" className="w-5 h-full mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <p className="text-[14px]">Overview</p>
            </div>
            <div className="flex items-center pb-3 ml-4">
                <svg viewBox="0 0 22 22" strokeWidth={0.1} fill="gray" className="w-5 h-full mr-1 mt-1">
                    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                </svg>
                <p className="text-[14px]">Repositories</p>
            </div>
            <div className="flex items-center pb-3 ml-4">
                <svg viewBox="0 0 24 24" strokeWidth={0.1} fill="gray" className="w-5 h-full mr-1 mt-1">
                    <path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z" />
                </svg>
                <p className="text-[14px]">Projects</p>
            </div>
            <div className="flex items-center pb-3 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={1.5} stroke="gray" className="w-5 h-full mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <p className="text-[14px]">Package</p>
            </div>
        </div>
    )
}

export default TabLink;