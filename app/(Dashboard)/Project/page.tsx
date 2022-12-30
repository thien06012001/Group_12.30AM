"use client";
import React from "react";
import styles from "../../../styles/Project.module.css";
import html from "../../../public/assets/html.png";
import css3 from "../../../public/assets/css3.png";
import java from "../../../public/assets/javascript-logo.png";
import react from "../../../public/assets/reactjs-icon.png";
import node from "../../../public/assets/node-js.png";
import github from "../../../public/assets/github.png";
import vercel from "../../../public/assets/Vercel-icon.png";
import sanity from "../../../public/assets/Sanity.png";
import next from "../../../public/assets/nextjs.png";
import stripe from "../../../public/assets/StripeLogo.png";
import redux from "../../../public/assets/ReduxLogo.png";
import fire from "../../../public/assets/FirebaseLogo.png";
import figma from "../../../public/assets/FigmaLogo.png";
import typescript from "../../../public/assets/TypescriptLogopng.png";
import tailwind from "../../../public/assets/TailwindCSSLogo.png";
import vscode from "../../../public/assets/vscodelogo.png";
import { motion } from "framer-motion";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
type Props = {};
function page({}: Props) {
  const router = useRouter();
  return (
    <div className="relative z-30 mt-7">
      <title>Project</title>
      <motion.div
        initial={{
          opacity: 0,
          y: 300,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" uppercase text-center z-40 mt-7 mx-auto"
      >
        <p className={styles.neonText2}>Description</p>
      </motion.div>
      <div className="flex">
        <Link href='/Overview' className={styles.boxed}>
          <p className={styles.content}>Overview</p>
        </Link>
        <Link href='/Detail' className={styles.boxed}>
          <p className={styles.content}>Detail</p>
        </Link>
        <Link href='/Risks' className={styles.boxed}>
          <p className={styles.content}>Risks</p>
        </Link>
      </div>
      <div className={styles.body}>
        <div className={styles.gallery}>
          <div className={styles.img1}>
            <h1 className={styles.span1}>Boys</h1>
            <img onClick={() => router.push('/Roles/Boys')}
              src="https://assets.codepen.io/1480814/archer.jpg"
              alt="Archer from Fate/Stay"
              className={styles.img1}
            />
          </div>
          <div className={styles.img2}>
            <h1 className={styles.span2}>Girls</h1>
            <img  onClick={() => router.push('/Roles/Girls')}
              src="https://assets.codepen.io/1480814/saber.jpg"
              alt="Saber from Fate/Stay"
              className={styles.img2}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <motion.div
          initial={{
            opacity: 0,
            y: -300,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" uppercase z-40 mt-7 mx-auto"
        >
          <p className={styles.neonText2}>Tools</p>
        </motion.div>
        <div className="mt-10 z-30 cursor-pointer grid grid-cols-4 w-[60%] mx-auto h-auto ">
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
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
              className=" rounded-full border border-gray-500 md:w-28 md:h-28 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  HTMl
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
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
              className=" rounded-full border border-gray-500 object-cover md:w-28 md:h-28 w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
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
              className=" rounded-full border border-gray-500 object-cover md:w-28 md:h-28 w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
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
              className=" rounded-full border border-gray-500 object-cover md:w-28 md:h-28 w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
         
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={java.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover md:w-28 md:h-28 w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  JavaScript
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={node.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover md:w-28 md:h-28 w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  Nodejs
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={vercel.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover md:w-28 md:h-28 w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  Vercel
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: -200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={sanity.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  Sanity
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
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
              className=" rounded-full border border-gray-500 object-cover md:w-28 md:h-28 w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={fire.src}
              alt=""
              className=" rounded-full border border-gray-500 md:w-28 md:h-28 object-cover w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  Firebase
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={stripe.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cove md:w-28 md:h-28r w-12 h-12 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  Stripe
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={redux.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  Redux
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={vscode.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  VSCode
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={typescript.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  TypeScript
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={tailwind.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  TailwindCSS
                </p>
              </div>
            </motion.div>
          </div>
          <div className="group relative flex cursor-pointer m-auto h-[200px] items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 200,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src={figma.src}
              alt=""
              className=" rounded-full border border-gray-500 object-cover w-12 h-12 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300
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
                  Figma
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
