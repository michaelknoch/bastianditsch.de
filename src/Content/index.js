import React from "react";

import "./contentStyle.css";

import mtv from "./images/mtv.jpg";
import paramount from "./images/paramount.jpg";
import reel from "./images/reel.jpg";

const data = [
    {
        key: "brand",
        img: paramount,
        headline: "BRAND TRAILERS",
        subtitle: "Viacom, MTV, Comedy Central",
    },
    {
        key: "tv",
        img: mtv,
        headline: "TV PROMOTION",
        subtitle: "paramount, Nick, SUPER RTL",
    },
    {
        key: "other",
        img: reel,
        headline: "OTHER",
        subtitle: "SPIEGEL TV, MONKEY Pictures",
    },
];

const Content = ({ style, scrollYOffset, visibleModal, setVisibleModal }) => (
    <div className={"content-wrapper " + (visibleModal ? "rotatescale" : "")}>
        <div className="content container">
            {data.map(({ img, headline, subtitle, key }) => (
                <div key={key} className="element show-when-in-viewport">
                    <div
                        className="mouseover"
                        onClick={() => {
                            setVisibleModal(key);
                        }}
                    >
                        <div style={{ flex: 2 }} className="image">
                            <img
                                src={img}
                                alt="brand"
                                className="img-responsive"
                            />
                        </div>

                        <div
                            className="text"
                            style={{
                                transform: `translate3d(0, ${scrollYOffset /
                                    18}px, 0)`,
                            }}
                        >
                            <h3>{headline}</h3>
                            <h5>{subtitle}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Content;
