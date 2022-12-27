"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../styles/text.module.css";

type Props = {};

function page({}: Props) {
  return (
    <div className=" flex flex-col items-center justify-center relative  z-40  mt-7 - mx-auto  ">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 2 }}
        className={styles.neonText}
      >
        Skills
      </motion.p>
      <div className="flex flex-col items-center justify-center mt-7">
        <p className={styles.colorText}>Project Manager</p>

        <div className={styles.boxed}>
          <li className={styles.content}>
            Project overview in sequence; direct other people to the proper
            path.
          </li>
          <li className={styles.content}>
            Excellent time management, leadership, and communication abilities
            are needed.
          </li>
          <li className={styles.content}>
            A cooperative team player who wants to work on our projects's area.
          </li>
          <li className={styles.content}>
            Having IT knowledge and experience in this position is a plus.
          </li>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <p className={styles.colorText}>Web Developer</p>

        <div className={styles.boxed}>
          <li className={styles.content}>
            Create, maintain, and customize the website depending on our project
            ideas.
          </li>
          <li className={styles.content}>
            Requires a strong grasp of programming languages including HTML, CSS
            and Typescript as well as experience with both front-end and
            back-end development.
          </li>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <p className={styles.colorText}>Mobile Developer </p>

        <div className={styles.boxed}>
          <li className={styles.content}>
            For our project, create a mobile app where we can host a lot of
            features. HTML and CSS knowledge is required in order to build for
            the MacOS, iOS, and Android operating systems.
          </li>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <p className={styles.colorText}>Researcher</p>
        <div className={styles.boxed}>
          <li className={styles.content}>
            Look into the requirements of the industry insiders and other rivals
          </li>
          <li className={styles.content}>
            Require a background in marketing or experience analyzing the IT
            industry, as well as strong research and number-crunching skills.
          </li>
         <li className={styles.content}>
          Analytical and critical thinking abilities.
          </li>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <p className={styles.colorText}>Discord Moderator</p>

        <div className={styles.boxed}>
          <li className={styles.content}>
            Control and filter the discord channel's messages.
          </li>
          <li className={styles.content}>
            Responsible for maintaining members and administering the server in
            order to gather data.
          </li>
          <li className={styles.content}>
            Need familiarity with discord's basic and administrative commands.
          </li>
        </div>
      </div>
    </div>
  );
}

export default page;
