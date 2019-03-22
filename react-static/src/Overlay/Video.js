import React from "react";

const Video = ({ src, title }) => (
    <div className="video">
        <iframe
            title={title}
            width="800"
            height="800"
            src={src}
            frameBorder="0"
            allowFullscreen
            mozallowfullscreen
            webkitAllowFullScreen
        />
    </div>
);

export default Video;
