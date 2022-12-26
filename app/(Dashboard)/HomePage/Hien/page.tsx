"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../../styles/text.module.css";
import goku2 from "../../../../public/assets/Goku2.gif";

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
        <img src={goku2.src} alt="" className="rounded-full w-56 h-56" />
      </div>

      <div className={styles.boxed}>
        <p className={styles.content}>
          My name is Nguyen Thi Thu Hien. One special thing is that I am a final
          year student and my major is Digital Business. Actually, before
          entering RMIT, I studied Marketing in Australia for around 1 and half
          years. However, during covid-19, I needed to come back to Vietnam and
          I decided to choose this major in RMIT to study. I was born in Ha Noi;
          however, when I took this course which was not in Hanoi Campus;
          therefore, I had to go to SGS Campus to study. When I did some
          projects in my major, I saw that technology is really essential for
          our life and has aroused my motivation to gain more knowledge.
          Moreover, I have a best friend who also studied IT and worked in that
          area. He always talks to me about technology and working in this
          environment. That makes me feel that I actually want to pursue this
          domain. Therefore, I need to learn by myself a lot and currently, I'm
          working as a Manual Tester. Actually, I did not have deep knowledge
          about coding and using tools for these subjects but it would be my
          goals that I want to achieve to pursue my desired jobs. And I feel
          this time is quite hard and stressful for me because I need to study
          in school, work and study by myself with some additional knowledge.
          However, I like this challenge which always keeps me busy and
          concentrating. After a period of time working hard, I think it's worth
          it and I can gain more than I lose. About my hobby, I have a passion
          for cooking, especially healthy foods. Because I know the importance
          of consuming healthy foods that would really help my body and my mind
          go well. Therefore, I try to learn to cook healthy foods as soon as
          possible. However, sometimes it really takes a long time to make it
          because some foods are significantly complicated and difficult to cook
          even finding the ingredients to cook. That is why this project is also
          part of my ideas. About my skills, Since I studied Business, I have a
          lot of experience in researching. Besides that, I also can do the
          sketch, UI/UX design, prototype for the products and project
          management because I studied some subjects about startup and digital
          business transformation. Therefore, in this project, I am the one who
          organises the meetings and is responsible for taking notes of the
          working process. I n addition, I will do market research on the
          healthy food segment and also outline the user interface of that
          website. In conclusion, my role is as a leader, project manager,
          organiser, researcher and UI/UX designers.
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
            I'm considered an extrovert since I don't hesitate to communicate
            with different types of people. Moreover, every job or task which I
            face I want to do in the process to investigate all the aspects of
            situations. And through the time I studied at school, I experienced
            several subjects about developing projects or business. I love to
            sketch and do the mock-up for our projects and plan the process to
            implement it. Moreover, I worked in the real workplace for around a
            few months. I found myself significantly suitable with that job and
            I am really interested and confident too. Therefore, I want to
            pursue this job in the future and try my best to participate in my
            target company which is NashTech.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
