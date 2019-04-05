import React from "react";

import saul from "./gif/saul.gif";

const Footer = ({ style }) => (
    <div
        className="container-fluid footer"
        style={{ ...styles.footer, ...style }}
    >
        <img style={styles.img} src={saul} alt="funny contact me gif" />
        <div style={styles.contact}>
            <span style={styles.span}>+49 17661919116</span>
            <span style={styles.span}>
                <a style={styles.link} href="mailto:kontakt@bastianditsch.de">
                    kontakt@bastianditsch.de
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
        zIndex: 1000,

        padding: "50px 0",
        minHeight: "80vh",
        position: "relative",
    },

    img: {
        width: "100%",
    },

    contact: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "90px",
    },

    link: {
        color: "white",
        textDecoration: "none",
    },

    span: {
        padding: "0px 10px",
        fontSize: "30px",
        fontWeight: "300",
        color: "white",
    },
};

export default Footer;
