'use client'
import React from 'react'
import styles from "../../../styles/Info.module.css";
import goku from '../../../public/assets/Goku.gif'
import jiren from '../../../public/assets/Jiren.gif'
import goku2 from '../../../public/assets/Goku2.gif'
import vegeta from '../../../public/assets/Vegeta.gif'
import { useRouter } from 'next/navigation'

type Props = {}

function NavBarForInfo({}: Props) {
  const router = useRouter();
  return (
    <div className={styles.body}>
        <div className='flex'>
          <div className={styles.gallery}>
            <div>
              <h1 className={styles.h1}>
                <span className={styles.span1}>Jiren</span>  
              </h1>
              <img onClick={() => router.push('/HomePage/Thien')} src={jiren.src} alt="" className='h-full w-full'/>
            </div>
            <div>
              <h1 className={styles.h1}>
                  <span className={styles.span2}>Goku</span>
              </h1>
              <img onClick={() => router.push('/HomePage/Bang')} src={goku.src} alt="" className='h-full w-full'/> 
            </div>
          </div>

          <div className={styles.gallery}>
            <div>
              <h1 className={styles.h1}>
                <span className={styles.span3}>Goku2</span>  
              </h1>
              <img onClick={() => router.push('/HomePage/Hien')} src={goku2.src} alt="" className='h-full w-full'/>
            </div>
            <div>
              <h1 className={styles.h1}>
                  <span className={styles.span4}>Vegetable</span>
              </h1>
              <img onClick={() => router.push('/HomePage/Yeeun')} src={vegeta.src} alt="" className='h-full w-full'/> 
            </div>
          </div>   
        </div>
    </div>
  )
}

export default NavBarForInfo