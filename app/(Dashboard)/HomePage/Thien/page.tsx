'use client'
import { motion } from 'framer-motion';
import React from 'react'
import styles from "../../../../styles/text.module.css";
import jiren from '../../../../public/assets/Jiren.gif'

type Props = {}

function page({}: Props) {
  return (
    <div className=' relative z-40 mt-7  items-center justify-center'>
      <div className="flex  items-center justify-center">
        <motion.div 
            initial={{ 
              opacity: 0,
              x: -300
              }}
            whileInView={{opacity:1,x:-10, y:0}}
            transition={{duration:1.35}}
            viewport={{once:true}} 
            className={styles.neonText2} >Personal </motion.div>    
            <motion.div 
            initial={{ 
              opacity: 0,
              x: 300
              }}
            whileInView={{opacity:1,x:10, y:0}}
            transition={{duration:1.35}}
            viewport={{once:true}} 
            className={styles.neonText3} >Information </motion.div>
      </div>
      <div className='flex items-center text-center justify-center mt-10 w-full '>
        <img src={jiren.src} alt="" className='rounded-full w-56 h-56' />
      </div>
      
      <div className={styles.boxed}>
          <p className={styles.content}>
            My name is Chau Chan Thien , my student ID is S3975010. 
            I'm a freshman of Information Technology at RMIT.
            However, I studied in another school in Information Technology major for a few years; therefore, I also already have knowledge and experience about this area. 
            And I'm a child of the middle region of VietNam but I grew up in Ho Chi Minh city, so I can be considered to be a city boy. 
            About my dream, when I was a high-school student, I used to want to be a chef or teacher since I feel relaxed and happy when doing this work. 
            However, in my secondary school time, I had a chance to participate in a lego robot competition and luckily became the champion. 
            From that success, I became a coach for a robot club when I was 16 years old. 
            And day-by-day, I feel I had a huge passion for technology, especially coding web pages; therefore, besides the time I studied in the school, I also had gained a lot of knowledge and experience from learning by myself. 
            At the moment, I already had knowledge about Nodejs, Javascript, Html, Css. etc. So I feel a little confident on making a website. 
            That is why I am the main developer of the project. 
            However, this project requires a lot of functions; moreover, designing a webpage is very hard because I'm not good enough to create all of the functions that other members suggest.
            All of that would be my significant obstacle. But I think every problem also has solutions and I will try my best to get high performance for this group and also have solid knowledge for my future career. 
            Besides that, the interesting thing about our group project is that it used to be my dream and the process of doing this project is helpful for me since I am able to know more about nutrient knowledge to take care of myself and protect my health better.
          </p>
      </div>
      <div className="items-center justify-center mt-20">
      <div className='flex items-center justify-center'>
        <motion.div 
              initial={{ 
                opacity: 0,
                x: -300
                }}
              whileInView={{opacity:1,x:-10, y:0}}
              transition={{duration:1.35}}
              viewport={{once:true}} 
              className={styles.neonText2} >Career </motion.div>    
              <motion.div 
              initial={{ 
                opacity: 0,
                x: 300
                }}
              whileInView={{opacity:1,x:10, y:0}}
              transition={{duration:1.35}}
              viewport={{once:true}} 
              className={styles.neonText3} >Plan </motion.div>
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
  )
}

export default page