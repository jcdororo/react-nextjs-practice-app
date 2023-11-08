'use client'
// pages/index.js

import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const socket = io('http://localhost:3001'); // 서버 주소에 맞게 수정

  useEffect(() => {
    socket.on('connect', () => {
      console.log('서버에 연결되었습니다.');
    });

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on('disconnect', () => {
      console.log('서버와의 연결이 끊어졌습니다.');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit('chat message', messageInput);
    setMessageInput('');
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>보내기</button>
    </div>
  );
}
