'use client'
import React from 'react'
import styles from '../../../styles/NavBar.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
type Props = {}

function NavBar({}: Props) {
  const router = useRouter()
  return (
    <div className={styles.nav}>
        <Link href={'/HomePage'} className={styles.button}>Profiles</Link>
        <Link href={'/Tools'} className={styles.button}>Tools</Link>
        <Link href={'/Project'} className={styles.button}>Project</Link>
        <Link href={'/Skills'} className={styles.button}>Skills/Jobs</Link>
        <Link href={'/Prototype'} className={styles.button}>Prototype</Link>
        <Link href={'/Reflection'} className={styles.button}>Reflection</Link>
    </div>
  )
}

export default NavBar