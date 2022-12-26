import { motion } from "framer-motion";
import React from "react";
import styles from "../../styles/text.module.css";
import NavBarForInfo from "./NavBarForInfo";
type Props = {};

function Personal({}: Props) {
  return (
    <div className="">
      <div className="flex flex-row my-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{ opacity: 1, x: -10, y: 50 }}
          transition={{ duration: 1.35 }}
          viewport={{ once: true }}
          className={styles.neonText2}
        >
          Personal{" "}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{ opacity: 1, x: 10, y: 50 }}
          transition={{ duration: 1.35 }}
          viewport={{ once: true }}
          className={styles.neonText3}
        >
          Information{" "}
        </motion.div>
      </div>
      <NavBarForInfo />
    </div>
  );
}

export default Personal;
