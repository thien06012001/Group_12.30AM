"use client";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/tools.module.css";
import { motion } from "framer-motion";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex flex-col">
      <title>Tools</title>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className=" uppercase text-center z-40 mt-7 mx-auto"
      >
        <p className={styles.neonText2}>Link</p>
      </motion.div>
      <div className="grid grid-cols-2 mt-10 h-[500px] ">
        <div className="flex items-center justify-center">
          <Link
            href="https://healthy-git-main-thien06012001.vercel.app/"
            className={styles.boxed}
          >
            <p className={styles.content}>Project</p>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://group-12-30-am-git-main-thien06012001.vercel.app/"
            className={styles.boxed}
          >
            <p className={styles.content}>Group</p>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://github.com/thien06012001/thien06012001.github.io.git/"
            className={styles.boxed}
          >
            <p className={styles.content}>Project Github</p>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://github.com/thien06012001/Group_12.30AM.git"
            className={styles.boxed}
          >
            <p className={styles.content}>Group Github</p>
          </Link>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          x: 300,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className=" uppercase text-center z-40 mt-7 mx-auto"
      >
        <p className={styles.neonText2}>Description</p>
      </motion.div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          GitHub was useful in project development. Since it is an open-source
          storage that can be hosted, it was not only easy for all members to
          participate, but also highly utilised for several people to
          collaborate. Due to the nature of GitHub's service, it can be used by
          downloading what other members worked on and transmitting the modified
          work on it, so it was a space where they could modify the wrong
          functions or feedback from each other with better code. In addition,
          there may be a problem that data can be impacted by one mistake in
          collaboration, but the processes of modification and implementation
          remained as records and could be restored to the desired point in
          time.
          <br />
          GitHub is a convenient repository if people are aware of how to use
          it, but unfortunately, all our team members were able to use GitHub's
          service in the beginning because it was their first time dealing with
          GitHub. Since all the members were beginners, even when learning about
          GitHub in the tutorial, we learned a lot because it was our first time
          learning from each other, and we asked each other and solved the
          questions together. After that, I tried to remember and repeat what I
          learned so that I could use it familiarly, and eventually, all members
          could use basic services and use it useful for projects, even though
          it was not perfect.
        </p>
      </div>
    </div>
  );
}

export default page;
