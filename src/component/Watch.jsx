import { useSearchParams } from "react-router-dom";

const Watch = () => {

    const [queryParams] = useSearchParams();
    const videoId = queryParams.get("v");
    return (
        <div>
            <iframe width="1000" height="515" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" FrameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ReferrerPolicy="strict-origin-when-cross-origin" AllowFullScreen></iframe>
        </div>
    );
}

export default Watch;