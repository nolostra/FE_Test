"use client";
import React from "react";
import Button from "../../components/button";
import useWindowSize from "../../hooks/useWindowSize";
import { Menu } from "react-burger-menu";
import Image from 'next/image';
import hamburgerButton from "../../assets/images/icons/bm-burger-bars.png";
import crossIcon from "../../assets/images/icons/close.gif";

const styles = {
  bmBurgerButton: {
    background: "#F9F4EE",
    padding: "12px 12px",
  },
  bmBurgerBars: {
    background:
      "linear-gradient(90deg, rgba(33, 212, 253, 0.3) 0%, rgba(183, 33, 255, 0.3) 100%)",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenu: {
    background: "#FFFFFF",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#FFFFFF",
    display: "none",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    left: 0,
    top: 0,
  },
};

const Header: React.FC = () => {
  const windowSize = useWindowSize();
  const isWideScreen = windowSize.width ?? 0 >= 992;

  return isWideScreen ? (
    <div className="header flex flex-row justify-between items-center mx-[20px] px-[38px] py-0 bg-white h-[101px] z-[999999] relative top-[20px]">
      <ul className="inline-flex">
        <li className="mx-[12px]:first:ml-0:last:mr-0">
          <a href="#about" className="text-black no-underline font-normal text-[14px]">About</a>
        </li>
        <li className="mx-[12px]:first:ml-0:last:mr-0">
          <a href="#news" className="text-black no-underline font-normal text-[14px]">News</a>
        </li>
        <li className="mx-[12px]:first:ml-0:last:mr-0">
          <a href="#services" className="text-black no-underline font-normal text-[14px]">Services</a>
        </li>
        <li className="mx-[12px]:first:ml-0:last:mr-0">
          <a href="#ourteam" className="text-black no-underline font-normal text-[14px]">Our Team</a>
        </li>
        <li className="mx-[12px]:first:ml-0:last:mr-0">
          <a href="#make-enquiry" className="text-black no-underline font-normal text-[14px]">Make Enquiry</a>
        </li>
      </ul>
      <Button />
    </div>
  ) : (
    <div className="burger-menu flex flex-row justify-between items-center bg-white relative z-[999999] px-[30px] py-[20px]">
      <Button />
      <Menu
        styles={styles}
        right
        customBurgerIcon={<Image src={hamburgerButton} alt="Hamburger Button" width={24} height={24} />}
        customCrossIcon={<Image src={crossIcon} alt="Close" width={24} height={24} />}
      >
        <div className="flex flex-col justify-between items-start">
          <ul>
            <li className="py-[12px]">
              <a href="#about" className="text-black no-underline font-normal text-[14px]">About</a>
            </li>
            <li className="py-[12px]">
              <a href="#news" className="text-black no-underline font-normal text-[14px]">News</a>
            </li>
            <li className="py-[12px]">
              <a href="#services" className="text-black no-underline font-normal text-[14px]">Services</a>
            </li>
            <li className="py-[12px]">
              <a href="#ourteam" className="text-black no-underline font-normal text-[14px]">Our Team</a>
            </li>
            <li className="py-[12px]">
              <a href="#make-enquiry" className="text-black no-underline font-normal text-[14px]">Make Enquiry</a>
            </li>
          </ul>
        </div>
      </Menu>
    </div>
  );
};

export default Header;
