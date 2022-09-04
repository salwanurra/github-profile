import ButtonEdit from "../../atom/buttons/ButtonEdit";

function Sidebar() {
    return (
        <div className="bg-black-side h-screen pt-5">
            <div className="w-5/6 mx-auto text-white-1">
                <img src="user.png" alt="user" className="w-64" />
                <h3>Salwa Nur Atifah</h3>
                <h4 className="text-gray">salwanurra</h4>
                <div className="my-3">
                    <p>Hacktiv8 React & React Native</p>
                    <ButtonEdit />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;