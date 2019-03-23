import React from "react";

const VimeoVideo = ({ src }) => (
    <iframe
        title="video"
        width="100%"
        height="315"
        src={src}
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
    />
);

export default VimeoVideo;
