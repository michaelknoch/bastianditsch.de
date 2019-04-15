import React, { useEffect, useState } from "react";

import "./app.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import mobile from "./gif/mobile.gif";
import Overlay from "./Overlay";

import { data } from "./data";

function App() {
    const [scrollYOffset, setScrollYOffset] = useState(0);

    useEffect(() => {
        addVisibleClassToVisibleElements();
    }, []);

    const onScroll = () => {
        setScrollYOffset(window.scrollY);

        window.requestAnimationFrame(() => {
            addVisibleClassToVisibleElements();
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const [visibleModal, setVisibleModal] = useState(null);
    function hideModal() {
        setVisibleModal(null);
        stopAllVideos();
    }

    useEffect(() => {
        document.body.className = visibleModal ? "no-scroll" : "scroll";
    }, [visibleModal]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
            }}
        >
            <img
                className="mobile-only-img"
                alt="Get a bigger screen"
                src={mobile}
            />
            <div className="hide-mobile">
                <Header
                    style={{
                        transform: `translate3d(0, -${scrollYOffset / 4}px, 0)`,
                    }}
                />

                <Content
                    visibleModal={visibleModal}
                    setVisibleModal={setVisibleModal}
                    scrollYOffset={scrollYOffset}
                    data={data}
                />

                <Footer />

                {data.map(({ key, videos }) => (
                    <Overlay
                        key={key}
                        visible={visibleModal === key}
                        videos={videos}
                        hideModal={hideModal}
                    />
                ))}
            </div>
        </div>
    );
}

function stopAllVideos() {
    const elements = document.querySelectorAll(".overlay-wrapper iframe");
    elements.forEach(el => {
        const oldSrc = el.src;
        el.src = "";
        el.src = oldSrc.replace("&autoplay=1", "");
    });
}

function addVisibleClassToVisibleElements(yOffset = 0) {
    const elements = document.querySelectorAll(
        ".show-when-in-viewport:not(.visible)"
    );

    elements.forEach(el => {
        if (isElementInViewport(el, yOffset)) {
            setTimeout(() => {
                el.classList.add("visible");
            }, 500);
        }
    });
}

// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
export function isElementInViewport(el, yOffset) {
    let top = el.offsetTop + yOffset;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset
    );
}

export default App;
