"use client";
import { motion } from "framer-motion";
import styles from "../../styles/text.module.css";
import React from "react";

type Props = {};

function Process({}: Props) {
  return (
    <div>
      <div className="flex items-center justify-center my-auto">
        <motion.div
          initial={{
            opacity: 0,
            // y: -100
          }}
          whileInView={{ opacity: 1, x: -10, y: 0 }}
          transition={{ duration: 1.35 }}
          className={styles.neonText2}
        >
          Group
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            // y: 100
          }}
          whileInView={{ opacity: 1, x: 10, y: 0 }}
          transition={{ duration: 1.35 }}
          className={styles.neonText3}
        >
          Process
        </motion.div>
      </div>
      <div className={styles.boxed2}>
        <p className={styles.content}>
          Due to everyone's dedication to completing high-quality work and
          monitoring each phrase and new modification, our team produced
          outstanding results. We worked on the project as a team with effective
          interpersonal, planning, and execution. We regularly have several
          meetings both face to face and online. In each meeting, we discussed
          how each member worked with their tasks and also found what problems
          or new things that we need to improve or modify. We collaborated well
          as a team, more like a group of friends than a gathering of strangers
          attempting to work together to do the same task. Since everyone has a
          specialization that they are strong at, we worked as hard as we could
          to maximize each other's strengths to produce the greatest product we
          could. And the only problem in communication that we mentioned in the
          previous proposal is the language barrier; however, we also have a
          solution for that. At the end, our project was going well as everyone
          was motivated, committed their all to the task in hand, and assisted
          other members when needed.
        </p>
      </div>
    </div>
  );
}

export default Process;
