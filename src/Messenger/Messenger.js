import React from "react";
import { useSelector } from "react-redux";

import "./Messenger.css";
import Chatbox from "./Chatbox/Chatbox";
const DUMMY_CHATBOXES = [
  {
    username: "martin",
    socketId: 3213123,
    messages: [],
  },
  {
    username: "test",
    socketId: 3213123,
    messages: [],
  },
];

const Messenger = () => {
  const chatboxes=useSelector((state)=>state.messenger.chatboxes);
  return (
    <div className="messenger_container">
      {chatboxes.map((chatbox) => (
        <Chatbox key={chatbox.socketId} socketId={chatbox.socketId} username={chatbox.username}/>
      ))}
    </div>
  );
};

export default Messenger;
