import Head from "next/head";
import { Canvas } from "react-three-fiber";
import TheFooter from "../components/TheFooter";
import styles from "../styles/Home.module.css";
import Box from "../components/Box";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blocks</title>
        <meta
          name="description"
          content="Short example of Three.js usage with Next.js"
        ></meta>
        <meta name="og:site_name" content="Blocks by Rod" />
        <meta name="og:title" content="Blocks by Rod" />
        <meta
          name="og:description"
          content="Short example of Three.js usage with Next.js"
        />
        <meta
          property="og:image"
          content="https://avatars1.githubusercontent.com/u/49137701?s=400&u=35e7614cc3215c045b58b4e352bd0616b9d795fd&v=4"
        />
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
