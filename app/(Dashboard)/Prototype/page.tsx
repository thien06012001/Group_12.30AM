'use client'
import React from 'react'
import styles from '../../../styles/text.module.css'

type Props = {}

function page({}: Props) {
  return (
    <div className=' flex flex-col items-center justify-center relative uppercase z-40  mt-7  mx-auto  '>
      <p className={styles.text2} >Prototype </p> 
    </div>
  )
}

export default page