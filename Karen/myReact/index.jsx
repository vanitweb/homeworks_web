function jam() {
    ReactDOM.render(
        <div>
            <h2>UTC +04.00 {new Date().toLocaleTimeString()}.</h2>
        </div>,
        document.getElementById("app")
    );
}
setInterval(jam, 1000);