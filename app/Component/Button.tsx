"use client";
import React from "react";
import { useEffect, useState } from "react";
import styles from "../../styles/text.module.css";
type Props = {};

function Button({}: Props) {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  return (
    <div>
      {backToTopButton && (
        <button className={styles.Button2} onClick={scrollUp}>
          <p className={styles.button}>TOP</p>
        </button>
      )}
    </div>
  );
}

export default Button;
