import React, { useEffect, useState } from "react";

import "./app.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import Overlay from "./Overlay";

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
        return () => window.removeListener("scroll", onScroll);
    }, []);

    const [visibleModal, setVisibleModal] = useState(null);

    return (
        <div
            style={{
                width: "100%",

                // currently breaks scroll listener
                // height: "100vh",
                // overflow: visibleModal ? "hidden" : "scroll"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Header
                    style={{
                        transform: `translate3d(0, -${scrollYOffset / 5}px, 0)`,
                    }}
                />
                <Content
                    setVisibleModal={setVisibleModal}
                    scrollYOffset={scrollYOffset}
                    style={{ transform: `scale(${visibleModal ? 1.5 : 1})` }}
                />
                <Footer />

                <Overlay
                    setVisibleModal={setVisibleModal}
                    visible={visibleModal === "tv"}
                />
            </div>
        </div>
    );
}

function addVisibleClassToVisibleElements(yOffset = 0) {
    const elements = document.querySelectorAll(
        ".show-when-in-viewport:not(.visible)"
    );

    elements.forEach(el => {
        console.log(yOffset);
        if (isElementInViewport(el, yOffset)) {
            setTimeout(() => {
                el.classList.add("visible");
            }, 500);
        }
    });
}

// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport(el, yOffset) {
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
