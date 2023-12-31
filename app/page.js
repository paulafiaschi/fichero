import styles from "./page.module.css";
import Main from "./components/Main";

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
    <>
      <h1>Recursero</h1>

      <main className={styles.main}>
        {/* <label>Con qué te podemos ayudar?</label>
      <input type="search"></input> */}
        <Main data={data} />
      </main>
    </>
  );
}
