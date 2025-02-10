"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const [grados,setGrados] = useState(0);
  const [resultado,setResultado] = useState(0);

  const conversorFahrenheitCelsius = () => {
    let calculoFahrenheitCelsius = (grados-32)*(5/9);
    setResultado(parseFloat(calculoFahrenheitCelsius).toFixed(4));
  }

  const conversorCelsiusFahrenheit = () => {
    let calculoCelsiusFahrenheit = (grados*(9/5))+32;
    setResultado(calculoCelsiusFahrenheit);
  }

  return (
    <main className={styles.main}>
      <p>Conversor de grados</p>
      <div className={styles.container}>
        <input type="number" placeholder="Grados a convertir" onChange={(e) => setGrados(e.target.value)}/>
        <div className={styles.subContainer}>
          <button className={styles.button} onClick={conversorFahrenheitCelsius}>Fahrenheit → Celsius</button>
          <button className={styles.button} onClick={conversorCelsiusFahrenheit}>Celsius → Fahrenheit</button>
        </div>
        <span>{resultado}</span>
      </div>
    </main>
  );
}
