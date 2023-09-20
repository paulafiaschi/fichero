import styles from "../ficha.module.scss";
import Link from "next/link";

export default function Ficha({ props }) {
  return (
    <div className={styles.ficha}>
      <p>
        {props.Categoria} | {props.Tipo}
      </p>
      <h2 className={styles.nombre}>{props.Nombre}</h2>

      <p>
        🗣️ {props.Contacto} | 📞 {props.Tel}
      </p>
      <p>
        🔗 <Link href={props.Web}>{props.Web}</Link> | ✉️ {props.Email}
      </p>
      <p>📍 {props.Direccion}</p>
      <p>💬 {props.Idioma.join(", ")}</p>
      <p>💰 {props.Precio}</p>
      <p>🗒️ {props.Descripcion}</p>
      <p>⁉️ {props.Tips}</p>
    </div>
  );
}
