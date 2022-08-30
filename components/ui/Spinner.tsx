import React, { FC } from "react";
import Image from "next/image";
import spinner from "../../public/assets/spinner.gif";
import styles from "../../styles/Home.module.css";

const Spinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <Image src={spinner} alt="Loading" width={200} height={200} />
    </div>
  );
};

export default Spinner;
