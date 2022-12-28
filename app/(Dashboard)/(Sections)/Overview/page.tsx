"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../../../styles/Project.module.css";

type Props = {};

function page({}: Props) {
  return (
    <div className="relative z-30 mt-7 flex-col">
      <motion.div
        initial={{
          opacity: 0,
          y: 300,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-7 mb-20 text-center"
      >
        <p className={styles.neonText2}>topic</p>
      </motion.div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          Not only did the coronavirus pandemic cause significant deaths, but it
          also worsened people's health with lifestyle changes. Since 2020,
          13.3% of BMI underweight classes have been normal, with the proportion
          of normal people converting to overweight or obese classes, and 5.1%
          of overweight classes converting to obesity, and the pandemic has
          affected the BMI index to some extent (Alshahrani S et al. 2021). The
          IFIC survey reported that 52% of people in 2022 were following a
          certain diet or healthy eating habits, an increase of 39% compared to
          2021. This can confirm that people's interest in healthy eating habits
          has increased since COVID-19 (Food Insight 2022). <br />
          Following this health trend, our team decided to build a website that
          can suggest healthy food to people and deliver it to customers based
          on body mass index (BMI). The website measures individual BMI indices
          of customers using BMI calculators and then suggests healthy dishes to
          be able to deliver, which can be used well by both healthy food or
          diet starters and healthy diet activists.
        </p>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 mb-20 text-center"
      >
        <p className={styles.neonText2}>Motivation</p>
      </motion.div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          In selecting what to do for assignment 2, our team first identified
          all members' interests, strengths, and weaknesses. In this process, it
          was found that some of the teammates were interested in health, had
          background knowledge about BMI and healthy living, and the others had
          the skills to implement it. We decided to build this website using the
          strengths of each member. As a result, the final decision is BMI
          Kitchen. <br />
          As mentioned above, the pandemic affected people's BMI index, leading
          to a healthy eating habit boom. It is important to exercise for
          health, but the first thing to do is to consider the relationship with
          food. A diet consisting of a combination of various foods is a healthy
          diet, and eating less salt, sugar, saturated and industrially produced
          trans fats is essential to a healthy diet (WHO n.d.). However, when
          approaching health for the first time, it is not easy to plan a
          healthy diet considering all of this and your health condition. Due to
          the lack of information on what to do first, beginners have discomfort
          with which diet is appropriate for them, and substantial amounts of
          information related to clean meals can make them hazy. With the
          creation of the BMI Kitchen website, users can display multiple
          website windows, reduce the amount of time they spend studying and
          information about healthy eating, and eat their BMI and the resulting
          food through one website.
        </p>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 mb-20 text-center"
      >
        <p className={styles.neonText2}>Landscape</p>
      </motion.div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          BMI calculator sites are commonly found in search engines. However, it
          can only calculate individual BMI figures and does not provide
          coordinates on how they should move on to the next step.
          <br />
          Healthy food suggestion sites are distributed in several ways, such as
          blogs, diet and healthy eating webpages, and healthy food recipe
          websites. However, it takes a lot of time in a series of processes
          where an individual must collect information through many searches to
          find healthy foods that are suitable for their body, and order or cook
          healthy foods after reviewing what individuals need to consider.{" "}
          <br />
          The obvious difference between our product and existing products in
          the market is that our product recommends food according to BMI and
          provides delivery systems to consumers. There are few competitors and
          very few exist. Especially in Vietnam, websites are extremely rare,
          therefore it can serve as a strength for users who want to access
          their health through search. Our website minimises consumers' time and
          effectively leads them to a healthy life or diet.
        </p>
      </div>
    </div>
  );
}

export default page;
