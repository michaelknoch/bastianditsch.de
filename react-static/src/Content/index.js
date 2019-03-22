import React from "react";

import "./contentStyle.css";

import mtv from "./images/mtv.jpg";
import paramount from "./images/paramount.jpg";
import reel from "./images/reel.jpg";

const data = [
    {
        key: "tv",
        img: mtv,
        headline: "BRAND TRAILERS",
        subtitle: "Viacom, MTV, Comedy Central",
    },
    {
        key: "brand",
        img: paramount,
        headline: "BRAND TRAILERS",
        subtitle: "Viacom, MTV, Comedy Central",
    },
    {
        key: "random",
        img: reel,
        headline: "BRAND TRAILERS",
        subtitle: "Viacom, MTV, Comedy Central",
    },
];

const Content = ({ style, scrollYOffset, setVisibleModal }) => (
    <div className="noise" style={{ ...styles.noise, ...style }}>
        <div className="content container">
            {data.map(({ img, headline, subtitle, key }) => (
                <div className="element show-when-in-viewport">
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
                                    20}px, 0)`,
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

const styles = {
    noise: {
        // backgroundImage: `url(${noiseUrl})`,
        backgroundColor: "black",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default Content;
