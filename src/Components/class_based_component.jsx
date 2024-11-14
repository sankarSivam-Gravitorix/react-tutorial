import { Component } from "react";

class Classbasedcomponent extends Component {
  state = {
    showText: false,
    changeColor: false,
  };

  handleClick = () => {
    const { showText, changeColor } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  componentDidMount() {
    console.log("page load initally");
    const { showText, changeColor } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  }

  render() {
    const { showText, changeColor } = this.state;
    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? "green" : "black" }}>
            Class Based Component
          </h3>
        ) : null}

        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}

export default Classbasedcomponent;
