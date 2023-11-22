import styles from "../ficha.module.scss";
import Link from "next/link";

import React from "react";
import Collapsible from "react-collapsible";

export default function Ficha({ props }) {
  let summary = (
    <div className={styles.summary}>
      <div className={styles.fichaClosed}>
        <p className={styles.nombre}>
          <span>{props.Nombre}</span> | <span>{props.Tipo}</span>
        </p>
        <p className={styles.tel}>
          {props.Tel != ""
            ? `📞 ${props.Tel}`
            : props.Contacto != props.Tel
            ? `🗣️ ${props.Contacto}`
            : ""}
        </p>
        Í
        <div>
          🔗 <Link href={props.Web}>Página Web</Link>{" "}
          {props.Email != "" ? `| ✉️ ${props.Email}` : ""}
        </div>
      </div>
      <div className="arrow">^</div>
    </div>
  );
  return (
    <>
      <Collapsible trigger={summary} className={styles.header}>
        <p className={styles.descripcion}>🗒️ {props.Descripcion}</p>
        <hr></hr>
        <div className={styles.details}>
          <p>
            {props.Direccion != "" && props.Precio != ""
              ? `📍 ${props.Direccion} | 💰 ${props.Precio}`
              : props.Direccion != "" && props.Precio === ""
              ? `📍 ${props.Direccion}`
              : props.Precio != ""
              ? `💰 ${props.Precio}`
              : null}
          </p>
          <p>💬 {props.Idioma.join(", ")}</p>
          {props.Tips != "" ? <p>⁉️ {props.Tips}</p> : null}
        </div>
      </Collapsible>
    </>
  );
}
