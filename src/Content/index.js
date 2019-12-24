import React from "react";

import "./content.scss";

const Content = ({ data, scrollYOffset, visibleModal, setVisibleModal }) => (
    <div className={"content-wrapper " + (visibleModal ? "rotatescale" : "")}>
        <div className="content container">
            {data.map(({ img, headline, subtitle, key }) => (
                <div key={key} className="element show-when-in-viewport">
                    <div
                        className="mouseover"
                        onClick={() => {
                            setVisibleModal(key);
                        }}
                    >
                        <div style={{ flex: 2 }} className="image">
                            <img
                                src={img}
                                alt="brand"
                                className="img-responsive brand"
                            />
                        </div>

                        <div
                            className="text"
                            style={{
                                transform: `translate3d(0, ${scrollYOffset /
                                    18}px, 0)`,
                            }}
                        >
                            <h3>{headline}</h3>
                            <h5>{subtitle}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Content;
