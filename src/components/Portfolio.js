import React, { Component } from 'react'
import './styles/styles.css'
import ScreenShot1 from '../images/projects/culturefit/culturefit1.png'
import ScreenShot2 from '../images/projects/culturefit/culturefit2.png'
import ScreenShot3 from '../images/projects/culturefit/culturefit3.png'
import ScreenShot4 from '../images/projects/culturefit/culturefit4.png'
import ScreenShot5 from '../images/projects/culturefit/culturefit5.png'
import ScreenShot6 from '../images/projects/culturefit/culturefit6.png'
import ScreenShot7 from '../images/projects/culturefit/culturefit7.png'
import ScreenShot8 from '../images/projects/culturefit/culturefit8.png'
import ScreenShot9 from '../images/projects/culturefit/culturefit9.png'

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
                    <div className="projectContainer" id="Portfolio">
                        <div className="column1">
                            <div className="videoOrImage">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/oPuyAU9sP6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="projectDescription">
                                <h3>CultureFit</h3>
                                <p>I designed and programmed Culturefit over the course of about 3 weeks as my final project for Flatiron School. Culturefit is an application that uses Rails as an API as the backend, and React & Redux for the frontend. The program allows companies to utilize dynamic forms to create screener surveys to look for certain attributes in potential employees. There is also an option to leave messages on a message board that utilizes Redux Thunk to post messages asynchronously. People who sign up as Job Seekers can view and take the available surveys, or post on the message board.</p>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="buttonContainer">
                                <button className="github" onClick={()=> window.open("https://github.com/jessijoke/culturefit-front", "_blank")}><i className="fab fa-github"></i> Frontend</button>
                                <button className="github" onClick={()=> window.open("https://github.com/jessijoke/culturefit", "_blank")}><i className="fab fa-github"></i> Backend</button>
                                <button className="medium" onClick={()=> window.open("https://jessijokes.medium.com/finding-a-perfect-fit-with-react-74ea6a5b6cc5", "_blank")}><i className="fab fa-medium"></i> Blog</button>
                            </div>
                            <div>
                            <h4>Technology Used:</h4>
                            <p>React • Redux • Redux Thunk  • SASS • Ruby • Rails as an API • JWT Tokens • ActiveRecord • Bcrypt • CORS</p>
                            </div>
                            <div className="screenshots">
                                <div className="screenshot"><img src={ScreenShot1} alt="A screenshot of culturefit" /><img src={ScreenShot2} alt="A screenshot of culturefit" /><img src={ScreenShot3} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot4} alt="A screenshot of culturefit" /><img src={ScreenShot5} alt="A screenshot of culturefit" /><img src={ScreenShot6} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot7} alt="A screenshot of culturefit" /><img src={ScreenShot8} alt="A screenshot of culturefit" /><img src={ScreenShot9} alt="A screenshot of culturefit" /></div>
                            </div>
                        </div>
                    </div>
                    );
            case "airSpace":
                return (
                    <div className="projectContainer">
                        <div className="column1">
                            <div className="videoOrImage">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/YGCjb2Gyb7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="projectDescription">
                                <h3>Air and Space Museum</h3>
                                <p>(Only the frontend is live) I designed and programmed Air and Space Museum over the course of about 2 weeks. Air and Space Museum uses Rails as an API on the backend, and vanilla Javascript for the frontend to create a single page application. It also heavily utilizes CSS via SASS to create CSS animations. The program allows people to reserve tickets for the museum, along with the museum's theater and cafe. It also utilizes Create.js to power a drag and drop html5 canvas (mobile friendly) javascript educational puzzle that helps you learn the order of the planets in the solar system by placing them in order.</p>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="buttonContainer">
                                <button className="medium" onClick={()=> window.open("https://jessijoke.github.io/space/", "_blank")}><i className="fa fa-globe"></i> Website</button>
                                <button className="github" onClick={()=> window.open("https://github.com/jessijoke/space", "_blank")}><i className="fab fa-github"></i> Github</button>
                                <button className="medium" onClick={()=> window.open("https://jessijokes.medium.com/parallax-animations-solar-system-puzzles-and-polymorphic-associations-ba0e96c201d5", "_blank")}><i className="fab fa-medium"></i> Blog</button>
                            </div>
                            <div>
                            <h4>Technology Used:</h4>
                            <p>Vanilla Javascript • Create.js • SASS • Flexbox • Ruby • Polymorphic Associations • Rails as an API • ActiveRecord • FastJSON Serializer • CORS</p>
                            </div>
                            <div className="screenshots">
                                <div className="screenshot"><img src={ScreenShot1} alt="A screenshot of culturefit" /><img src={ScreenShot2} alt="A screenshot of culturefit" /><img src={ScreenShot3} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot4} alt="A screenshot of culturefit" /><img src={ScreenShot5} alt="A screenshot of culturefit" /><img src={ScreenShot6} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot7} alt="A screenshot of culturefit" /><img src={ScreenShot8} alt="A screenshot of culturefit" /><img src={ScreenShot9} alt="A screenshot of culturefit" /></div>
                            </div>
                        </div>
                    </div>
                    );
            case "pokeSim":
                return (
                    <div className="projectContainer">
                        <div className="column1">
                            <div className="videoOrImage">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/n9fnJrin_lM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="projectDescription">
                                <h3>Pokemon Simulator</h3>
                                <p>I designed and programmed Pokemon Simulator over the course of about 3 weeks. Pokemon Simulator uses Ruby on Rails along with the pokeAPI, Sass, and Vanilla Javascript to create a simulated Pokemon game where you can buy pokeballs, capture pokemon (in a mini javascript game based on the pokemon's level, and the pokeball you use), play a whack a diglet game (made with Create.js), send pokemon to the pokeprofessor for money, create custom pokemon teams, meet other users on the forum, and check out the user's profiles.</p>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="buttonContainer">
                            <button className="medium" onClick={()=> window.open("https://pokemonsimulator.herokuapp.com/", "_blank")}><i className="fa fa-globe"></i> Website</button>
                            <button className="github" onClick={()=> window.open("https://github.com/jessijoke/pokemonsimulator", "_blank")}><i className="fab fa-github"></i> Github</button>
                            <button className="medium" onClick={()=> window.open("https://jessijokes.medium.com/biting-off-more-than-i-can-chew-a-lifestyle-ad966a9aa408", "_blank")}><i className="fab fa-medium"></i> Blog</button>
                            </div>
                            <div>
                            <h4>Technology Used:</h4>
                            <p>Vanilla Javascript • Create.js • SASS • Flexbox • Ruby • Ruby on Rails • ActiveRecord • BCrypt • OmniAuth • httparty • Pokeapi </p>
                            </div>
                            <div className="screenshots">
                                <div className="screenshot"><img src={ScreenShot1} alt="A screenshot of culturefit" /><img src={ScreenShot2} alt="A screenshot of culturefit" /><img src={ScreenShot3} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot4} alt="A screenshot of culturefit" /><img src={ScreenShot5} alt="A screenshot of culturefit" /><img src={ScreenShot6} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot7} alt="A screenshot of culturefit" /><img src={ScreenShot8} alt="A screenshot of culturefit" /><img src={ScreenShot9} alt="A screenshot of culturefit" /></div>
                            </div>
                        </div>
                    </div>
                    );
            case "mediGrowth":
                return (
                    <div className="projectContainer">
                        <div className="column1">
                            <div className="videoOrImage">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/juz9LJxcIYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="projectDescription">
                                <h3>MediGrowth</h3>
                                <p>I designed and programmed MediGrowth over the course of about 2 weeks. Medigrowth uses Sinatra on the backend, and CSS and vanilla Javascript for the frontend. Medigrowth utilizes the Chart.js library through the chartkick gem to allow users to track their medical conditions or whether new medications are making an impact on certain conditions by allowing them to log daily ratings, then displaying those ratings by condition via charts.</p>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="buttonContainer">
                            <button className="medium" onClick={()=> window.open("https://medigrowth.herokuapp.com/", "_blank")}><i className="fa fa-globe"></i> Website</button>
                            <button className="github" onClick={()=> window.open("https://github.com/jessijoke/medigrowth", "_blank")}><i className="fab fa-github"></i> Github</button>
                            <button className="medium" onClick={()=> window.open("https://jessijokes.medium.com/improving-health-with-a-simple-crud-app-c97a3e9bc98", "_blank")}><i className="fab fa-medium"></i> Blog</button>
                            </div>
                            <div>
                            <h4>Technology Used:</h4>
                            <p>Vanilla Javascript • Chart.js • Chartkick • CSS • Flexbox • Sinatra • Activerecord • Sinatra-Flash • Bcrypt • Rake • Groupdate </p>
                            </div>
                            <div className="screenshots">
                                <div className="screenshot"><img src={ScreenShot1} alt="A screenshot of culturefit" /><img src={ScreenShot2} alt="A screenshot of culturefit" /><img src={ScreenShot3} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot4} alt="A screenshot of culturefit" /><img src={ScreenShot5} alt="A screenshot of culturefit" /><img src={ScreenShot6} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot7} alt="A screenshot of culturefit" /><img src={ScreenShot8} alt="A screenshot of culturefit" /><img src={ScreenShot9} alt="A screenshot of culturefit" /></div>
                            </div>
                        </div>
                    </div>
                    );
            case "wheel":
                return (
                    <div className="projectContainer">
                        <div className="column1">
                            <div className="videoOrImage">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/TxIDgLMs5To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="projectDescription">
                                <h3>Wheel of Fortune CLI App</h3>
                                <p>I designed and programmed the Wheel of Fortune Command Line Application over the course of about 2 weeks. Wheel of Fortune is made with Ruby, it utilizes the tty-toolkit gem to create an organized user inteface in the command line, and the catpix gem to print images in the command line. It also uses the colorize gem to incorporate color into the application, pulls puzzles from the quote garden API, and uses a regex to turn them into a Wheel of Fortune puzzle.</p>
                            </div>
                        </div>
                        <div className="column2">
                            <div className="buttonContainer">
                            <button className="github" onClick={()=> window.open("https://github.com/jessijoke/wheel-of-fortune", "_blank")}><i className="fab fa-github"></i> Github</button>
                            <button className="medium" onClick={()=> window.open("https://jessijokes.medium.com/wheel-of-fortune-building-my-first-ruby-app-1723d1ff35c4", "_blank")}><i className="fab fa-medium"></i> Blog</button>
                            </div>
                            <div>
                            <h4>Technology Used:</h4>
                            <p>Ruby • Catpix • Tty-toolkit • Colorize • Rmagick • Imagemagick • Regex</p>
                            </div>
                            <div className="screenshots">
                                <div className="screenshot"><img src={ScreenShot1} alt="A screenshot of culturefit" /><img src={ScreenShot2} alt="A screenshot of culturefit" /><img src={ScreenShot3} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot4} alt="A screenshot of culturefit" /><img src={ScreenShot5} alt="A screenshot of culturefit" /><img src={ScreenShot6} alt="A screenshot of culturefit" /></div>
                                <div className="screenshot"><img src={ScreenShot7} alt="A screenshot of culturefit" /><img src={ScreenShot8} alt="A screenshot of culturefit" /><img src={ScreenShot9} alt="A screenshot of culturefit" /></div>
                            </div>
                        </div>
                    </div>
                    );
            default:
                return (<div>culturefit</div>)
        }
    }


    setActiveProject = (currentProject) => {
        this.setState({
            activeProject: currentProject
        })
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
                            <div onClick={() => this.setActiveProject("cultureFit")} className="projectIconOverlay">CultureFit</div>
                        </div>
                        <div className="projectIcon airSpace">
                            <div onClick={() => this.setActiveProject("airSpace")} className="projectIconOverlay">Air & Space Museum</div>
                        </div>
                        <div className="projectIcon pokemon">
                            <div onClick={() => this.setActiveProject("pokeSim")} className="projectIconOverlay">Pokemon Simulator</div>
                        </div>
                        <div name="mediGrowth" className="projectIcon mediGrowth">
                            <div onClick={() => this.setActiveProject("mediGrowth")} className="projectIconOverlay">MediGrowth</div>
                        </div>
                        <div className="projectIcon wheel">
                            <div onClick={() => this.setActiveProject("wheel")} className="projectIconOverlay">Wheel of Fortune</div>
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