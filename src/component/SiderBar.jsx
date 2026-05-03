const SiderBar = () => {
  return (
    <div className="w-56 h-[calc(100vh-56px)] overflow-y-auto fixed top-14 left-0 bg-white px-2 py-3">
      {/* Main Links */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <SidebarItem icon="🏠" label="Home" active />
        <SidebarItem icon="🎬" label="Shorts" />
        <SidebarItem icon="📺" label="Subscriptions" />
        <SidebarItem icon="🎵" label="YouTube Music" />
      </div>

      {/* You Section */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <h3 className="text-base font-medium px-3 mb-1">You</h3>
        <SidebarItem icon="📁" label="Your channel" />
        <SidebarItem icon="⏱️" label="History" />
        <SidebarItem icon="🎥" label="Your videos" />
        <SidebarItem icon="⏰" label="Watch later" />
        <SidebarItem icon="👍" label="Liked videos" />
      </div>

      {/* Subscriptions */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <h3 className="text-base font-medium px-3 mb-1">Subscriptions</h3>
        <SidebarItem icon="🔴" label="T-Series" />
        <SidebarItem icon="🟢" label="MrBeast" />
        <SidebarItem icon="🟡" label="PewDiePie" />
        <SidebarItem icon="🔵" label="Cocomelon" />
        <SidebarItem icon="🟣" label="SET India" />
      </div>

      {/* Explore */}
      <div className="border-b border-gray-200 pb-3 mb-3">
        <h3 className="text-base font-medium px-3 mb-1">Explore</h3>
        <SidebarItem icon="🔥" label="Trending" />
        <SidebarItem icon="🛍️" label="Shopping" />
        <SidebarItem icon="🎮" label="Gaming" />
        <SidebarItem icon="📰" label="News" />
        <SidebarItem icon="⚽" label="Sports" />
        <SidebarItem icon="💡" label="Learning" />
      </div>

      {/* More from YouTube */}
      <div className="pb-3">
        <h3 className="text-base font-medium px-3 mb-1">More from YouTube</h3>
        <SidebarItem icon="📡" label="YouTube Premium" />
        <SidebarItem icon="🎬" label="YouTube Studio" />
        <SidebarItem icon="🎵" label="YouTube Music" />
        <SidebarItem icon="👶" label="YouTube Kids" />
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