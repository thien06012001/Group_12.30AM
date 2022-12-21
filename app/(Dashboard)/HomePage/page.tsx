"use client";
import React from "react";
import styles from "../../../styles/text.module.css";
import { motion } from "framer-motion";
import NavBarForInfo from "../Component/NavBarForInfo";
type Props = {};
function page({}: Props) {
  return (
    <div className=" relative z-40 mt-7 items-center justify-center">
      <div className="flex flex-row items-center justify-center">
         <motion.p 
          initial={{ 
            opacity: 0,
            x: -300
            }}
          whileInView={{opacity:1,x:-10}}
          transition={{duration:1.35}}
          viewport={{once:true}} 
          className={styles.text} >Team</motion.p>
        <motion.p
          initial={{ 
            opacity: 0,
            x: 150
            }}
          whileInView={{opacity:1,x:10}}
          transition={{duration:0.5}}
          viewport={{once:true}} 
          className={styles.text2}>Name
        </motion.p>
      </div>
      <div className={styles.boxed}>
          <p className={styles.content}>
             After discussion, we decided the name for our team is 12:30AM. 
            It got its name from the simplest mistake we ever made. 
            For the second meeting, we tasked Bang with scheduling a meeting at the SGS campus. 
            The second meeting was slated to start at 12:30 on Friday, following the conclusion of class. 
            Unfortunately, Bang had scheduled it for 00:30, and none of the group members paid careful attention to the booking. 
            As a result, we realized on that Friday night that there would be no space available after 12:30. 
            Therefore, we choose to set the team name as 12:30AM as a funny and memorable memory for us. 
          </p>
      </div>
      <NavBarForInfo/>
    </div>
  );
}

export default page;
