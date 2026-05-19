import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";
import LiveChat from "./LiveChat";

const Watch = () => {

    const [queryParams] = useSearchParams();
    const videoId = queryParams.get("v");
    return (
        <div className="p-4">
            {/* Row 1: video + live chat side-by-side */}
            <div className="flex gap-4">
                <iframe  className="w-full aspect-video" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className="w-[34rem] h-[515px] border border-black rounded-lg overflow-hidden">
                    <LiveChat />
                </div>
            </div>

            {/* Row 2: comments under the video only */}
            <div className="w-[1000px]">
                <h1 className="text-2xl font-bold mt-4">Comments</h1>
                <Comment />
            </div>
        </div>
    );
}

export default Watch;