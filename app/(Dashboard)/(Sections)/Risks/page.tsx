"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../../styles/Risk.module.css";
type Props = {};

function page({}: Props) {
  return (
    <div>
      <div className={styles.body}>
        <div className={styles.div}>
          <h1 className={styles.h1}>Time conflicts</h1>
        </div>
      </div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          Everyone on my team has their own tasks to complete and a separate
          schedule for attending class. Additionally, Ms. Hien is now working
          part-time, and we only want to meet in person to have a productive
          meeting and discussion. Therefore, setting up the offline meeting is
          difficult for us. We took a lot of time determining the best time for
          each other in the next appointment as a result. The meeting may go
          into the night under certain challenging situations. Though, finally,
          every meeting was proceeding well and on the timetable we had
          established.
        </p>
      </div>
      <div className={styles.div}>
        <h1 className={styles.h1}>Languages Barrier </h1>
      </div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          Three of the students in our group are native speakers of Vietnamese,
          while the fourth is a Korean person. All team members speak English as
          a second language. Due to cultural differences and various
          conservation techniques, communication is hindered and the meaning of
          transmission is frequently unclear. When English-speaking
          communications are limited, Vietnamese is utilised instead, and a
          Korean student may feel excluded from engagement. All team members
          must thus communicate in English, and after speaking their native
          tongue, they must tell the Korean students of their judgments. The
          group will have challenges due to the language barrier during the
          project, but there will be opportunities to check it numerous times so
          that there's no misunderstanding.
        </p>
      </div>
      <div className={styles.div}>
        <h1 className={styles.h1}>Languages Barrier </h1>
      </div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          Several unanticipated events occurred when our task was being done.
          Firstly, two days after the second meeting was when the major issue
          came up. Because her buddy, who switched her major from international
          business to information technology, skipped the Introduction to IT
          course, Yeeun requested to postpone her deadlines. Her companion also
          claimed that she was exempt from taking the university's Introduction
          to IT course. Yeeun had to wait for RMIT confirmation because this
          news was not confirmed at that moment. She has just apologised and
          informed a different teammate about the incident. Because we had the
          concepts and were developing them, the other members were tense and
          worried. Additionally, practically all of the class's students have
          formed groups. As a result, Hien, Thien, and Bang have decided that if
          Yeeun drops out of this class, the remaining members will form a team
          of three and will need to put in more effort to finish the assignment
          on time. But luckily, after 1 week, she had the RMIT's confirmation
          that she needed to continue studying this course and then our project
          was going well as planned.
          <br />
          And the second problem may be mentioned above for a start. Because of
          the wrong booking of Bang and the carelessness of other members, we
          didn't have the room for meeting at that time. Fortunately, we took
          advantage of the fact that our classroom had no class immediately
          following ours on that particular day to host a meeting. And based on
          this circumstance, we thoroughly examine the reservation room for the
          subsequent one.
          <br />
        </p>
      </div>
      <div className={styles.div}>
        <h1 className={styles.h1}>Technical Issue </h1>
      </div>
      <div className={styles.boxed2}>
        <p className={styles.content2}>
          Since we are all IT beginners, the main technological problem is a
          lack of coding knowledge. When we were working on the project, we had
          to spend a lot of time figuring out how to accomplish certain
          functionalities, including entering user information into an online
          database or designing effects that would appear on webpages. In
          addition, everyone understood how difficult it is to create a
          comprehensive website since we need to integrate a variety of
          front-end and back-end development tools and frameworks, and we were
          at a loss as to where to begin. Additionally, since we squandered time
          trying to figure out how to create a website, time pressure is another
          major difficulty for us. We didn't have enough time to do all the
          activities we had first planned. As a result, we organise everything
          according to priority levels and start by developing the most crucial
          function. To construct this feature in our website, we will first
          acquire the tools and information about the most crucial functions.
          After completing it, we went on to perform the subsequent tasks and
          discover any potential major obstacles. We produce extra effort to do
          it quickly, thus our deadline will be stringent. We must put in a lot
          of effort and do our best since we want to do it flawlessly. As a
          result, as we mentioned above in the scope and limits part, we nearly
          finished all the functions except some that are out of our control and
          abilities.
        </p>
      </div>
    </div>
  );
}

export default page;
