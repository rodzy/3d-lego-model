import Head from "next/head";
import TheFooter from "../components/TheFooter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LegoCadet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      </main>
      <TheFooter/>
      
    </div>
  );
}
