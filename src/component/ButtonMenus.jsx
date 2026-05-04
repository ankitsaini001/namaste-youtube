const ButtonMenu = ({ menubuttons, isActive }) => {
    return (
        <div className="mt-[-10px]">
            <button className={`px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap cursor-pointer ${isActive
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}>
                {menubuttons}
            </button>
        </div>
    );
}

export default ButtonMenu;