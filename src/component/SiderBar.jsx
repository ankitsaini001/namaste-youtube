import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SiderBar = () => {

    const sidebarItems = useSelector((store) => store.app.isMenuOpen);

    // Sidebar is unmounted entirely when closed — avoids keeping a hidden fixed element in the DOM
    if (!sidebarItems) {
        return null;
    }

    
  return (
    <div className="w-56 h-[calc(100vh-56px)] overflow-y-auto fixed top-14 left-0 bg-white px-2 py-3 z-50">
      {/* Main Links */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <Link to="/">
          <SidebarItem icon="🏠" label="Home" active />
        </Link>
        <Link to="/shorts">
          <SidebarItem icon="🎬" label="Shorts" />
        </Link>
        <Link to="/subscriptions">
          <SidebarItem icon="📺" label="Subscriptions" />
        </Link>
        <Link to="/music">
          <SidebarItem icon="🎵" label="YouTube Music" />
        </Link>
      </div>

      {/* You Section */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <h3 className="text-base font-medium px-3 mb-1">You</h3>
        <Link to="/your-channel">
          <SidebarItem icon="📁" label="Your channel" />
        </Link>
        <Link to="/history">
          <SidebarItem icon="⏱️" label="History" />
        </Link>
        <Link to="/your-videos">
          <SidebarItem icon="🎥" label="Your videos" />
        </Link>
        <Link to="/watch-later">
          <SidebarItem icon="⏰" label="Watch later" />
        </Link>
        <Link to="/liked-videos">
          <SidebarItem icon="👍" label="Liked videos" />
        </Link>
      </div>

      {/* Subscriptions */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <h3 className="text-base font-medium px-3 mb-1">Subscriptions</h3>
        <Link to="/t-series">
          <SidebarItem icon="🔴" label="T-Series" />
        </Link>
        <Link to="/mrbeast">
          <SidebarItem icon="🟢" label="MrBeast" />
        </Link>
        <Link to="/pewdiepie">
          <SidebarItem icon="🟡" label="PewDiePie" />
        </Link>
        <Link to="/cocomelon">
          <SidebarItem icon="🔵" label="Cocomelon" />
        </Link>
        <Link to="/set-india">
          <SidebarItem icon="🟣" label="SET India" />
        </Link>
      </div>

      {/* Explore */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <h3 className="text-base font-medium px-3 mb-1">Explore</h3>
        <Link to="/trending">
          <SidebarItem icon="🔥" label="Trending" />
        </Link>
        <Link to="/shopping">
          <SidebarItem icon="🛍️" label="Shopping" />
        </Link>
        <Link to="/gaming">
          <SidebarItem icon="🎮" label="Gaming" />
        </Link>
        <Link to="/news">
          <SidebarItem icon="📰" label="News" />
        </Link>
        <Link to="/sports">
          <SidebarItem icon="⚽" label="Sports" />
        </Link>
        <Link to="/learning">
          <SidebarItem icon="💡" label="Learning" />
        </Link>
      </div>

      {/* More from YouTube */}
      <div className="pb-3">
        <h3 className="text-base font-medium px-3 mb-1">More from YouTube</h3>
        <Link to="/youtube-premium">
          <SidebarItem icon="📡" label="YouTube Premium" />
        </Link>
        <Link to="/youtube-studio">
          <SidebarItem icon="🎬" label="YouTube Studio" />
        </Link>
        <Link to="/youtube-music">
          <SidebarItem icon="🎵" label="YouTube Music" />
        </Link>
        <Link to="/youtube-kids">
          <SidebarItem icon="👶" label="YouTube Kids" />
        </Link>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-5 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
        active ? "bg-gray-100 font-medium" : ""
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default SiderBar;