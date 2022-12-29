"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../styles/text.module.css";
import vegeta from "../../../public/assets/Vegeta.gif";

type Props = {};

function page({}: Props) {
  return (
    <div className=" relative z-40 mt-7">
      <title>Yeeun</title>
      <div className="flex  items-center justify-center">
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
        <img src={vegeta.src} alt="" className="rounded-full w-56 h-56" />
      </div>

      <div className={styles.boxed}>
        <p className={styles.content}>
          I was born and grew up in Korea, and it is my first time studying
          abroad. In February this year, I started my first year at RMIT with a
          business major, but I changed to IT which was my interest in the next
          semester because I thought analyzing the economy was challenging for
          me. I love thinking critically and solving problems and I know how to
          incorporate what I've learned into my work. The experience in
          analyzing and writing many documents in the IB has taught me how to
          communicate information clearly through writing. After switching to
          IT, I also gained that the team needed a lot of effort to succeed in
          the project. The special thing is I already experienced several
          projects and knew how to approach them and their limitations. I am
          building my foundation in the required subjects of RMIT and
          self-taught computer languages. I currently have skills in Python,
          Linux and basic electronic concepts using Arduino and the system that
          links them to software. In addition, I can also deal with sketching
          UX/UI designs that can create user-friendly interfaces.
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
            Career{" "}
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
            Plan{" "}
          </motion.div>
        </div>
        <div className={styles.boxed2}>
          <p className={styles.content}>
            I am still a starter in all my experience; it is not clear about the
            specific plans that I would like to make in the future, but if I
            specify my desired future career, I want to participate in RPG game
            production and game development sometime. I was a child who liked to
            realize what I thought in my head since I was young. Therefore, when
            I became interested in games a few years ago, it made me want to try
            making them. The company I want to get a job in the future is
            Smilegate, which is what made me interested in the game. Actually, I
            want to participate in the game production with director Keum
            Kang-son, who works there, rather than working for the game company.
            His way of being good at communicating with consumers, bold in
            reorganizing, and considering convenience as much as possible was an
            impact on me. Also, I was thought of as an image of people who had a
            great affection for games-making and doing together, which led to
            the idea of working with him. Even if it's not game production, it's
            certain that this field is the environment I want to work in in the
            future. I want to gain more knowledge about various computer
            languages, application development, AI, cloud, and data analysis to
            work with some areas of IT in the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
