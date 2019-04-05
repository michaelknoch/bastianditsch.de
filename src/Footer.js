import React, { useRef } from "react";

import saul from "./gif/saul.gif";

const Footer = ({ style }) => {
    const footerRef = useRef(null);

    const footerYPosition = footerRef.current
        ? footerRef.current.getBoundingClientRect().y
        : 0;

    console.log("footerYPosition", footerYPosition);

    const relativeYOffset = Math.max(
        0,
        footerYPosition * -1 + window.innerHeight
    );
    console.log(relativeYOffset);

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

            <div
                className="show-when-in-viewport"
                style={{
                    ...styles.contact,
                    ...{
                        transform: `translate3d(0, -${relativeYOffset /
                            7}px, 0)`,
                    },
                }}
            >
                <span style={styles.span}>+49 17661919116</span>
                <span style={styles.span}>
                    <a
                        style={styles.link}
                        href="mailto:kontakt@bastianditsch.de"
                    >
                        kontakt@bastianditsch.de
                    </a>
                </span>
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
    },

    contact: {
        backgroundColor: "black",
        padding: "10px 120px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "90px",
        marginLeft: "10vw",
    },

    link: {
        color: "white",
        textDecoration: "none",
    },

    span: {
        padding: "0px 10px",
        fontSize: "40px",
        fontWeight: "900",
        color: "white",
    },
};

export default Footer;
