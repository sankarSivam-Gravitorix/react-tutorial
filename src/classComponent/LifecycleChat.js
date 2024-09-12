import React from "react";

function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log(
        'Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disConnect() {
      console.log(
        'disConnecting from "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
  };
}
export default createConnection;
