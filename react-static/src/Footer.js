import React from "react";

const Footer = () => (
    <div style={styles.footer}>
        <h5>Cutting edge</h5>
        <div style={styles.contact}>
            <span style={styles.span}>+49 17661919116</span>
            <span style={styles.span}>
                <a style={styles.link} href="mailto:kontakt@bastianditsch.de">
                    kontakt@bastianditsch.de
                </a>
            </span>
        </div>
        <img
            style={styles.img}
            src="https://media.giphy.com/media/64agTijLAGgifRbF9r/source.gif"
        />
    </div>
);

const styles = {
    footer: {
        marginTop: "200px",
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
