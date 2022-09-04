function ListRepo() {
    return (
        <div className="mt-8">
            <div className="flex justify-between">
                <h4>Popular repositories</h4>
                <p className="text-gray font-normal text-[12px]">Customize your pins</p>
            </div>
            <div className="grid grid-cols-2 mt-3 gap-3">
                <div className="rounded-md bg-black-side border border-light p-3">
                    <div className="flex justify-between mb-4">
                        <a href="/" className="font-semibold">salwanurra-profile</a>
                    <div className="border border-light rounded-full text-gray p-0.5 text-[12px]">Public</div>
                </div>
                <div className="flex items-center">
                    <div className="language-html"></div>
                        <span className="text-gray">HTML</span>
                    </div>
                </div>
                <div className="rounded-md bg-black-side border border-light p-3">
                    <div className="flex justify-between mb-4">
                        <a href="/" className="font-semibold">crud-barang</a>
                    <div className="border border-light rounded-full text-gray p-0.5 text-[12px]">Public</div>
                </div>
                <div className="flex items-center">
                    <div className="language-php"></div>
                        <span className="text-gray">PHP</span>
                    </div>
                </div>
                <div className="rounded-md bg-black-side border border-light p-3">
                    <div className="flex justify-between mb-4">
                        <a href="/" className="font-semibold">sistem-kasir</a>
                    <div className="border border-light rounded-full text-gray p-0.5 text-[12px]">Public</div>
                </div>
                <div className="flex items-center">
                    <div className="language-js"></div>
                        <span className="text-gray">JavaSCript</span>
                    </div>
                </div>
                <div className="rounded-md bg-black-side border border-light p-3">
                    <div className="flex justify-between mb-4">
                        <a href="/" className="font-semibold">dashboard-admin</a>
                    <div className="border border-light rounded-full text-gray p-0.5 text-[12px]">Public</div>
                </div>
                <div className="flex items-center">
                    <div className="language-css"></div>
                        <span className="text-gray">CSS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListRepo;