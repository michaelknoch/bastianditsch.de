import React, { useRef } from "react";

const Footer = ({ style }) => {
    const footerRef = useRef(null);

    return (
        <div
            ref={footerRef}
            className="container-fluid footer"
            style={{ ...styles.footer, ...style }}
        >
            <div className="footer-img" style={styles.img} />

            <div className="show-when-in-viewport" style={styles.contact}>
                <span style={styles.span}>
                    <a
                        style={styles.link}
                        href="mailto:kontakt@bastianditsch.de"
                    >
                        kontakt@bastianditsch.de
                    </a>
                </span>
                <span>|</span>
                <span style={styles.span}>+49 176 61919116</span>
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
        minHeight: "95vh",
        position: "relative",
    },

    img: {
        height: "25vw",
        width: "100%",
        borderLeft: "50px solid #f2f2f2",
        borderRight: "50px solid #f2f2f2",
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

export default Footer;
