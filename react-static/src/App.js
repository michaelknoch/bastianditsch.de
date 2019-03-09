import React, { useEffect } from "react";

import "./app.css";
import Header from "./Header";
import TopicGrid from "./TopicGrid";
import Footer from "./Footer";

function App() {
    const onScroll = throttle(() => {
        window.requestAnimationFrame(() => {
            setTimeout(() => {
                addVisibleClassToVisibleElements();
            }, 200);
        });
    }, 100);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeListener("scroll", onScroll);
    }, []);

    return (
        <div className="container">
            <Header />
            <TopicGrid />
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
    let top = el.offsetTop;
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

function throttle(fn, wait) {
    let time = Date.now();
    return () => {
        if (time + wait - Date.now() < 0) {
            fn();
            time = Date.now();
        }
    };
}

export default App;
