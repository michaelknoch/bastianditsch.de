import React from "react";
import Video from "./Video";

import "./overlay.css";

const Overlay = ({ visible, setVisibleModal }) => (
    <div
        className="overlay-wrapper"
        style={{
            opacity: visible ? 1 : 0,
            visibility: visible ? "visible" : "hidden",
        }}
        onClick={() => {
            setVisibleModal(null);
        }}
    >
        <div
            className="overlay"
            onClick={e => {
                e.stopPropagation();
            }}
        >
            <Video
                src="https://player.vimeo.com/video/298738020"
                title="sachen"
            />

            <Video
                src="https://player.vimeo.com/video/298738020"
                title="sachen"
            />

            <Video
                src="https://player.vimeo.com/video/298738020"
                title="sachen"
            />
        </div>
    </div>
);

export default Overlay;
