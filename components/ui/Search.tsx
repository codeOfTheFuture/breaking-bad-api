import React, { FC, useState } from "react";
import styles from "./styles/Search.module.css";

interface Props {
  getQuery: (query: string) => void;
}

const Search: FC<Props> = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (query: string) => {
    setText(query);
    getQuery(query);
  };

  return (
    <section className={styles.search}>
      <form>
        <input
          type="text"
          className={styles.formControl}
          placeholder="Search characters"
          value={text}
          onChange={e => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
