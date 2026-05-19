const ButtonMenu = ({ menubuttons, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap cursor-pointer flex-shrink-0 ${
                isActive ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
        >
            {menubuttons}
        </button>
    );
}

export default ButtonMenu;