import React, { FC } from "react";
import Image from "next/image";
import styles from "./styles/Header.module.css";
import logo from "../../public/assets/logo.png";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.headerImg}
        src={logo}
        alt="Breaking Bad Logo"
        priority
      />
    </header>
  );
};

export default Header;
