import React from "react";
import brandCoverUrl from "./brand.jpg";

const TopicGrid = () => {
    return (
        <div style={styles.grid} className="topic-grid grid">
            <div
                style={styles.element}
                className="grid-element show-when-in-viewport"
            >
                <img
                    src={brandCoverUrl}
                    alt="brand"
                    className="img-responsive"
                />
            </div>

            <div
                style={styles.element}
                className="grid-element show-when-in-viewport"
            >
                <img
                    src={brandCoverUrl}
                    alt="brand"
                    className="img-responsive"
                />
            </div>
        </div>
    );
};

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "100px 0",
    },
    element: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        height: "420px",
        paddingBottom: "20px",
    },
};

export default TopicGrid;
