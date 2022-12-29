"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/Project.module.css";

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
        <p className={styles.neonText2}>Prototype</p>
      </motion.div>
      <ul className={styles.boxed2}>
        <p className={styles.colorText}>Feature 1</p>
        <li className={styles.content2}>
          Calculate BMI for the customers and give the result about their
          weight. Customers who want to check their BMI can input their height
          and weight then the website will calculate it for them.
        </li>
        <p className={styles.colorText}>Feature 2</p>
        <li className={styles.content2}>
          Order dishes base on customers' weight with many different foods in
          different categories
        </li>
        <p className={styles.colorText}>Feature 3</p>
        <li className={styles.content2}>
          Browse products by their BMI results or type of foods (meat, starch,
          salad, sauces, drinks and snacks).
        </li>
        <p className={styles.colorText}>Feature 4</p>
        <li className={styles.content2}>
          Sign Up and Sign In for customers. Customers can Sign up for their own
          account to order the food. Their accounts will be kept in the admin's
          database.
        </li>
        <p className={styles.colorText}>Feature 5</p>
        <li className={styles.content2}>
          Payment function by card. Customers will pay for their orders by using
          a visa card. The money they have to pay includes the food price and
          the shipping fees.
        </li>
      </ul>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 mb-20 text-center"
      >
        <p className={styles.neonText2}>Product Outcome</p>
      </motion.div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          Our website features a straightforward style and layout that is made
          for user-friendly navigation. After using Figma and referring to a
          number of similar design documents in the industry, we have distilled
          and designed a website with the suitable colour and functions as it is
          currently. This is also exactly how our forthcoming website will
          appear; however, it would be much better if we have a professional
          UI/UX designer. And our project's main purpose is to help users to
          navigate the meals that are good and suitable for their body by using
          BMI index and help them get better health. Our prototype website is
          currently in the visualisation/interactive phase with basic functions,
          which means you may explore and interact with the things and make a
          direct purchase. But our main function is suggesting foods currently
          after calculating BMI haven't done yet. Moreover, it doesn't have the
          history orders management functions so the customers are not checking
          it at the moment. And the search bar for users to find the name of
          products hasn't done either. Besides that, making a mobile app is the
          next thing to do after finishing our website. We would then have our
          own research and development team to begin working on it for our next
          smartphone app. Therefore, in the future, we need to have another
          UX/UI design for developing the mobile application and creating a
          webhook function to help customers manage their orders. And the
          important thing is making suggestions for foods for customers based on
          their BMI and flavours.
        </p>
      </div>
    </div>
  );
}

export default page;
