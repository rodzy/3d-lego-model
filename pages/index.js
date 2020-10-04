import Head from "next/head";
import { Canvas } from "react-three-fiber";
import TheFooter from "../components/TheFooter";
import styles from "../styles/Home.module.css";
import Box from "../components/Box";
// import Model from '../components/Model'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blocks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Canvas style={{ height: "40rem", width: "100rem" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-3.2, 0, 0]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[3.2, 0, 0]} />
        </Canvas>
      </main>
      <TheFooter />
    </div>
  );
}
