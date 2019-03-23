import React, { useState } from "react";

import playButtonIcon from "./icons/play.svg";

const Video = ({ src, title, previewImage }) => {
    const [showIframe, setShowIframe] = useState(!previewImage);

    return (
        <div className="video">
            <div
                style={{ flex: 1, alignSelf: "stretch", position: "relative" }}
            >
                {showIframe && (
                    <iframe
                        title={title}
                        src={src}
                        frameBorder="0"
                        allowFullscreen
                        mozallowfullscreen
                        webkitAllowFullScreen
                    />
                )}
                <div
                    onClick={e => {
                        setShowIframe(true);
                        e.stopPropagation();
                    }}
                    style={{
                        background: `url(${previewImage})`,
                        backgroundSize: "cover",
                    }}
                    alt={title}
                    className={`video-image-overlay ${
                        showIframe ? "hidden" : "visible"
                    }`}
                >
                    <img
                        src={playButtonIcon}
                        className="play-button"
                        alt="play button"
                    />
                </div>
            </div>
        </div>
    );
};

export default Video;
