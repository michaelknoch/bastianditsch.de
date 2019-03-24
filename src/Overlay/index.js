import React, { useRef, useState } from "react";
import Video from "./Video";

import closeButtonIcon from "./icons/close.png";

import "./overlay.css";

const Overlay = ({ visible, hideModal, data }) => {
    const scrollViewRef = useRef(null);
    const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);

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
                    {data.map(({ videoId, ...remainingData }) => (
                        <Video
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
                {data.map((d, i) => (
                    <span
                        key={i}
                        onClick={() => {
                            const left =
                                scrollViewRef.current.childNodes[i].offsetLeft;
                            scrollViewRef.current.scroll({
                                top: 0,
                                left,
                                behavior: "smooth",
                            });
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
