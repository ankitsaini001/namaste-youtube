import { useRef, useState, useEffect } from "react";
import ButtonMenu from "./ButtonMenus";

const BodyMenuBar = () => {
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const listAllMenu = ["All", "Live", "Mixes", "Music", "Gaming", "News", "Sports", "Learning", "Fashion & Beauty", "Comedy", "Entertainment", "Podcast", "Autos & Vehicles", "Travel & Events", "Movies", "Anime/Animation", "Action/Adventure"];

    const updateArrows = () => {
        const el = scrollRef.current;
        if (!el) return;
        setShowLeft(el.scrollLeft > 0);
        setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    useEffect(() => {
        updateArrows();
        window.addEventListener("resize", updateArrows);
        return () => window.removeEventListener("resize", updateArrows);
    }, []);

    const scroll = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    };

    return (
        <div className="relative bg-white z-40 border-b border-gray-200">
            {showLeft && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-0 h-full z-10 flex items-center px-2 bg-gradient-to-r from-white via-white to-transparent cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
            <div
                ref={scrollRef}
                onScroll={updateArrows}
                className="flex items-center gap-3 px-8 py-3 overflow-x-auto scrollbar-hide"
            >
                {listAllMenu.map((menu, index) => (
                    <ButtonMenu key={index} menubuttons={menu} isActive={index === 0} />
                ))}
            </div>
            {showRight && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-0 h-full z-10 flex items-center px-2 bg-gradient-to-l from-white via-white to-transparent cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default BodyMenuBar; 