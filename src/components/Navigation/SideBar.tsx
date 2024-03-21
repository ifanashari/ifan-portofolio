import React from "react";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar_content}>
        <a
          href="https://www.linkedin.com/in/ifan-ashari-06419b167/"
          target="_blank"
          className={styles.sideBar_item}
        >
          MY LINKED IN
        </a>
        <a href="https://drive.google.com/file/d/1dilTpyRnYctLnajuC6DNEB0SJGli5rBM/view?usp=sharing" target="_blank" className={styles.sideBar_item}>
          MY RESUME
        </a>
        <a href="https://wa.me/085713724099" target="_blank" className={styles.sideBar_item}>
          CONTACT ME
        </a>
      </div>
    </div>
  );
}
