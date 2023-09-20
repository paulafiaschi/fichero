"use client";
import { useState } from "react";
import styles from "../ficha.module.scss";

import CategoryButton from "./CategoryButton";
import Ficha from "./Ficha";

export default function Main(props) {
  const [filter, setFilter] = useState("Todas");
  const [filteredList, setFilteredList] = useState(props.data);

  function filterList(f) {
    setFilter(f);
    setFilteredList(props.data.filter((ficha) => ficha.Categoria === f));
  }
  return (
    <>
      {/* <h2>Categoría: {filter}</h2> */}
      <div className={styles.buttons}>
        <button
          className={filter === "Todas" ? `${styles.active}` : null}
          category="Todas"
          onClick={() => {
            setFilter("Todas");
          }}>
          Todas
        </button>
        <button
          className={filter === "Emergencias" ? `${styles.active}` : null}
          category="Emergencias"
          onClick={() => {
            filterList("Emergencias");
          }}>
          Emergencias
        </button>
        <button
          className={
            filter === "Construyendo Comunidad" ? `${styles.active}` : null
          }
          category="Construyendo Comunidad"
          onClick={() => {
            filterList("Construyendo Comunidad");
          }}>
          Construyendo Comunidad
        </button>
      </div>

      <div className={styles.fichero}>
        {filter === "Todas"
          ? props.data.map((ficha) => {
              return <Ficha props={ficha} key={ficha._id} />;
            })
          : filteredList.map((ficha) => {
              return <Ficha props={ficha} key={ficha._id} />;
            })}
      </div>
    </>
  );
}
