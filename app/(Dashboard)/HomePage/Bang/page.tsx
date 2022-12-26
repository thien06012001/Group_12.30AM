"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../../styles/text.module.css";
import goku from "../../../../public/assets/Goku.gif";

type Props = {};

function page({}: Props) {
  return (
    <div className="relative z-40 mt-7">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -300,
          }}
          whileInView={{ opacity: 1, x: -10, y: 0 }}
          transition={{ duration: 1.35 }}
          viewport={{ once: true }}
          className={styles.neonText2}
        >
          Personal
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 300,
          }}
          whileInView={{ opacity: 1, x: 10, y: 0 }}
          transition={{ duration: 1.35 }}
          viewport={{ once: true }}
          className={styles.neonText3}
        >
          Information
        </motion.div>
      </div>
      <div className="flex items-center text-center justify-center mt-10 w-full ">
        <img src={goku.src} alt="" className="rounded-full w-56 h-56" />
      </div>

      <div className={styles.boxed}>
        <p className={styles.content}>
          My name is Chau Chan Bang. I'm a freshman in RMIT majoring in
          Information Technology. Since I was a child, I had always wanted to
          create something that can help people all over the world and this
          project is helping me to achieve it. In this project, I can share my
          knowledge about nutrients to everyone and help them to build a healthy
          diet. I'm a front-end developer so I would have a chance to apply my
          software skills about HTML, CSS or JavaScript into real life and
          improve it when working with my teammates. Furthermore, I feel that I
          chose the correct teammates because they're always responsible in
          working and I believe that this semester will be incredibly fun and
          effective. Otherwise, I'm a person who easily forgets and sometimes is
          careless throughout; however, in this first course, I try to make
          myself always professional and do the tasks as perfectly as possible.
          I realized the importance of communication and relationships as
          without others, I can't finish all the projects. Overall, I thought
          this project could help me to achieve my dream and make more friends.
          Besides that, I would have more passion for the IT section.
        </p>
      </div>
      <div className="items-center justify-center mt-20">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -300,
            }}
            whileInView={{ opacity: 1, x: -10, y: 0 }}
            transition={{ duration: 1.35 }}
            viewport={{ once: true }}
            className={styles.neonText2}
          >
            Career
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 300,
            }}
            whileInView={{ opacity: 1, x: 10, y: 0 }}
            transition={{ duration: 1.35 }}
            viewport={{ once: true }}
            className={styles.neonText3}
          >
            Plan
          </motion.div>
        </div>
        <div className={styles.boxed2}>
          <p className={styles.content}>
            I realized that I want to build for myself a world of magic and
            mysteries and become a ruler in that world since I studied in
            secondary school, and after researching for a while, I think that
            only IT (Information Technology) can allow me to do that. The
            biggest game provider in Viet Nam is VNG so I think I will have more
            opportunities to achieve my dream and I also want to contribute to
            the entertainment industry in my country. Furthermore, I used to
            play a lot of games when I was a child, so I think I have experience
            in the gaming section, and this could be an advantage for my major
            in the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
