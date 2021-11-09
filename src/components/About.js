import React, { Component } from 'react'

class About extends Component {
    constructor() {
        super()
        this.state={

        }
    }
    render(){
        return <div className="aboutSection" id="About">
            <div className="aboutDescription">
                <button onClick={()=> window.open("https://docs.google.com/document/d/1A4pYlMUMuHmZsaHD-q7hGPt_WNXYMghYFkGesNF4vXY/edit?usp=sharing")}>Resume</button>
                <div className="description">Jessica Bradham is a Software Developer living in West Michigan. When she's not coding or designing, she spends her time playing guitar, and hanging out with her two giant dogs.<br /> <br /> Email: Jessibradham@gmail.com</div>
            </div>
            <div className="aboutImage">
                <div className="Photo"></div>
            </div>
        </div>
    }
}

export default About;