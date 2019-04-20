import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";

import App from "./App";

if (typeof window !== "undefined") {
    // required for smooth scrolling in safari
    smoothscroll.polyfill();
}

export default App;

if (typeof document !== "undefined") {
    const renderMethod = module.hot
        ? ReactDOM.render
        : ReactDOM.hydrate || ReactDOM.render;

    const render = Comp => {
        renderMethod(<Comp />, document.getElementById("root"));
    };

    render(App);
    if (module.hot) {
        module.hot.accept("./App", () => render(require("./App").default));
    }
}
