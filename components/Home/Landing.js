import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import Countdown from "./Countdown";
import GradientText from "./GradientText";
import LinksBtn from "./LinksBtn";

const Landing = () => {
  return (
    <section
      id="home"
      className="home"
      style={{ minHeight: "100vh", color: "#fff" }}
    >
      <div className="cost1">
        <img
          src="/images/home/constellation1.png"
          alt=""
        />
      </div>
      <div className="logo-div">
        <div className="logo-home">
          {/* <Image
            src="/images/logo-main.webp"
            alt="n"
            priority={true}
            sizes="100%"
            width={100}
            height={100}
          /> */}
        </div>
        <GradientText />
        <Countdown />

        <LinksBtn />
      </div>
      <div className="cost2">
        <img
          src="/images/home/constellation2.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Landing;
