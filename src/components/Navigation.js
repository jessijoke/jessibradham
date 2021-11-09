import './styles/styles.css'


import React, { Component } from 'react'

class Navigation extends Component {
    constructor() {
        super()
        this.state={
            backgroundColor: "transparent",
            navClassName: "innerNav"
        }
    }
    listenScrollEvent = e => {
        if (window.scrollY > 100) {
          this.setState({backgroundColor: '#db1b51'})
        } else {
          this.setState({backgroundColor: 'transparent'})
        }
      }

      flipMenuBar = () => {
        if (this.state.navClassName === "innerNav") {
          this.setState({
            navClassName: "innerNav active"
          })
        } else {
          this.setState({
            navClassName: "innerNav"
          })
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render() {
        return(
            <div className="navBar" style={{backgroundColor: this.state.backgroundColor}}>
                <div className={this.state.navClassName}>
                    <div onClick={() => this.flipMenuBar()} id="menuBar" className="navElement"><i className="fas fa-bars"></i></div>
                    <a href="#Home"><div className="navElement">Home</div></a>
                    <a href="#Portfolio"><div className="navElement">Works</div></a>
                    <a href="#"><div className="navElement">About</div></a>
                    <a href="https://github.com/jessijoke" target="_blank"><div className="navElement"><i className="fab fa-github"></i> Github</div></a>
                    <a href="https://www.youtube.com/channel/UC9esGz2ZTAjUEuoNMqIFXBw" target="_blank"><div className="navElement"><i className="fab fa-youtube"></i> Youtube</div></a>
                    <a href="https://twitter.com/jessicajoyz" target="_blank"><div className="navElement"><i className="fab fa-twitter"></i> Twitter</div></a>
                    <a href="https://jessijokes.medium.com/" target="_blank"><div className="navElement"><i className="fab fa-medium"></i> Blog</div></a>
                </div>
            </div>
        )
    }
}

export default Navigation;