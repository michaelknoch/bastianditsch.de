import React, { useState } from "react";

import playButtonIcon from "./icons/play.png";

const Video = ({ src, title, previewImage, description, company, onClick }) => {
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
                        allowFullScreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                    />
                )}
                <div
                    onClick={e => {
                        e.stopPropagation();
                        setShowIframe(true);
                        onClick();
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
            <div className="video-subtitle">
                <span>
                    {description}
                    <br />
                    {company}
                </span>
            </div>
        </div>
    );
};

export default Video;
