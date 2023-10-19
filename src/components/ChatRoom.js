import React, { useState, useEffect } from "react";
import { socket } from "../socket";

const ChatRoom = ({ socket, roomId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [socket]);

  const sendMessage = (message) => {
    socket.emit("message", { message, roomId });
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Type your message here..."
        onChange={(e) => sendMessage(e.target.value)}
      />
    </div>
  );
};

export default ChatRoom;