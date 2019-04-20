import React, { useState } from "react";

const Video = ({
    src,
    title,
    pathTopreviewImage,
    description,
    company,
    onClick,
}) => {
    const [showIframe, setShowIframe] = useState(!pathTopreviewImage);

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
                        background: `url(${pathTopreviewImage})`,
                        backgroundSize: "cover",
                    }}
                    alt={title}
                    className={`video-image-overlay ${
                        showIframe ? "hidden" : "visible"
                    }`}
                >
                    <img
                        src="/images/icons/play.png"
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
