import React from "react";
import style from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <>
      <section className="h-screen bg-[url('src/assets/images/herobg.png')] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-rows-2">
          <div></div>
          <div className={`${style.poppinsSemibold} text-[50px] mb-5 p-11`}>
            <div className="mb-5">
              {" "}
              <span className="text-[#F58B70]"> Plan Events</span>
              &nbsp;
              <span className="text-[#F72C84]"> Simplify Everything</span>
            </div>
            <div
              className={`${style.poppinsRegular} text-[16px] text-[#EBEBEB] w-3xl mb-5`}
            >
              An all-in-one event management platform to create, organize, and
              run seamless events from invites to schedules and speaker
              coordination.
            </div>
            <button
              className={`${style.poppinsSemibold} text-[24px] bg-linear-to-r from-[#F58B70] to-[#F72C84] w-65 h-16 text-white rounded-4xl`}
            >
              Request a Demo
            </button>
          </div>
        </div>
        <div className="relative ">
          <FontAwesomeIcon
            icon={faAnglesDown}
            className="absolute mb-5 top-0 left-1/2 -translate-x-1/2 text-[40px] text-[#FFFF] animate-bounce"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
