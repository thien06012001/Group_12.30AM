"use client";
import React from "react";
import html from "../../../public/assets/html.png";
import css3 from "../../../public/assets/css3.png";
import java from "../../../public/assets/javascript-logo.png";
import react from "../../../public/assets/reactjs-icon.png";
import node from "../../../public/assets/node-js.png";
import github from "../../../public/assets/github.png";
import vercel from "../../../public/assets/Vercel-icon.png";
import sanity from "../../../public/assets/Sanity.png";
import next from "../../../public/assets/nextjs.png";
import styles from "../../../styles/text.module.css";
import { motion } from "framer-motion";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex flex-col">
      <title>Tools</title>
      <motion.div
        initial={{
          opacity: 0,
          y: 500,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" uppercase z-40 mt-7 mx-auto"
      >
        <p className={styles.neonText2}>Tools</p>
      </motion.div>
      <div className="relative z-30 cursor-pointer grid grid-cols-3 w-[50%] ml-[25%] h-[600px]  ">
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={html.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{
              x: -200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">HTMl</p>
            </div>
          </motion.div>
        </div>
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={css3.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{
              x: -200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">CSS</p>
            </div>
          </motion.div>
        </div>
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={react.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{
              x: -200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">
                Reactjs
              </p>
            </div>
          </motion.div>
        </div>
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={github.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{
              x: -200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">
                GitHub
              </p>
            </div>
          </motion.div>
        </div>
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            src={java.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{}}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">
                JavaScript
              </p>
            </div>
          </motion.div>
        </div>
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={node.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{
              x: 200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">
                Nodejs
              </p>
            </div>
          </motion.div>
        </div>
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={vercel.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{
              x: 200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">
                Vercel
              </p>
            </div>
          </motion.div>
        </div>
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={sanity.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{
              x: 200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">
                Sanity
              </p>
            </div>
          </motion.div>
        </div>
        <div className="group relative flex cursor-pointer m-auto">
          <motion.img
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src={next.src}
            alt=""
            className=" rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
                    ease-in-out"
          />
          <motion.div
            initial={{
              x: 200,
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12
                    md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center m-auto h-full">
              <p className="text-2xl font-bold text-black opacity-100">
                Nextjs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default page;
