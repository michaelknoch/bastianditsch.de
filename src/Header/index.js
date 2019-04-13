import React from "react";

import simpsons from "../gif/simpsons.gif";

import "./Header.css";

const Header = ({ style }) => (
    <div style={{ ...styles.header, ...style }} className="header container">
        <div
            style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
            }}
        >
            <img src={simpsons} alt="funny gif" style={{ maxWidth: 700 }} />
        </div>

        <div
            style={{
                jusitfyContent: "stretch",
                alignSelf: "flex-start",
                display: "flex",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "50px",
                }}
            >
                <h1>Bastian Ditsch</h1>
                <h2 style={{ alignSelf: "flex-start" }}>Video Editor</h2>
                <span style={{ display: "flex" }}>
                    <h3>
                        Using other people's content to create my own.
                        <br />
                        i'm an editor. i edit.
                    </h3>
                </span>
            </div>
        </div>
    </div>
);

const styles = {
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "100vh",
        padding: "0 20px",
    },
};

export default Header;
