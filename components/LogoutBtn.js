'use client'

import { signOut } from 'next-auth/react'
/*
export default function LogoutBtn() {
  return (
    <button onClick={()=>{signOut()}}>로그아웃</button>

  )
}
*/
import React from 'react'

const LogoutBtn = () => {
  return (
    <button onClick={()=>{signOut()}}>로그아웃</button>  
  )
}

export default LogoutBtn