import { useEffect, useState } from "react";
import { CATEGORY_MAP, YOUTUBE_URL } from "../utils/constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const BodyVideosCards = ({ selectedCategory }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_URL);
            const data = await response.json();
            setVideos(data.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    const categoryId = CATEGORY_MAP[selectedCategory];
    const filteredVideos = categoryId
        ? videos.filter((video) => video.snippet.categoryId === categoryId)
        : videos;

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {filteredVideos.length === 0 && videos.length > 0 ? (
                <p className="text-gray-500 mt-10">No videos found for "{selectedCategory}".</p>
            ) : (
                filteredVideos.map((video) => (
                    <Link to={`/watch?v=${video.id}`} key={video.id}>
                        <VideoCards video={video} />
                    </Link>
                ))
            )}
        </div>
    );
}

export default BodyVideosCards;