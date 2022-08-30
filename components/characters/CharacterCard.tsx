import React, { FC } from "react";
import { Character } from "../../types/typings";
import styles from "./styles/CharacterCard.module.css";
import Image from "next/image";

interface Props {
  character: Character;
}

const CharacterCard: FC<Props> = ({ character }) => {
  const { img, name, portrayed, nickname, birthday, status } = character;

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <Image src={img} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.cardBack}>
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Actor Name: </strong>
              {portrayed}
            </li>
            <li>
              <strong>Nickname: </strong>
              {nickname}
            </li>
            <li>
              <strong>Birthday: </strong>
              {birthday}
            </li>
            <li>
              <strong>Status: </strong>
              {status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
