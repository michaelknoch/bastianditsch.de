import React, { useRef } from "react";

import saul from "./gif/saul.gif";

const Footer = ({ style }) => {
    const footerRef = useRef(null);

    const footerYPosition = footerRef.current
        ? footerRef.current.getBoundingClientRect().y
        : 0;

    const relativeYOffset = Math.max(
        0,
        footerYPosition * -1 + getWindowHeight()
    );

    return (
        <div
            ref={footerRef}
            className="container-fluid footer"
            style={{ ...styles.footer, ...style }}
        >
            <div
                className="footer-img"
                style={{
                    ...styles.img,
                    ...{
                        backgroundImage: `url(${saul})`,
                        backgroundSize: "cover",
                        backgroundPositionY: `-${relativeYOffset / 4}px`,
                    },
                }}
            />

            <div className="show-when-in-viewport" style={styles.contact}>
                <span style={styles.span}>
                    <a
                        style={styles.link}
                        href="mailto:kontakt@bastianditsch.de"
                    >
                        kontakt@bastianditsch.de
                    </a>
                </span>
                <span style={styles.span}>|</span>
                <span style={styles.span}>+49 17661919116</span>
            </div>
        </div>
    );
};

const styles = {
    footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,

        padding: "50px 0",
        minHeight: "800px",
        position: "relative",
    },

    img: {
        height: "400px",
        width: "100%",
        boxSizing: "border-box",
        borderLeft: "15px solid white",
        borderRight: "15px solid white",
    },

    contact: {
        marginTop: "90px",
        padding: "10px 120px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    link: {
        color: "black",
        textDecoration: "none",
    },

    span: {
        padding: "0px 10px",
        fontSize: "20px",
        fontWeight: "600",
        color: "black",
    },
};

function getWindowHeight() {
    if (typeof window === "undefined") {
        return 0;
    }

    return window.innerHeight;
}

export default Footer;
