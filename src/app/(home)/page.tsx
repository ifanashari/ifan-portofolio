import React from "react";
import styles from "./Home.module.css";
import classNames from "classnames";
import Card, { CardProps } from "@/components/Card/Card";

export default function Home() {
  const portofolioList: CardProps[] = [
    {
      imgUrl: "/images/sbz.png",
      title: "Starbreeze Nebula(Payday 2 & 3)",
      url: "https://nebula.starbreeze.com/account/profile",
    },
    {
      imgUrl: "/images/voxies.png",
      title: "Voxies",
      url: "https://www.voxies.io/",
    },
    {
      imgUrl: "/images/sensorium.png",
      title: "Sensorium Galaxy",
      url: "https://sensoriumgalaxy.com/",
    },
    {
      imgUrl: "/images/barb.png",
      title: "Everywhere by (Build a Rocket Boy)",
      url: "https://everywhere.game/",
    },
    {
      imgUrl: "/images/ganesha.png",
      title: "GANESHA BALI PROPERTY",
      url: "https://ganeshabaliproperty.com/",
    }
  ];

  return (
    <>
      <div className={classNames(styles.hero_wrapper, "mb-10")}>
        <div className={styles.hero_content}>
          <img src="/images/profpic.jpg" alt="" />
          <div className="ml-5">
            <h4 className="text-2xl mb-2">Hello I'am,</h4>
            <h1 className="text-5xl mb-3">Ifan Ashari</h1>
            <h3 className="text-3xl font-semibold">Frontend Developer</h3>
          </div>
        </div>
      </div>

      <div className={classNames(styles.portofolio, "px-3")}>
        <h1 className="text-4xl mb-20 text-center font-semibold">Projects</h1>
        {portofolioList.map((portofolio: CardProps, portofolioIndex) => {
          return (
            <div className="mb-10">
              <Card key={`protofolio-${portofolioIndex}`} {...portofolio} />
            </div>
          );
        })}
      </div>
    </>
  );
}
