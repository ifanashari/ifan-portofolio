import React from "react";
import styles from "./Card.module.css";
import classNames from "classnames";
import { Button } from "antd";

export interface CardProps {
  imgUrl: string;
  title: string;
  url: string;
  index: number;
}

export default function Card({ imgUrl, title, url, index }: CardProps) {
  return (
    <div className={classNames(styles.card)}>
      <img src={imgUrl} alt="" className={index % 2 == 0 ? "order-2" : ""} />
      <div
        className={classNames(
          index % 2 == 0 ? "md:text-right" : "",
          styles.card_content
        )}
      >
        <h1 className={classNames("lg:text-5xl text-3xl mb-5")}>{title}</h1>
        <a href={url} target="_blank">
          <Button type="primary" size="large" shape="round">
            Visit site
          </Button>
        </a>
      </div>
    </div>
  );
}
