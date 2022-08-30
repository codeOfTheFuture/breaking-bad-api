import React, { FC } from "react";
import { Character } from "../../types/typings";
import styles from "./styles/CharacterGrid.module.css";
import CharacterCard from "./CharacterCard";
import Spinner from "../ui/Spinner";

interface Props {
  characters: Character[];
  isLoading: boolean;
}

const CharacterGrid: FC<Props> = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className={styles.cards}>
      {characters.map(character => (
        <CharacterCard key={character.char_id} character={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;
