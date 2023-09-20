import Image from "next/image";
import styles from "./page.module.css";
import CategoryButton from "./components/CategoryButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Fichero Las Otras</h1>
        <label>Con qué te podemos ayudar?</label>
        <input type="search"></input>
      </div>

      <div>
        <CategoryButton category="Emergencias" />
        <CategoryButton category="Construyendo Comunidad" />
        <CategoryButton category="Goce" />
      </div>
    </main>
  );
}
