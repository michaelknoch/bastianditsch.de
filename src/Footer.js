import React, { useRef, memo } from "react";

const Footer = ({ style }) => (
    <div className="container-fluid footer" style={styles.footer}>
        <div className="footer-img" style={styles.img} />
        <div className="show-when-in-viewport" style={styles.contact}>
            <span style={styles.span}>
                <a style={styles.link} href="mailto:kontakt@bastianditsch.de">
                    kontakt@bastianditsch.de
                </a>
            </span>
            <span>|</span>
            <span style={styles.span}>+49 176 61919116</span>
            <span>|</span>
            <span style={styles.span}>
                <a
                    style={styles.link}
                    target="_blank"
                    href="/bastianditsch_about.pdf"
                >
                    about me
                </a>
            </span>
        </div>
    </div>
);

const styles = {
    footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,

        padding: "50px 0",
        minHeight: "95vh",
        position: "relative",
    },

    img: {
        height: "25vw",
        width: "100%",
        borderLeft: "50px solid #fbfbfb",
        borderRight: "50px solid #fbfbfb",
        boxSizing: "border-box",

        backgroundImage: "url(/images/gif/saul.gif)",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
    },

    contact: {
        marginTop: "90px",
        padding: "10px 120px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "38px",
        color: "#CCCCCC",
        textTransform: "uppercase",
    },

    link: {
        color: "#CCCCCC",
        textDecoration: "none",
    },

    span: {
        padding: "0px 10px",
    },
};

export default memo(Footer);
