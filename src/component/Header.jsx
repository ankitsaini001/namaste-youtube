const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 shadow-md sticky top-0 bg-white z-50">
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                    <img className="w-6" src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="side-menu" />
                </button>
                <a href="/" className="flex items-center gap-1">
                    <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="youtube" />
                    <span className="text-xl font-semibold tracking-tight">YouTube</span>
                </a>
            </div>
            <div className="flex items-center w-1/2">
                <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-full outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Search"
                />
                <button className="px-5 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 cursor-pointer">
                    🔍
                </button>
            </div>
            <div>
                <img className="w-8 h-8 rounded-full cursor-pointer" src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user-icon" />
            </div>
        </div>
    );
}

export default Header;