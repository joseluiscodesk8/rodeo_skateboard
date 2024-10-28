import Image from "next/image";
import styles from "../styles/index.module.scss";

const Begon: React.FC = () => {
  return (
    <>
      <article className={styles.begon}>
        <Image
          src={"https://i.ibb.co/FbPVBNz/1000118515.png"}
          width={250}
          height={250}
          alt="rodeo logo"
        />
        <h2>PATINANDO SIN RODEOS</h2>
        <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
        <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
        <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
        <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
        <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
        <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
        <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
        <p>PATINANDO TODOS LOS MARDITOS DIAS DESDE 1995</p>
      </article>
    </>
  );
};

export default Begon;
