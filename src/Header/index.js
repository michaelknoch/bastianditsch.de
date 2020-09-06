import React, { memo } from "react";

import "./Header.scss";

const Header = ({ style }) => (
    <div style={style} className="header container">
        <div className="gif-wrapper">
            <img
                src="/images/gif/simpsons.gif"
                alt="funny gif"
                style={{ maxWidth: 700 }}
            />
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
                <h2 style={{ alignSelf: "flex-start" }}>video editor / creative concept</h2>
                <span style={{ display: "flex" }}>
                    <h3>
                        Using other people's content to create my own.
                        <br />
                        i'm an editor. i edit.
                        <br />
                        i'm an idea person, too. sometimes.
                    </h3>
                </span>
            </div>
        </div>
    </div>
);

export default memo(Header);
