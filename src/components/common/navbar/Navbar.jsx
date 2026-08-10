import React from "react";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="absolute z-10 w-full p-7">
        <div className="grid grid-cols-3 items-center justify-center">
          <div>
            <a href="">
              <img
                className="w-28"
                src="src/assets/images/logo.png"
                alt="LOGO"
              />
            </a>
          </div>
          <div className="items-center justify-center">
            <ul
              className={`${style.poppinsregular} list-none flex gap-13 items-center justify-center text-white text-sm`}
            >
              <li className="hover:text-[#F72C84] transition-colors duration-300 cursor-pointer">
                HOME <FontAwesomeIcon icon={faChevronDown} />
              </li>

              <li className="hover:text-[#F72C84] transition-colors duration-300 cursor-pointer">
                SHEDULES <FontAwesomeIcon icon={faChevronDown} />
              </li>

              <li className="hover:text-[#F72C84] transition-colors duration-300 cursor-pointer">
                SPONSERS <FontAwesomeIcon icon={faChevronDown} />
              </li>

              <li className="hover:text-[#F72C84] transition-colors duration-300 cursor-pointer">
                CONTACT
              </li>
            </ul>
          </div>
          <div className={`${style.poppinssemibold} flex justify-end gap-5 `}>
            <div
              className={`${style.box} ${style.}border-2 pt-1 pb-1 w-25  rounded-3xl text-white`}
            >
              LOGIN
            </div>
            <div className={`${style.} bg-linear-to-r from-[#F58B70] to-[#F72C84] flex justify-center items-center pt-1 pb-1 w-25 text-white rounded-3xl`}>
              LOGOUT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
