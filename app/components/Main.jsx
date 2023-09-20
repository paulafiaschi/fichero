"use client";
import { useState } from "react";
import styles from "../ficha.module.scss";

import CategoryButton from "./CategoryButton";
import Ficha from "./Ficha";

export default function Main(props) {
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState(props.data);

  function filterList(f) {
    setFilter(f);
    setFilteredList(props.data.filter((ficha) => ficha.Categoria === f));
    console.log(filter);
  }
  return (
    <>
      <div>
        <button
          category="all"
          onClick={() => {
            setFilter("all");
          }}>
          Todas
        </button>
        <button
          category="Emergencias"
          onClick={() => {
            filterList("Emergencias");
          }}>
          Emergencias
        </button>
        <button
          category="Construyendo Comunidad"
          onClick={() => {
            filterList("Construyendo Comunidad");
          }}>
          Construyendo Comunidad
        </button>
      </div>
      {filter === "all"
        ? props.data.map((ficha) => {
            return <Ficha props={ficha} key={ficha._id} />;
          })
        : filteredList.map((ficha) => {
            return <Ficha props={ficha} key={ficha._id} />;
          })}
    </>
  );
}
