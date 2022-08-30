import React, { FC } from "react";
import { Character } from "../../types/typings";
import styles from "../../styles/Home.module.css";
import CharacterCard from "./CharacterCard";

interface Props {
  characters: Character[];
}

const CharacterGrid: FC<Props> = ({ characters }) => {
  return (
    <section className={styles.cards}>
      {characters.map(character => (
        <CharacterCard key={character.char_id} character={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;
