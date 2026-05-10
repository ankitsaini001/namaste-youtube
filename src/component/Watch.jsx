import { useSearchParams } from "react-router-dom";
import Comment from "./Comment";

const Watch = () => {

    const [queryParams] = useSearchParams();
    const videoId = queryParams.get("v");
    return (
        <>
            <div className="w-[1000px]">
                <iframe width="1000" height="515" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h1 className="text-2xl font-bold mt-4">Comments</h1>
                <Comment/>
            </div>
        </>
    );
}

export default Watch;