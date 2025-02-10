"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  let [contador, setContador] = useState(0);

  const sumar = () => { setContador(prev => prev + 1); }
  const restar = () => {
    if(contador > 0){
      setContador(prev => prev - 1);
    }
  }

  return (
  
    <main className={styles.main}>
      <p>Incrementador y Decrementador</p>
      <div className={styles.container}>
        <span className={styles.span}>
          {contador}
        </span>
        <div className={styles.subContainer}>
          <button className={styles.button} onClick={sumar}>+1</button>
          <button className={styles.button} onClick={restar}>-1</button>
        </div>
      </div>
    </main>

  );
}
