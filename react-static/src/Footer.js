import React from "react";

import saul from "./gif/saul.gif";

const Footer = ({ style }) => (
    <div
        className="container-fluid footer"
        style={{ ...styles.footer, ...style }}
    >
        <div style={styles.contact}>
            <img style={styles.img} src={saul} alt="funny contact me gif" />
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
        minHeight: "80vh",
    },

    img: {
        maxWidth: "580px",
        paddingBottom: "50px",
    },

    contact: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    link: {
        color: "black",
        textDecoration: "none",
    },

    span: {
        padding: "0px 10px",
        fontSize: "25px",
        fontWeight: "100",
        color: "black",
    },
};

export default Footer;
