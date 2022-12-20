'use client'
import React from 'react'
import styles from '../../../styles/text.module.css'

type Props = {}

function page({}: Props) {
  return (
   <div className='relative flex flex-col items-center justify-center uppercase z-40 mt-7 mx-auto'>
    <p className={styles.text2} >Project </p> 
  </div>
  )
}

export default page