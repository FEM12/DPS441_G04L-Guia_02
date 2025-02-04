"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');   
  const [resultado, setResultado] = useState(null);

  const operacion = (operador) => {

    let num1 = parseFloat(numero1);
    let num2 = parseFloat(numero2)

    if(operador == "√" && num1 < 0){      
      setResultado("Error: Se han detectado números negativos");
    }
    else{

      if(operador == "%" && (num1 == 0 || num2 == 0)){
        setResultado("Error: No se ha podido dividir entre cero");
      }
      else{

        let resultado;

        switch(operador){
          case "+": resultado = num1 + num2; break;
          case "-": resultado = num1 - num2; break;
          case "x": resultado = num1 * num2; break;
          case "%": resultado = num1 / num2; break;
          case "^": resultado = num1 ** num2; break;
          case "√": resultado = Math.sqrt(parseFloat(num1)); break;
          default: 0; break;
        }

        if(resultado){setResultado(`Resultado: ${resultado}`);}
        else{setResultado("Campos Vacíos");}

      }
      
    }

  }

  const operadores = ["+", "-", "x", "%", "^", "√"];
  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <input className={styles.inputnum} type="number" value={numero1} placeholder="Primer número" onChange={(e) => setNumero1(e.target.value)} /> 
        </div>
        <div className={styles.numeros}>
          <input className={styles.inputnum}  type="number" value={numero2} placeholder="Segundo número" onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div>   
          <>
            {operadores.map((operador) => (
              <button 
                key={operador} 
                className={styles.button} 
                onClick={() => operacion(operador)}
              > {operador}
              </button>
            ))}
          </>

        </div>
        <br></br>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>   
  );
}
