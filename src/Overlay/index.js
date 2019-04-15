import React, { useRef, useState, useEffect } from "react";
import Video from "./Video";

import closeButtonIcon from "./icons/close.png";

import "./overlay.css";

const Overlay = ({ visible, hideModal, videos }) => {
    const scrollViewRef = useRef(null);
    const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);

    function handleKeyDown(e) {
        if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 27) {
            e.preventDefault();
        }

        if (e.keyCode === 27) {
            hideModal();
            return;
        }

        let newIndex = visibleVideoIndex;
        if (e.keyCode === 39) {
            newIndex += 1;
        } else if (e.keyCode === 37) {
            newIndex -= 1;
        }

        if (visible) {
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

    const onClick = i => {
        const left =
            scrollViewRef.current.childNodes[i].offsetLeft -
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
                    src={closeButtonIcon}
                    className="close-button"
                    alt="close overlay"
                />
            </div>

            <div
                className="scrollview-wrapper"
                onClick={e => {
                    e.stopPropagation();
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
                    {videos.map(({ videoId, ...remainingData }, i) => (
                        <Video
                            onClick={() => onClick(i)}
                            key={videoId}
                            src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&autoplay=1`}
                            previewImage={require(`./videoPreviewImages/${videoId}.jpg`)}
                            {...remainingData}
                        />
                    ))}
                </div>
            </div>

            <div
                className="title-wrapper"
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                {videos.map((d, i) => (
                    <span
                        key={i}
                        onClick={() => {
                            onClick(i);
                        }}
                        className={`title ${
                            i === visibleVideoIndex ? "active" : ""
                        }`}
                    >
                        {d.title}
                    </span>
                ))}
            </div>
        </div>
    );
};

function updateVideoIndex(e, scrollView, setVisibleVideoIndex) {
    const children = e.nativeEvent.srcElement.childNodes;

    children.forEach((el, i) => {
        const isVisible = isElementInViewport(el, scrollView);
        if (isVisible) {
            setVisibleVideoIndex(i);
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
