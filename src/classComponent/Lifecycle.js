import React from "react";
import { Component } from "react";
import createConnection from "./LifecycleChat";

class Lifecycle extends Component {
  state = {
    //fix the initial value
    serverUrl: "localhost3001",
  };
  handleServerChange = (e) => {
    //arrow function
    let newServerUrl = e.target.value; //create variable to target the input value
    this.setState({
      //to update the value
      serverUrl: newServerUrl,
    });
  };

  setupConnection() {
    //set up the chat connection using createConnection, passing serverUrl as state,roomId as props
    this.connection = createConnection(this.state.serverUrl, this.props.roomId);
    this.connection.connect(); //to establish the connection to chat room.
  }

  componentDidMount() {
    //works after component is mounted
    this.setupConnection(); //sets up the chat connection when the component first loads.
  }

  destroyConnection() {
    this.connection.disConnect(); //disconnects the chat connection
    this.connection = null; //clean up the connection.
  }

  componentDidUpdate(prevProps, prevState) {
    //called after component updates
    if (
      //checks roomId or props has changed
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      //calls these two function one after another.
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    //called before the component is removed
    this.destroyConnection(); //cleans up the connection to avoid any memory leaks
  }

  render() {
    return (
      <div>
        <h2>Server URL:</h2>
        <input
          value={this.state.serverUrl} //to call initial state value
          onChange={this.handleServerChange} // update the server Url in state value
        />
        <p>welcome to the {this.props.roomId} room!</p>
      </div>
      // roomId is passed as a prop from the parent component(app.js)
    );
  }
}

export default Lifecycle;
