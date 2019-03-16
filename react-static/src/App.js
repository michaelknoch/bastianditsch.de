import React, { useEffect, useState } from "react";

import "./app.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
    const [scrollYOffset, setScrollYOffset] = useState(0);

    const onScroll = () => {
        setScrollYOffset(window.scrollY);
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                addVisibleClassToVisibleElements();
            }, 500);
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeListener("scroll", onScroll);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Header />
            <Content
                scrollYOffset={scrollYOffset}
                style={{
                    transform: `translate3d(0, ${scrollYOffset / 5}px, 0)`,
                }}
            />
            <Footer />
        </div>
    );
}

function addVisibleClassToVisibleElements() {
    const elements = document.querySelectorAll(
        ".show-when-in-viewport:not(.visible)"
    );

    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add("visible");
        }
    });
}

addVisibleClassToVisibleElements();

// https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport(el) {
    let top = el.offsetTop + 300;
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
