"use strict";

function tick() {
    ReactDOM.render(React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "UTC +04.00 ",
            new Date().toLocaleTimeString(),
            "."
        )
    ), document.getElementById("app"));
}
setInterval(tick, 1000);
