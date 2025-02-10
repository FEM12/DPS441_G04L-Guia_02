"use client"
import { use, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const [usuario,setUsuario] = useState("");
  const [contrasena,setContrasena] = useState("");
  const [mensaje,setMensaje] = useState("");
  const credenciales = ["MR210507","DPS441_G04L"];

  const verificacionCredenciales = () => {
    if(usuario === credenciales[0] && contrasena === credenciales[1]){
      setMensaje(<div className={styles.success}>¡Inicio de sesión exitoso!</div>);
    }
    else{
      setMensaje(<div className={styles.error}>¡Error! Credenciales incorrectas</div>);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.figure}>LOGIN</div>
        <input className={styles.fields} type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)}/>
        <input className={styles.fields} type="password" placeholder="Contraseña" onChange={(e) => setContrasena(e.target.value)}/>
        <button className={styles.fields} onClick={verificacionCredenciales}>Iniciar sesión</button>
        {mensaje}
      </div>
    </main>
  );
}
