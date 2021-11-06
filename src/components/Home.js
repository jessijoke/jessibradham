import './styles/styles.css'

import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
        this.state={}
    }
    render() {
        return(
            <div className="homeDiv">
                <div className="homeInner">
                    <div className="homeTitle">Jessica Bradham</div>
                    <div className="homeDescription">Software Developer with a background in digital media design. As a technical designer and professor of digital media design I bring a uniquely detailed and experienced perspective to every project.</div>
                </div>
            </div>
        )
    }
}

export default Home;