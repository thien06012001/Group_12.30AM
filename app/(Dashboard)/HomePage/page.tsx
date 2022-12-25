"use client";
import React from "react";
import styles from "../../../styles/text.module.css";
import { motion } from "framer-motion";
import NavBarForInfo from "../../Component/NavBarForInfo";
type Props = {};
function page({}: Props) {
  return (
    <div className="relative z-40 mt-7 items-center justify-center">
      <div className="flex flex-row items-center justify-center">
         <motion.div 
          initial={{ 
            opacity: 0,
            x: -300
            }}
          whileInView={{opacity:1,x:-10}}
          transition={{duration:1.35}}
          viewport={{once:true}} 
          className={styles.neonText} >Team</motion.div>
        <motion.div
          initial={{ 
            opacity: 0,
            x: 300
            }}
          whileInView={{opacity:1,x:10}}
          transition={{duration:1.35}}
          viewport={{once:true}} 
          className={styles.neonText}>Name
        </motion.div> 
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
      <div className="flex flex-row mt-20">
         <motion.div 
          initial={{ 
            opacity: 0,
            y: -100
            }}
          whileInView={{opacity:1,x:-10, y:0}}
          transition={{duration:1.35}}
          viewport={{once:true}} 
          className={styles.neonText2} >Personal </motion.div>    
          <motion.div 
          initial={{ 
            opacity: 0,
            y: 100
            }}
          whileInView={{opacity:1,x:10, y:0}}
          transition={{duration:1.35}}
          viewport={{once:true}} 
          className={styles.neonText3} >Information </motion.div>
      </div>
      <div className="mt-[-200px]"><NavBarForInfo/></div>
      <div className="items-center justify-center">
      <div className="flex items-center justify-center mt-[-200px]">
        <motion.div 
            initial={{ 
              opacity: 0,
              // y: -100
              }}
            whileInView={{opacity:1,x:-10, y:0}}
            transition={{duration:1.35}}
            viewport={{once:true}} 
            className={styles.neonText2} >Group </motion.div> 
          <motion.div 
            initial={{ 
              opacity: 0,
              // y: 100
              }}
            whileInView={{opacity:1,x:10, y:0}}
            transition={{duration:1.35}}
            viewport={{once:true}} 
            className={styles.neonText3} >Process </motion.div>
        </div>
        <div className={styles.boxed2}>
          <p className={styles.content}>
            Due to everyone's dedication to completing high-quality work and monitoring each phrase and new modification, our team produced outstanding results. 
            We worked on the project as a team with effective interpersonal, planning, and execution. 
            We regularly have several meetings both face to face and online. 
            In each meeting, we discussed how each member worked with their tasks and also found what problems or new things that we need to improve or modify. 
            We collaborated well as a team, more like a group of friends than a gathering of strangers attempting to work together to do the same task. 
            Since everyone has a specialization that they are strong at, we worked as hard as we could to maximize each other's strengths to produce the greatest product we could. 
            And the only problem in communication that we mentioned in the previous proposal is the language barrier; however, we also have a solution for that. 
            At the end, our project was going well as everyone was motivated, committed their all to the task in hand, and assisted other members when needed. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
