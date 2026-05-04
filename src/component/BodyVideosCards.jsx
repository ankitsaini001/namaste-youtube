import { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../utils/constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const BodyVideosCards = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    },[]);

    const fetchVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_URL);
            const data = await response.json();
            //console.log(data);
            setVideos(data.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {videos.map((video) => (
                <Link to={`/watch?v=${video.id}`} key={video.id}>
                    <VideoCards video={video} />
                </Link>
            ))}
        </div>
    );
}

export default BodyVideosCards;