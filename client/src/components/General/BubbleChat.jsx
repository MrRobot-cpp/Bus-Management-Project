import { useState, useEffect } from "react";
import io from 'socket.io-client';
import styles from "./BubbleChat.module.css";

function BubbleChat() {
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = io('http://localhost:3030'); // Replace with your server URL

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      // Close socket connection on component unmount
      socket.disconnect();
    };
  }, [socket]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendButton = () => {
    // Emit a message event to the server
    socket.emit('message', { text: inputValue, type: "driver" });
    setInputValue(""); // Clear input value after sending message
  };

  const messageStyle = (type) => {
    if (type === "student" || type === "admin") {
      return {
        justifyContent: "flex-start",
        textAlign: "left",
      };
    } else {
      return {
        justifyContent: "flex-end",
        textAlign: "right",
      };
    }
  };

  const animation = {
    animation: toggle ? "inflate 0.5s ease-in-out reverse" : "inflate 0.5s ease-in-out forward",
    transform: toggle ? "scale(1)" : "scale(0)",
    visibility: toggle ? "visible" : "hidden",
  };

  return (
    <>
      <div className={styles["chat-container"]}>
        <div className={styles["chat-btn-container"]}>
          <button className={styles["chat-btn"]} onClick={handleToggle}>
            <i className="fa-regular fa-comment" />
          </button>
        </div>

        <div className={styles["corner-container"]}>
          <div className={styles["chat-bubble"]} style={animation}>
            <div className={styles["btn-container"]}>
              <button className={styles["student-btn"]} >students</button>
              <button className={styles["admin-btn"]} >admins</button>
            </div>

            <div className={styles["small-chat-bubble-container"]}>
              {messages.map((message, index) => (
                <div className={styles["small-chat-bubble-message-container"]} key={index} style={messageStyle(message.type)}>
                  <div className={styles["small-chat-bubble"]} style={messageStyle(message.type)}>
                    <h5>{message.type}</h5>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles["message-container"]}>
              <input type="text" value={inputValue} placeholder="  Message" onChange={handleChange} />
              <button onClick={handleSendButton}>
                <i className="far fa-comments"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BubbleChat;
