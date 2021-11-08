import './styles/styles.css'

import React, { Component } from 'react'

import Bubble from './Bubble'
import Bubble2 from './Bubble2'


class Home extends Component {
    constructor() {
        super()
        this.state={
           ballLeft: `${Math.floor(Math.random() * 80)}vw`,
           ballTop: `${Math.floor(Math.random() * 80)}vh`,
           ballTransform: `scale(${Math.random()})`,
           ballWidthAndHeight: `${(Math.floor(Math.random() * 30) + 5)}em`,
           ballDuration: (Math.random() + 5) * 2000
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <> 
                {/*<div className="bubbleContainer">
                    
                    <Bubble2>
                        <div className="ball" style={{left: this.state.ballLeft, top: this.state.ballTop, transform: this.state.ballTransform, width: this.state.ballWidthAndHeight, height: this.state.ballWidthAndHeight}} />
                    </Bubble2>
                </div>*/}

                <div className="homeDiv" id="Home">
                    <div className="homeInner">
                        <div className="homeTitle">Jessica Bradham</div>
                        <div className="homeDescription">Software Developer with a background in digital media design. As a technical designer and professor of digital media design I bring a uniquely detailed and experienced perspective to every project.</div>
                        <div className="buttons">
                            <button className="gitHub" onClick={()=> window.open("https://github.com/jessijoke", "_blank")}>
                                <i className="fab fa-github"></i> Github
                            </button>
                            <button className="youTube" onClick={()=> window.open("https://www.youtube.com/channel/UC9esGz2ZTAjUEuoNMqIFXBw", "_blank")}>
                            <i className="fab fa-youtube"></i> Youtube
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;