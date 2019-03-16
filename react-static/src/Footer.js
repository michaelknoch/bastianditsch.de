import React from "react";

import saul from "./gif/saul.gif";

const Footer = () => (
    <div style={styles.footer} className="container-fluid footer">
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
        paddingBottom: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
