import ButtonActivity from "../components/atom/buttons/ButtonActivity";
import ListRepo from "../components/organism/listRepo/ListRepo";
import Navbar from "../components/organism/navbar/Navbar";
import Sidebar from "../components/organism/sidebar/Sidebar";
import TabLink from "../components/organism/tabsLink/TabLink";

function Profile () {
    return (
        <div className="bg-black-side text-white">
            <Navbar />
            <div className="grid grid-cols-4 gap-3">
                <Sidebar />
                <div className="col-span-3 my-5 px-8">
                    <TabLink />
                    <ListRepo />

                    <div className="mt-10">
                        <div className="flex justify-between">
                            <h4>197 contribution in the last year</h4>
                            <p className="text-gray font-normal text-[12px]">Contribution settings</p>
                        </div>
                        <div className="rounded-lg border border-light p-3 my-3">
                            <img src="contribution.png" alt="contribution" />
                        </div>
                    </div>

                    <div className="mt-10 mb-5">
                        <h4>Contribution activity</h4>
                        <div className="mt-4">
                            <div className="border border-light w-4/5 relative left-32"></div>
                            <p className="font-semibold relative bottom-4">September 2022</p>
                            <div className="border-2 border-transparent border-l-light pl-5">
                                <div className="my-3">
                                    <h4>Created 2 commits in 1 repository</h4>
                                    <a href="/">salwanurra/dashboard-admin</a>
                                </div>
                                <div className="my-6">
                                    <h4>Created 1 repository</h4>
                                    <a href="/">salwanurra/dashboard-admin</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ButtonActivity />

                </div>
            </div>
        </div>

    )
}

export default Profile;