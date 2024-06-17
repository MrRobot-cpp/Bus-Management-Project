import { useState } from "react";
import styles from "./BubbleChat.module.css";

function BubbleChat(props) {
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState("student");
  const [messages, setMessages] = useState([
    { text: "hi", type: "student" },
    { text: "hi", type: "admin" },
    { text: "hi", type: "driver" },
    { text: "I'm at stop3 ffasdasdaadadadasddadadad", type: "student" },
    { text: "I will be there in 5 min blalalala", type: "driver" },
    { text: "I will be there in 5 min blalalala", type: "driver" },
    { text: "I will be there in 5 min blalalala", type: "driver" },
    { text: "I will be there in 5 min blalalala", type: "driver" },  
    { text: "I will be there in 5 min blalalala", type: "driver" },

  ]);

  // eslint-disable-next-line react/prop-types
  const {onQuery} = props

  const handleOnQuery = () => {
    return () => {
        onQuery(toggle);
    };
};
  // eslint-disable-next-line no-unused-vars
  const handleTypeBtn = (type) => {return type}

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleSendButton = () => {
    const newMessage = { text: inputValue, type: "driver" };
    setMessages([...messages, newMessage]);
    setInputValue(""); // Clear input value after sending message
};



  const handleToggle = () => {
    setToggle(!toggle);
    handleOnQuery()
  };

  const meassageStyle = (type) => {
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
    animation: toggle
      ? "inflate 0.5s ease-in-out reverse"
      : "inflate 0.5s ease-in-out forward",
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
                (
                <div
                  className={styles["small-chat-bubble-message-container"]}
                  key={index}
                  style={meassageStyle(message.type)}
                >
                  <div
                    className={styles["small-chat-bubble"]}
                    style={meassageStyle(message.type)}
                  >
                    <h5>{message.type}</h5>
                    {message.text}
                  </div>
                </div>)
              ))}
            </div>

            <div className={styles["message-container"]}>
              <input
                type="text"
                value={inputValue}
                placeholder="  Message"
                onChange={handleChange}/>
              <button onClick={handleSendButton}>
              <i className="far fa-comments"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BubbleChat;
