'use client'


import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

const Socket = () => {

  useEffect(()=>{
    const socket = io('http://localhost:3001'); // 소켓 서버 주소

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('message', (data) => {
      console.log('Received message:', data);
    });

    return () => {
      socket.disconnect(); // 컴포넌트 언마운트 시 소켓 연결 해제
    };
  },[])
  
  const handleClick = () => {
    console.log('클릭됨')
    socket.send('hi')
    socket.emit('message', 'hi');

  }

  
  return (
    <button  onClick={handleClick}>소켓전송</button>
  )
}

export default Socket