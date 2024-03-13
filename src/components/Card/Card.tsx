import React from "react";
import styles from "./Card.module.css";
import classNames from "classnames";

export interface CardProps {
    imgUrl: string;
    title: string;
    url: string;
}

export default function Card({imgUrl, title, url}: CardProps) {
  return (
    <div className={classNames(styles.card)}>
      <img src={imgUrl} alt="" />
      <div className={styles.card_content}>
        <h1 className="text-4xl">{title}</h1>
        <a href={url} target="_blank">
        <button className={styles.buttonVisit}>Visit site</button>
        </a>
      </div>
    </div>
  );
}
