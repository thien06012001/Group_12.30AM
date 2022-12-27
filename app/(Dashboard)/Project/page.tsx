"use client";
import React from "react";
import styles from "../../../styles/Project.module.css";
import html from "../../../public/assets/html.png";
import css3 from "../../../public/assets/css3.png";
import java from "../../../public/assets/javascript-logo.png";
import react from "../../../public/assets/reactjs-icon.png";
import node from "../../../public/assets/node-js.png";
import github from "../../../public/assets/github.png";
import vercel from "../../../public/assets/Vercel-icon.png";
import sanity from "../../../public/assets/Sanity.png";
import next from "../../../public/assets/nextjs.png";
import { motion } from "framer-motion";
type Props = {};
function page({}: Props) {
  return (
    <div className="relative z-30 mt-7">
      <div className={styles.body}>
        <div className={styles.gallery}>
          <div className={styles.img1}>
            <h1 className={styles.span1}>Thien</h1>
            <img
              src="https://assets.codepen.io/1480814/archer.jpg"
              alt="Archer from Fate/Stay"
              className={styles.img1}
            />
          </div>
          <div className={styles.img2}>
            <h1 className={styles.span2}>Bang</h1>

            <img
              src="https://assets.codepen.io/1480814/saber.jpg"
              alt="Saber from Fate/Stay"
              className={styles.img2}
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 500,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" uppercase z-40 mt-7 mx-auto text-center"
      >
        <p className={styles.neonText2}>Tools</p>
      </motion.div>
    </div>
  );
}

export default page;
