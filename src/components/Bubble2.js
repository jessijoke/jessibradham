import React, { Component } from 'react';

class Bubble2 extends Component {
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

    // getSnapshotBeforeUpdate() {

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
    //       };
        
    //     this.ref.current.animate(
    //     [
    //         { transform: `translate(${to.x}rem, ${to.y}rem)` }
    //     ],
    //     {
    //         duration: (Math.random() + 5) * 2000, 
    //         direction: "alternate",
    //         fill: "both",
    //         iterations: Infinity,
    //         easing: "ease-in-out"
    //     }
    //     );
    // }

    getSnapshotBeforeUpdate() {
        if (this.ref.current) {
          // first
          return this.ref.current.getBoundingClientRect();
        }
        return null;
      }
     
      // below `snapshot` is whatever returned `getSnapshotBeforeUpdate`
      componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.ref.current) {
          const first = snapshot;
          // last
          const last = this.ref.current.getBoundingClientRect();
          // invert
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
          });
        }
      }
    


    render() {
        return React.cloneElement(
          this.props.children,
          { ref: this.ref },
        );
      }
}

export default Bubble2;