import React, { useRef, useState, useEffect } from "react";
import Video from "./Video";

import "./overlay.scss";

const KEYS = {
    ESCAPE: 27,
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39,
};

const Overlay = ({ visible, hideModal, videos }) => {
    const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);

    function handleKeyDown(event) {
        const pressedKey = event.keyCode;

        if (Object.keys(KEYS).includes(pressedKey)) {
            event.preventDefault();
        }

        if (pressedKey === KEYS.ESCAPE) {
            hideModal();
            return;
        }

        let newIndex = visibleVideoIndex;
        if (pressedKey === KEYS.ARROW_RIGHT) {
            newIndex += 1;
        } else if (pressedKey === KEYS.ARROW_LEFT) {
            newIndex -= 1;
        }

        if (visible) {
            // prevents jumping out of bounds
            const safeIndex = Math.min(
                Math.max(newIndex, 0),
                videos.length - 1
            );
            onClick(safeIndex);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [visible, visibleVideoIndex]);

    const scrollViewRef = useRef(null);
    const onClick = index => {
        const left =
            scrollViewRef.current.childNodes[index].offsetLeft -
            window.innerWidth * 0.2;
        scrollViewRef.current.scroll({
            top: 0,
            left,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`overlay-wrapper ${visible ? "visible" : "hidden"}`}
            onClick={() => {
                hideModal();
            }}
        >
            <div className="container">
                <img
                    src="/images/icons/close.png"
                    className="close-button"
                    alt="close overlay"
                />
            </div>

            <div
                className="scrollview-wrapper"
                onClick={event => {
                    event.stopPropagation();
                }}
            >
                <div
                    ref={scrollViewRef}
                    className="overlay"
                    onScroll={e => {
                        updateVideoIndex(
                            e,
                            scrollViewRef.current,
                            setVisibleVideoIndex
                        );
                    }}
                >
                    {videos.map(({ videoId, ...remainingData }, index) => (
                        <Video
                            onClick={() => onClick(index)}
                            key={videoId}
                            src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&autoplay=1`}
                            pathTopreviewImage={`/images/videoPreviewImages/${videoId}.jpg`}
                            {...remainingData}
                        />
                    ))}
                </div>
            </div>

            <div
                className="title-wrapper"
                onClick={event => {
                    event.stopPropagation();
                }}
            >
                {videos.map((video, index) => (
                    <span
                        key={index}
                        onClick={() => {
                            onClick(index);
                        }}
                        className={`title ${
                            index === visibleVideoIndex ? "active" : ""
                        }`}
                    >
                        {video.title}
                    </span>
                ))}
            </div>
        </div>
    );
};

function updateVideoIndex(e, scrollView, setVisibleVideoIndex) {
    const children = e.nativeEvent.srcElement.childNodes;

    children.forEach((el, index) => {
        const isVisible = isElementInViewport(el, scrollView);
        if (isVisible) {
            setVisibleVideoIndex(index);
        }
    });
}

export function isElementInViewport(el, scrollView) {
    const scrollViewWidth = scrollView.clientWidth / 2;
    const scrollViewScrollLeft =
        scrollView.scrollLeft + scrollView.clientWidth / 4;

    let left = el.offsetLeft;
    const width = el.offsetWidth;

    while (el.offsetParent) {
        el = el.offsetParent;
        left += el.offsetLeft;
    }

    return (
        left < scrollViewScrollLeft + scrollViewWidth &&
        left + width > scrollViewScrollLeft
    );
}

export default Overlay;
