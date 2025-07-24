// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { CometChat } from '@cometchat-pro/chat';
import io from 'socket.io-client';
import './ChatWidget.css';

const appID = '2595958bbb92c7d2';
const region = 'eu';
// eslint-disable-next-line no-undef
const apiKey = process.env.REACT_APP_COMETCHAT_API_KEY;
const receiverID = 'admin790'; // The UID of the admin or support team member
const receiverType = CometChat.RECEIVER_TYPE.USER;

const socket = io('http://localhost:3030'); // Update with your server's URL and port

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            console.log('Token:', token); // Log the token

            if (token) {
                const response = await fetch('/api/user/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched user data:', data); // Log the user data
                    setUser(data);

                    CometChat.init(appID, new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build()).then(
                        () => {
                            console.log('CometChat initialized successfully');
                            console.log('User UID for login:', data.uid); // Log the uid
                            CometChat.login(data.uid, apiKey).then(
                                (user) => {
                                    console.log('Login successful:', user);
                                    setUser(user); // Ensure user is set after login
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
                } else {
                    console.log('Failed to fetch user data, response:', response);
                }
            } else {
                console.log('No token found');
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        socket.on('message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const fetchMessages = () => {
        const messagesRequest = new CometChat.MessagesRequestBuilder()
            .setUID(receiverID)
            .setLimit(50)
            .build();

        messagesRequest.fetchPrevious().then(
            (msgs) => {
                console.log('Fetched messages:', msgs);
                setMessages(msgs);
            },
            (error) => {
                console.log('Message fetching failed with error:', error);
            }
        );
    };

    const sendMessage = () => {
        if (!message) {
            console.log('Message is empty');
            return; // Prevent sending empty messages
        }
        if (!user) {
            console.log('User is not logged in');
            return;
        }

        const textMessage = new CometChat.TextMessage(receiverID, message, CometChat.MESSAGE_TYPE.TEXT, receiverType);

        CometChat.sendMessage(textMessage).then(
            (msg) => {
                console.log('Message sent successfully:', msg);
                const formattedMessage = {
                    sender: { name: user.name },
                    text: message,
                    sentAt: new Date().getTime() / 1000 // Using current timestamp
                };
                socket.emit('message', formattedMessage); // Send message via Socket.IO
                setMessages((prevMessages) => [...prevMessages, formattedMessage]);
                setMessage('');
            },
            (error) => {
                console.log('Message sending failed with error:', error);
            }
        );
    };

    return (
        <div className="chat-widget">
        {!isOpen && (
                <button className="chat-button" onClick={() => setIsOpen(true)}>
                    <i className="fa fa-comments" aria-hidden="true"></i>
                </button>
            )}
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