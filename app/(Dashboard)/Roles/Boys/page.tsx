"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../../styles/text.module.css";

type Props = {};

function page({}: Props) {
  return (
    <div className=" flex flex-col items-center justify-center relative z-40 mt-7 mx-auto  ">
      <title>Boys</title>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 2 }}
        className={styles.neonText}
      >
        Roles
      </motion.p>
      <div className="flex flex-col items-center justify-center mt-7">
        <p className={styles.colorText}>Chau Chan Thien </p>
        <p className={styles.colorText}>Back-end developer, Researcher </p>
        <div className={styles.boxed}>
          <p className={styles.content}>
            As the main developer, Thien manages the development team and has a
            total jack for website development. It mainly builds and maintains
            data mechanisms for implementing websites and creates invisible
            server functions such as data storage and security.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <p className={styles.colorText}>Chau Chan Bang</p>
        <p className={styles.colorText}>Front-end developer, Researcher</p>
        <div className={styles.boxed}>
          <p className={styles.content}>
            Responsible as a front-end developer, Bang combines design,
            technology, and programming to code the visual aspects of the
            website, and his caring disposition made it easy for website
            visitors to interact with the page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
