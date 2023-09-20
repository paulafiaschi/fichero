"use client";
import styles from "./page.module.css";
import CategoryButton from "./components/CategoryButton";
import Ficha from "./components/Ficha";

async function getData() {
  const res = await fetch("https://cocktails-240e.restdb.io/rest/las-otras", {
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "613731bc43cedb6d1f97edad",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home(props) {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Fichero Las Otras</h1>
      </div>
      <label>Con qué te podemos ayudar?</label>
      <input type="search"></input>

      {data.map((ficha) => {
        return <Ficha props={ficha} key={ficha._id} />;
      })}
      <div>
        <CategoryButton
          category="Emergencias"
          onClick={console.log("emergencias")}
        />
        <CategoryButton category="Construyendo Comunidad" />
        <CategoryButton category="Goce" />
      </div>
    </main>
  );
}
