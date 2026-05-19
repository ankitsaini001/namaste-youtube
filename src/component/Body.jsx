import { useState } from "react";
import BodyVideosCards from "./BodyVideosCards";
import BodyMenuBar from "./BodyMenuBar";

const Body = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div>
            <BodyMenuBar onSelect={setSelectedCategory} />
            <BodyVideosCards selectedCategory={selectedCategory} />
        </div>
    );
}

export default Body;