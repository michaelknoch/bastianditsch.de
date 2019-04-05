import React, { useEffect, useState } from "react";

import "./app.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import Overlay from "./Overlay";

const data = {
    tv: [
        {
            videoId: "157603204",
            title: "PARAMOUNT channel",
            description: "Trailer for paramount channel poland",
            company: "MONKEY Pictures",
        },
        {
            videoId: "157904332",
            title: "NICKNIGHT skins",
            description: "Trailer for the series skins on nicknight germany",
            company: "MONKEY Pictures",
        },
        {
            videoId: "322428240",
            title: "NICK sofakino",
            description: "sofakino trailer for nick germany",
            company: "PIXEL JUNGLE",
        },
        {
            videoId: "322429346",
            title: "SUPER RTL trophy wife",
            description: "Trailer for the series trophy wife for super rtl",
            company: "MONKEY Pictures",
        },
    ],
    brand: [
        {
            videoId: "298737242",
            title: "MTV brand",
            description: "Brand trailer for mtv",
            company: "PIXEL JUNGLE",
        },
        {
            videoId: "298738020",
            title: "MTV Yo! MTV Raps",
            description: "Brand trailer for mtv / yo! mtv raps",
            company: "PIXEL JUNGLE",
        },
        {
            videoId: "298173207",
            title: "COMEDY CENTRAL brand",
            description: "Brand trailer for comedy central",
            company: "MONKEY Pictures",
        },
        {
            videoId: "298174468",
            title: "COMEDY CENTRAL intro",
            description: "Brand trailer for comedy central / cc intro",
            company: "MONKEY Pictures",
        },
    ],
    other: [
        {
            videoId: "322430285",
            title: "MONKEY Pictures reel",
            description: "Highlight reel for monkey pictures",
            company: "MONKEY Pictures",
        },
        {
            videoId: "157605820",
            title: "SPIEGEL TV geschichte",
            description:
                "Brand trailer for spiegel tv geschichte / spiegel tv pitch",
            company: "MONKEY Pictures",
        },
    ],
};

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
            <Header
                style={{
                    transform: `translate3d(0, -${scrollYOffset / 5}px, 0)`,
                }}
            />

            <Content
                visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
                scrollYOffset={scrollYOffset}
            />

            <Footer />

            <Overlay
                visible={visibleModal === "tv"}
                data={data.tv}
                hideModal={hideModal}
            />

            <Overlay
                visible={visibleModal === "brand"}
                data={data.brand}
                hideModal={hideModal}
            />

            <Overlay
                visible={visibleModal === "other"}
                data={data.other}
                hideModal={hideModal}
            />
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
