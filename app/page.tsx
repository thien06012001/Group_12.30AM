"use client";
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function page({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Welcome to our group website',
      "Our group is 12:30 AM group", 
      "On the way"
    ],
    loop: true,
    delaySpeed:2000,
  })
  return (
    <div className='welcome_page'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
        <span className='mr-3 p-0'>
          {text} <Cursor cursorColor='white' />
        </span>
                
        <Link href={'HomePage'} className='button'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get Started 
        </Link>
      </div>
    </div>
  )
}

export default page