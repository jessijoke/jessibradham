const Screenshot = (props) => {
    return <div className="screenshotOverlay">
    <div className="closeWindow" onClick={() => props.closeWindow()}>X</div>
        <div className="screenshotContainer" style={{backgroundImage: `url(${props.currentScreenshot})`}}></div>
    </div>
}

export default Screenshot;