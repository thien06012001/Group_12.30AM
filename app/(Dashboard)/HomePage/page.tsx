"use client";
import React from "react";
import styles from "../../../styles/text.module.css";
import { motion } from "framer-motion";
import NavBarForInfo from "../../Component/NavBarForInfo";
import TeamName from "../../Component/TeamName";
import Personal from "../../Component/Personal";
import Process from "../../Component/Process";

type Props = {};
function page({}: Props) {
  return (
    <div className="h-full relative z-40 mt-7 items-center justify-center flex flex-col">
       <div className="my-auto w-full ">
        <TeamName/>
       </div>
       
      <div className="my-auto w-full ">
        <Personal />
      </div>
      <div className="my-auto w-full">
        <Process/>
      </div>
    </div>
  );
}

export default page;
