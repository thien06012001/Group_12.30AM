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
        <p className={styles.neonText2}>aim</p>
      </motion.div>
      <ul className={styles.boxed2}>
        <p className={styles.colorText}>
          Create small e-commerce to sell food and create user data to manage
          user information
        </p>
        <li className={styles.content2}>
          Building E-commerce is the most important part of the project because
          it is a major use factor for visiting users who wander on websites.
          This website builds online stores to fulfil this role because it meets
          the goal of providing healthy food delivery services for consumers'
          convenience and must make a profit.{" "}
        </li>
        <p className={styles.colorText}>
          Creating user data to manage website user information
        </p>
        <li className={styles.content2}>
          Consumer information is required in a series of processes from the
          project to the purchase of the product by the product. It generates
          user data through membership and manages individual user information
          such as the personal information required for delivery: address, name,
          email, and payment details
        </li>
        <p className={styles.colorText}>
          Create a BMI calculator to classify your weight
        </p>
        <li className={styles.content2}>
          Provide BMI calculators to personalise all users with BMI and provide
          them with reasonable categories. In the Calculator section, when the
          user inputs weight and height, their body mass index and their class
          position can be calculated. BMI calculators are encouraged on the
          website to allow customers to calculate their classes and place a dish
          order based on information about their classes.
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
        <p className={styles.neonText2}>Plan and progress</p>
      </motion.div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          During the first three weeks, we discussed our project ideas, and
          based on this, we made a whole project plan, gave each person
          something to do, and wrote a plan. Before building the project plan,
          there was a risk that the team members would suddenly leave, and the
          meeting and plan were disrupted, delaying the progress.
          <br />
          The first step to start the project was a priority to design a website
          that was good for customers to see. Hien, who had a good understanding
          of user design, drew the design through Figma and showed it to
          front-end developer Bang, who built the website using HTML and CSS
          languages based on Hien's design sketches. We had to build both the
          object website and the group website within a set time, so Bang and
          Thien did a lot of research to make them all successful. The basic
          knowledge and newly learned knowledge could be applied to web
          development as soon as possible. Also, they ask for feedback on errors
          and inconveniences whenever they have a new update. In addition, Yeeun
          constantly updated external sources such as market content and menus
          to go on the website.
          <br />
          In the last four weeks, we have stepped up efforts to complete the
          project. We had the basic format of the website and continued to
          update the more necessary and insufficient parts. While Thien and Bang
          were fulfilling their responsibilities, Yeeun and Hien started
          drafting reports based on the website. The details of the website and
          technology were taken care of by Thien and Bang, and feedback was
          constantly carried out to bring the website closer to success. We
          discussed how to finish the parts such as the colour and format of the
          website, and we had a final decision.
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
        <p className={styles.neonText2}>Scope and Limits</p>
      </motion.div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          Our project seems simple, but when it comes to analysis and work, it
          has many aspects that need to be addressed. As we planned in
          assignment 1, we did a majority of its functions according to the
          priority of features and had the products by coding it. However, in
          this phase, due to the lack of time, financial and knowledge about
          some aspects, we only can build the basic functions for the website
          and how our website looks. Therefore, the most essential feature of
          our project that is suggesting foods based on the customer's BMI index
          hasn't been done. To do this function, we need to gain more knowledge
          about coding in the future. Moreover, the product's filter by calories
          and rating foods is significantly complicated so we haven't done it.
          About the search function, we also cannot do it because of lack of
          knowledge too. Last but not least, The basic purpose of our project is
          selling healthy foods based on the customer's BMI index; therefore, we
          would like to have a mobile application since it would be more
          convenient and easy for user interactions. Since knowledge and time
          are limited, we can just make a website application for using.
          <br />
          To plan in the future, So in the first year, we will prepare a
          comprehensive business process and try to demo products such as foods
          and websites. Beside that, after building the website, we want to
          build a mobile app which will be more convenient for customers to use
          and order. After building the system, it cannot be without a talented
          cooking team and knowledgeable nutritionists so we need to employ this
          position. And then it would be brought to market for a major area like
          Ho Chi Minh. Over the next 2 years, we strive to complete our business
          in every aspect: cooking skills and website building techniques to
          improve the customer satisfaction. And then we will expand to have
          more branches and that goal will be within the next 6 to 8 years.
          Therefore, at this stage, the location detection features need to be
          developed in both website and mobile application. In addition, we'll
          add more sections to our website. For instance, we want to build
          another IT support team with solid knowledge of hardware and software
          as well as strong communication skills for resolving customer's
          concerns. We also want to create a cyber security sector to protect
          our customers' data as well as any confidential or private information
          about our business from cyberattacks.
          <br />
          And lastly, what we want to do is identify and recognize the customer
          behaviour and preferences to show what products and foods customers
          have the most chance to buy. And if my business is growing as we plan,
          it would be added a function of suggesting foods based on the
          customer's favourite ingredients and allergy in the 2nd year.
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
        <p className={styles.neonText2}>Group Process and Communication </p>
      </motion.div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          Our group communicated mainly online. We contacted each other via
          messenger and shared it with all the documents in our work through
          GitHub and Google drive. In the first week, we wanted to have an
          offline meeting every week, but we decided to communicate online to
          efficiently proceed with the project. Because we noticed that it was
          difficult to meet the meeting due to the personal schedule of all
          teammates during the offline meeting early in the work. Therefore, we
          had small meetings or used messenger calls after class every week to
          share our work and inform each other of the progress of the project.
          Also, we assigned a deadline for all detailed work, and when
          non-prediction occurred on the deadline, we adjusted the date
          flexibly. At the messenger, all members were notified so that others
          could recognize the details determined by a small number of people or
          when the stage of personal work was completed. Since we had more
          online meetings than offline meetings, there is a good chance that
          participation and concentration may not be maintained, but we have
          never experienced any group members' participation issues throughout
          the project, and everyone has been extremely focused during the
          meeting.
        </p>
      </div>
    </div>
  );
}

export default page;
