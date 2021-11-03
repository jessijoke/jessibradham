import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { github } from '@fortawesome/free-brands-svg-icons'
import './styles/styles.css'


import React, { Component } from 'react'

class Navigation extends Component {
    constructor() {
        super()
        this.state={}
    }
    render() {
        return(
            <div className="navBar">
                <div className="innerNav">
                    <a href="#"><div className="navElement">Home</div></a>
                    <a href="#"><div className="navElement">Works</div></a>
                    <a href="#"><div className="navElement">About</div></a>
                    <a href="#"><div className="navElement"><FontAwesomeIcon icon="fa-brands fa-github" />Github</div></a>
                    <a href="#"><div className="navElement">Youtube</div></a>
                    <a href="#"><div className="navElement">Twitter</div></a>
                    <a href="#"><div className="navElement">Blog</div></a>
                </div>
            </div>
        )
    }
}

export default Navigation;