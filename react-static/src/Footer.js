import React from "react";

import saul from "./gif/saul.gif";

const Footer = () => (
    <div style={styles.footer} className="container">
        <div style={styles.contact} className="show-when-in-viewport">
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
        paddingTop: "940px",
        marginBottom: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    img: {
        maxWidth: "390px",
    },

    contact: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    link: {
        color: "#bcc5cf",
        textDecoration: "none",
    },

    span: {
        padding: "10px",
        fontSize: "25px",
        fontWeight: "100",
        color: "#bcc5cf",
    },
};

export default Footer;
