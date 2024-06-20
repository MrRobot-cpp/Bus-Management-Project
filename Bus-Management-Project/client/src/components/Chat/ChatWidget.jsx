// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { CometChat } from '@cometchat-pro/chat';
import './ChatWidget.css';

const appID = 'YOUR_APP_ID';
const region = 'YOUR_APP_REGION';
const apiKey = 'YOUR_API_KEY';
const receiverID = 'ADMIN_UID'; // The UID of the admin or support team member
const receiverType = CometChat.RECEIVER_TYPE.USER;

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const response = await fetch('/api/user/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setUser(data);

                CometChat.init(appID, new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build()).then(
                    () => {
                        CometChat.login(data.uid, apiKey).then(
                            (user) => {
                                console.log('Login successful:', user);
                                fetchMessages();
                            },
                            (error) => {
                                console.log('Login failed with exception:', error);
                            }
                        );
                    },
                    (error) => {
                        console.log('CometChat initialization failed with error:', error);
                    }
                );
            }
        };
        fetchUser();
    }, []);

    const fetchMessages = () => {
        const messagesRequest = new CometChat.MessagesRequestBuilder()
            .setUID(receiverID)
            .setLimit(50)
            .build();

        messagesRequest.fetchPrevious().then(
            (msgs) => {
                setMessages(msgs);
            },
            (error) => {
                console.log('Message fetching failed with error:', error);
            }
        );
    };

    const sendMessage = () => {
        const textMessage = new CometChat.TextMessage(receiverID, message, CometChat.MESSAGE_TYPE.TEXT, receiverType);

        CometChat.sendMessage(textMessage).then(
            (msg) => {
                setMessages((prevMessages) => [...prevMessages, msg]);
                setMessage('');
            },
            (error) => {
                console.log('Message sending failed with error:', error);
            }
        );
    };

    return (
        <div className="chat-widget">
            <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
                Chat
            </button>
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h4>Chat with Support</h4>
                        <button className="close-button" onClick={() => setIsOpen(false)}>X</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
                                <strong>{msg.sender.name}: </strong> {msg.text}
                                <div className="timestamp">{new Date(msg.sentAt * 1000).toLocaleString()}</div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message"
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
