import React from "react";
import { useEffect, useState } from 'react';

export default function Preloader() {
const [preloaded, setPreloaded] = useState(false);
useEffect(() => {
  // window.addEventListener("load", () => {
    setPreloaded(true);
    setTimeout(() => {
      const preloader = document.querySelector("#preloader");
      // if (preloader) {
      //   preloader.classList.add("preloaded");
      //   setTimeout(() => {
      //     preloader.remove();
      //   }, 8500);
      // }
      preloader.remove();

    }, 1000);
  // });
}, []);
  return (

    <>
      <div id="preloader" className={preloaded ? "preloaded" : ""}>
        <div class="loader_line"></div>
      </div>
    </>
  );
}
