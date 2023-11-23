"use client";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
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
      {" "}
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
      {/* <h2>Categoría: {filter}</h2> */}
      <div className={styles.buttons}>
        <h3>Categorías</h3>
        <button
          className={filter === "Todas" ? `${styles.active}` : null}
          onClick={() => {
            setFilter("Todas");
          }}>
          Todas
        </button>
        <button
          className={filter === "Emergencias" ? `${styles.active}` : null}
          onClick={() => {
            filterList("Emergencias");
          }}>
          Emergencias
        </button>
        <button
          className={
            filter === "Construyendo Comunidad" ? `${styles.active}` : null
          }
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
