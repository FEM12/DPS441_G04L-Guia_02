import Image from "next/image";
import styles from "./page.module.css";

const Equipos = ({ equipos }) => {   
  return (   

    <div className={styles.container__list}>   
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (   
        <div key={equipo.id}>   
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>   
          <ul>

            {equipo.plantilla.map((jugador) => (  

              <li className={styles.container__list} key={jugador.id}> 
                <img src={jugador.foto}></img>
                <br></br>
                <strong>{jugador.nombre}</strong>   
                <p>
                  Altura: {jugador.Altura}
                  <br></br> 
                  Peso:   {jugador.Peso}
                </p>
              </li>

            ))}   

          </ul>
        </div>
      ))}
    </div>
  );
};   

export default function Home() {

  const equiposData = [

    {
      "id": 1,  
      "nombre": "Real Madrid",
      "plantilla":[
        {"id": 1,"foto":"https://img.a.transfermarkt.technology/portrait/big/50202-1665067742.jpg?lm=1","nombre":"Eden Hazard","Altura":"1.75","Peso":"74Kg"},
        {"id": 2,"foto":"https://img.a.transfermarkt.technology/portrait/big/935230-1701294395.jpg?lm=1","nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg"},
        {"id": 3,"foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRWazUvN2ugJfCPNRSm28LHZQ1NYUZ8J6NQ&s","nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg"}
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla":[
        {"id": 1,"foto":"https://b.fssta.com/uploads/application/soccer/headshots/1835.vresize.350.350.medium.4.png","nombre":"Marc-André ter Stegen","Altura":"1.75","Peso":"74Kg"},
        {"id": 2,"foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJkdt-S_baFV5OzCNlA2IeTbWHmZhUCbQOA&s","nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74Kg"},
        {"id": 3,"foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJFSeYHzA9RdJUjwxsnSH97yYrCDJrL0uQg&s","nombre":"Gavi","Altura":"1.85","Peso":"81Kg"}
      ]
    },
    {
      "id": 3,
      "nombre": "Manchester United",
      "plantilla": [
          {"id": 1, "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnG07gVnyXCDXkOE_5GP3WOC6RKpH269GyLw&s", "nombre": "Bruno Fernandes", "Altura": "1.79", "Peso": "69Kg"},
          {"id": 2, "foto":"https://www.zerozero.pt/img/jogadores/new/40/80/434080_marcus_rashford_20240815221626.png", "nombre": "Marcus Rashford", "Altura": "1.86", "Peso": "78Kg"},
          {"id": 3, "foto":"https://b.fssta.com/uploads/application/soccer/headshots/866.png", "nombre": "Casemiro", "Altura": "1.85", "Peso": "84Kg"}
      ]
    },
    {
      "id": 4,
      "nombre": "Bayern Múnich",
      "plantilla": [
          {"id": 1, "foto":"https://img.uefa.com/imgml/TP/players/3/2024/324x324/97923.jpg", "nombre": "Manuel Neuer", "Altura": "1.93", "Peso": "92Kg"},
          {"id": 2, "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkge0f3C3LFziasU-amNBz6W_u0Ux_8qgzgg&s", "nombre": "Joshua Kimmich", "Altura": "1.77", "Peso": "73Kg"},
          {"id": 3, "foto":"https://b.fssta.com/uploads/application/soccer/headshots/2306.png", "nombre": "Leroy Sané", "Altura": "1.83", "Peso": "75Kg"}
      ]
    }

  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div> 
    </main>
  );
}
