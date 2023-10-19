import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import TaskBoard from "./components/TaskBoard";
import socket from "./socket";

const App = () => {
  const socket = new Socket("http://localhost:3000");

  return (
    <Router>
      <Route path="/chat">
        <ChatRoom socket={socket} />
      </Route>
      <Route path="/task">
        <TaskBoard socket={socket} />
      </Route>
    </Router>
  );
};

export default App;