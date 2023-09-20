import styles from "../ficha.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Ficha({ props }) {
  const [openFile, setOpenFile] = useState(false);

  function handleFile() {
    setOpenFile((old) => !old);
    console.log(openFile);
  }
  return openFile === false ? (
    <div className={styles.fichaClosed} onClick={() => handleFile()}>
      <p className={styles.nombre}>
        {props.Nombre} | {props.Tipo}
      </p>
      <p className={styles.tel}>📞 {props.Tel} </p>
      <p>
        🔗 <Link href={props.Web}>Página Web</Link>
      </p>
    </div>
  ) : (
    <div className={styles.ficha}>
      <p onClick={() => handleFile()}>X</p>
      <p>
        {props.Categoria} | {props.Tipo}
      </p>
      <h2 className={styles.nombre}>{props.Nombre}</h2>

      <p>
        🗣️ {props.Contacto} | 📞 {props.Tel}
      </p>
      <p>
        🔗 <Link href={props.Web}>Página Web</Link> | ✉️ {props.Email}
      </p>
      <p>📍 {props.Direccion}</p>
      <p>💬 {props.Idioma.join(", ")}</p>
      <p>💰 {props.Precio}</p>
      <p>🗒️ {props.Descripcion}</p>
      <p>⁉️ {props.Tips}</p>
    </div>
  );
}
