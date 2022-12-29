"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../../styles/text.module.css";

type Props = {};

function page({}: Props) {
  return (
    <div className=" flex flex-col items-center justify-center relative z-40 mt-7 mx-auto  ">
      <title>Girls</title>
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
        <p className={styles.colorText}>Nguyen Thi Thu Hien</p>
        <p className={styles.colorText}>
          Leader, Researcher, Reporter, UX/UI designer{" "}
        </p>
        <div className={styles.boxed}>
          <p className={styles.content}>
            Hien oversees leading the team as a team leader. She knows how to
            encourage team members and collaborate together in a project with
            the spirit of an excellent leader. The timeline and work of the
            coding team and the reporting team were divided. Also she designs
            prototypes by drawing the overall design of the group's website.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-7">
        <p className={styles.colorText}>Han Yeeun</p>
        <p className={styles.colorText}>Researcher, Reporter, UX/UI designer</p>
        <div className={styles.boxed}>
          <p className={styles.content}>
            Yeeun has responsibility for the report and supports updating the
            components of the website by analysing what healthy foods are
            suitable for the BMI class. It also supports advice on deficiencies
            and composition in the manifold of the website.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
