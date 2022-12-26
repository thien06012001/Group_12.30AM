'use client'
import React from "react";
import styles from "../../styles/Info.module.css";
import goku from "../../public/assets/Goku.gif";
import jiren from "../../public/assets/Jiren.gif";
import goku2 from "../../public/assets/Goku2.gif";
import vegeta from "../../public/assets/Vegeta.gif";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function NavBarForInfo({}: Props) {
  const router = useRouter();
  return (
    <div className="flex m-0 p-0 min-h-screen bg-transparent justify-center items-center font-sans">
      <div className='w-full relative flex flex-wrap'>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
             <motion.img 
              initial={{ 
                opacity: 0,
                }}
              whileInView={{opacity:1,}}
              transition={{duration:2.5}}
              viewport={{once:true}}
              src={goku2.src} alt="" className="rounded-full w-44 h-44"/>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              <p className={styles.content1}> 
                Nguyen Thi Thu Hien <br />
                <span className={styles.wipe}>s3883260</span>  
              </p>
              <div className='flex justify-center mx-auto'>
                <Link href={'HomePage/Hien'} className={styles.check}>
                 Read more
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <motion.img
              initial={{ 
                opacity: 0,
                }}
              whileInView={{opacity:1,}}
              transition={{duration:2.5}}
              viewport={{once:true}}
              src={jiren.src} alt="" className="rounded-full w-44 h-44"/>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              <p className={styles.content1}>
                Chau Chan Thien <br /> <span className={styles.wipe}>s3975010</span> 
              </p>
              <div className='flex justify-center mx-auto'>
                <Link  className={styles.check} href={"HomePage/Thien"}>
                 Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <motion.img
              initial={{ 
                opacity: 0,
                }}
              whileInView={{opacity:1,}}
              transition={{duration:2.5}}
              viewport={{once:true}}
              src={vegeta.src} alt="" className="rounded-full w-44 h-44"/>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              <p className={styles.content1}>
                Han Yeeun <br /> <span className={styles.wipe}>s3912055</span>
              </p>
              <div className='flex justify-center mx-auto'>
                <Link className={styles.check} href={"HomePage/Yeeun"}>
                 Read more 
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <motion.img 
              initial={{ 
                opacity: 0,
                }}
              whileInView={{opacity:1,}}
              transition={{duration:2.5}}
              viewport={{once:true}}
              src={goku.src} alt="" className="rounded-full w-44 h-44"/>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              <p className={styles.content1}>
                Chau Chan Bang <br /> <span className={styles.wipe}>s3975015</span>
              </p>
              <div className='flex justify-center mx-auto'>
                <Link href={'HomePage/Bang'} className={styles.check}>
                 Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarForInfo;
