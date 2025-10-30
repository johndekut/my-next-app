import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/ninja.png'

export default function Navbar() {
  return (
    <nav>
      <Image
      src = {Logo}
      alt= "ninja jonte helpdesk logo"
      width={70}
      height={70}
      quality={75}
      //blur effect before the image loads
      placeholder='blur'
      />
      <h2> jONTE HELP DESK</h2>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
