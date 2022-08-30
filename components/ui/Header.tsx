import Image from "next/image";
import React, { FC } from "react";
import styles from "../../styles/Home.module.css";
import logo from "../../public/assets/logo.png";

const Header: FC = () => {
  const { header, headerImg, center } = styles;

  return (
    <header className={`${header} ${center}`}>
      <Image
        className={headerImg}
        src={logo}
        alt="Breaking Bad Logo"
        priority
      />
    </header>
  );
};

export default Header;
