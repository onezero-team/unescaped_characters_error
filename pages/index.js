import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>unescaped_characters_error</h1>
        <ul>
          <li>
            <a href={`/info-page/${encodeURI("אאא_1")}`}>go to page אאא_1</a>
          </li>
          <li>
            <a href={`/info-page/${encodeURI("אאא_2")}`}>go to page אאא_2</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
