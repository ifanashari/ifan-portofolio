import React from "react";
import styles from "./Home.module.css";
import classNames from "classnames";
import Card, { CardProps } from "@/components/Card/Card";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function Home() {
  const portofolioList: CardProps[] = [
    {
      imgUrl: "/images/sbz.png",
      title: "Starbreeze Nebula Payday2 & 3",
      url: "https://nebula.starbreeze.com/account/profile",
      index: 0,
    },
    {
      imgUrl: "/images/voxies.png",
      title: "Voxies",
      url: "https://www.voxies.io/",
      index: 0,
    },
    {
      imgUrl: "/images/sensorium.png",
      title: "Sensorium Galaxy",
      url: "https://sensoriumgalaxy.com/",
      index: 0,
    },
    {
      imgUrl: "/images/barb.png",
      title: "Everywhere by (Build a Rocket Boy)",
      url: "https://everywhere.game/",
      index: 0,
    },
    {
      imgUrl: "/images/ganesha.png",
      title: "GANESHA BALI PROPERTY",
      url: "https://ganeshabaliproperty.com/",
      index: 0,
    },
  ];

  return (
    <>
      <div className={classNames(styles.hero_wrapper)}>
        <div className={classNames(styles.hero_content, "lg:p-40 sm:p-28 p-14")}>
          <h2 className="lg:text-5xl sm:text-4xl text-2xl mb-4">Hello, nice to meet you</h2>
          <h1 className="lg:text-8xl sm:text-6xl text-4xl font-bold mb-8">I'm Ifan Ashari</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-40 gap-14 items-center text-xl">
            <p className="lg:text-xl text-base">
              Highly motivated Software Developer with 5+ years of experience
              building exceptional web applications using React, Next,
              Typescript. Problem-solver, team player, passionate learner. Ready
              to innovate
            </p>
            <div>
              <p className="flex flex-wrap items-center">
                <span className="my-2 mr-4 lg:text-xl text-base">If you want to see my projects</span>
                <a href="#sectionProjects">
                  <Button type="primary" size="large" shape="round">
                    Click here
                  </Button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames(styles.portofolio, "")} id="sectionProjects">
        {portofolioList.map((portofolio: CardProps, portofolioIndex) => {
          return (
            <Card
              key={`protofolio-${portofolioIndex}`}
              {...portofolio}
              index={portofolioIndex}
            />
          );
        })}
      </div>
    </>
  );
}
