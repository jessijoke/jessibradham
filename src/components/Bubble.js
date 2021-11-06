import React, { Component } from 'react';

class Bubble extends Component {
    constructor() {
        super()
        this.state={
           ballLeft: `${Math.floor(Math.random() * 80)}vw`,
           ballTop: `${Math.floor(Math.random() * 80)}vh`,
           ballTransform: `scale(${Math.random()})`,
           ballWidthAndHeight: `${(Math.floor(Math.random() * 30) + 5)}em`,
           ballDuration: (Math.random() + 5) * 2000
        }

        this.ref = React.createRef();
    }

    getSnapshotBeforeUpdate() {

        let numX = Math.random() * 20;
        if (numX % 0 === 0) {
          numX = numX - (numX*2);
        }
        let numY = Math.random() * 20;
        if (numY % 0 === 0) {
          numY = numY - (numY*2);
        }

        let to = {
            x: Math.random() * (this.state.ballWidthAndHeight % 2 === 0 ? -11 : (numX)),
            y: Math.random() * (numY)
          };
        
        this.ref.current.animate(
        [
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 5) * 2000, 
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
        );
    }

    // setBallTransform = () => {
    //     let numX = Math.random() * 20;
    //     if (numX % 0 === 0) {
    //       numX = numX - (numX*2);
    //     }
    //     let numY = Math.random() * 20;
    //     if (numY % 0 === 0) {
    //       numY = numY - (numY*2);
    //     }

    //     let to = {
    //         x: Math.random() * (this.state.ballWidthAndHeight % 2 === 0 ? -11 : (numX)),
    //         y: Math.random() * (numY)
    //     };

    //     let anim = this.animate(
    //         [
    //           { transform: `translate(${to.x}rem, ${to.y}rem)` }
    //         ],
    //         {
    //           duration: (Math.random() + 5) * 2000, 
    //           direction: "alternate",
    //           fill: "both",
    //           iterations: Infinity,
    //           easing: "ease-in-out"
    //         }
    //       );

    //     console.log(`translate(${to.x}rem, ${to.y}rem)`)
    //     return (`translate(${to.x}rem, ${to.y}rem)`)
    // }


    render() {
        console.log(
            `Ball Left${this.state.ballLeft}
            Ball Top${this.state.ballTop}
            Ball Transform${this.state.ballTransform}
            Ball Width and Height${this.state.ballWidthAndHeight}
            `
        )
        return(
            <div className="ball" style={{left: this.state.ballLeft, top: this.state.ballTop, transform: this.state.ballTransform, width: this.state.ballWidthAndHeight, height: this.state.ballWidthAndHeight}}>
            
            </div>
        )
    }
}

export default Bubble;