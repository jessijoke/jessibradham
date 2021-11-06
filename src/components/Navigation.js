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
                    <a href="#"><div className="navElement"><i class="fab fa-github"></i> Github</div></a>
                    <a href="#"><div className="navElement"><i class="fab fa-youtube"></i> Youtube</div></a>
                    <a href="#"><div className="navElement"><i class="fab fa-twitter"></i> Twitter</div></a>
                    <a href="#"><div className="navElement"><i class="fab fa-medium"></i> Blog</div></a>
                </div>
            </div>
        )
    }
}

export default Navigation;