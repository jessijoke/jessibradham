import './styles/styles.css'

import React, { Component } from 'react'
import Bubble from './Bubble'
import Bubble2 from './Bubble2'


class Home extends Component {
    constructor() {
        super()
        this.state={}
    }

    componentDidMount() {

    }

    render() {
        return(
            <> 
                <div className="bubbleContainer">
                    
                    <Bubble />
                    <Bubble />
                    <Bubble />
                    <Bubble />
                </div>

                <div className="homeDiv">
                    <div className="homeInner">
                        <div className="homeTitle">Jessica Bradham</div>
                        <div className="homeDescription">Software Developer with a background in digital media design. As a technical designer and professor of digital media design I bring a uniquely detailed and experienced perspective to every project.</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;