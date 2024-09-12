import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    return <div>
      <p>Hello,{this.props.name} </p>
    </div>;
  }
}
export default Welcome;

//   class Welcome -> Welcome is the sub-class of Component(child component)

//  extends -> keyword

// render -> used to display the content on the screen

// return -> it returns the content on the screen

// <h1> -> heading tag

// {this.props.name} -> used to receive info. by props from its parent component
