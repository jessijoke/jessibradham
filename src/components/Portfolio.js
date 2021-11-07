import React, { Component } from 'react'
import './styles/styles.css'

class Portfolio extends Component {
    constructor(props) {
        super()
        this.state={
            activeProject: "cultureFit"
        }
    }

    switchProject = () => {
        switch(this.state.activeProject) {
            case "cultureFit":
                return (
                    <div className="projectContainer">
                        <div className="column1">
                            <div className="videoOrImage">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/oPuyAU9sP6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="projectDescription">
                                <h3>CultureFit</h3>
                                <p>I designed and programmed Culturefit over the course of about 2 weeks as my final project for Flatiron School. Culturefit is an application that uses Rails as an API as the backend, and React & Redux for the frontend. The program allows companies to utilize dynamic forms to create screener surveys to look for certain attributes in potential employees. There is also an option to leave messages on a message board that utilizes Redux Thunk to post messages asynchronously. People who sign up as Job Seekers can view and take the available surveys, or post on the message board.</p>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="buttonContainer">
                                <button className="github"><i className="fab fa-github"></i> Github Front</button>
                                <button className="github"><i className="fab fa-github"></i> Github Back</button>
                                <button className="medium"><i className="fab fa-medium"></i> Blog</button>
                            </div>
                            <div>
                            <h4>Technology Used:</h4>
                            <p>React • Redux • Redux Thunk • Ruby • Rails as an API • JWT Tokens</p>
                            </div>
                            <div className="screenshots">
                            </div>
                        </div>
                    </div>
                    );
            default:
                return (<div>culturefit</div>)
        }
    }


    render() {
        return(
            <div className="portfolioContainer">
                <div className="portfolioInner">
                    <h2>Software Development</h2>
                </div>
                <div className="projectIconContainer">
                    <div className="projectIcons">
                        <div className="projectIcon cultureFit">
                            <div name="cultureFit" className="projectIconOverlay">CultureFit</div>
                        </div>
                        <div className="projectIcon airSpace">
                            <div name="airSPace" className="projectIconOverlay">Air & Space Museum</div>
                        </div>
                        <div className="projectIcon pokemon">
                            <div name="pokeSim" className="projectIconOverlay">Pokemon Simulator</div>
                        </div>
                        <div name="mediGrowth" className="projectIcon mediGrowth">
                            <div className="projectIconOverlay">MediGrowth</div>
                        </div>
                        <div className="projectIcon wheel">
                            <div name="wheel" className="projectIconOverlay">Wheel of Fortune</div>
                        </div>
                        <div className="projectIcon pizza">
                            <div name="pizza" className="projectIconOverlay">Pizza Savant</div>
                        </div>
                    </div>
                </div>
                <div className="projectHighlight">
                {this.switchProject()}
                </div>
            </div>
        )
    }
}

export default Portfolio;