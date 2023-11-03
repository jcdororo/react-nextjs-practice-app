'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function RegisterBtn() {
  return (
    <Link href="/register" >
      <button className='m-5'>회원가입</button>
    </Link>

  )
}