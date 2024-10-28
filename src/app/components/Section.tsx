import styles from "../styles/index.module.scss";

const Section: React.FC = () => {
  return (
    <div className={styles.street}>
      <div>
        <h2>Ropa</h2>
      </div>
      <div>
        <h2>Tablas</h2>
      </div>
      <div>
        <h2>Zapatos</h2>
      </div>
      <div>
        <h2>Accesorios</h2>
      </div>
    </div>
  );
};

export default Section;
