/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#botongenerador").addEventListener("click", () => {
    document.querySelector("#respuesta").innerHTML = NOMBREdominio();
  });
  console.log("GENERADOR DE DOMINIOS");

  this;
};

let NOMBREdominio = () => {
  let articulos = ["MI", "TU", "SU", "EL", "VUESTRO"];

  let adjetivos = [
    "mejor",
    "super",
    "increible",
    "espectacular",
    "imperdible",
    "inmejorable"
  ];

  let nombres = [
    "BUSCADOR",
    "SALON_DE_JUEGO",
    "PRECIO_BAJO",
    "VIDEO_LOCO",
    "COCHE_DE_OCASION",
    "SALON_GAMER"
  ];

  let puntocomes = [".com", ".net", ".es", ".org", ".lol", ".juas", ".wtf"];

  let articulosINDEX = Math.floor(Math.random() * articulos.length);
  let adjetivosINDEX = Math.floor(Math.random() * adjetivos.length);
  let nombresINDEX = Math.floor(Math.random() * nombres.length);
  let puntocomesINDEX = Math.floor(Math.random() * puntocomes.length);

  return (
    articulos[articulosINDEX] +
    adjetivos[adjetivosINDEX] +
    nombres[nombresINDEX] +
    puntocomes[puntocomesINDEX]
  );
};

//-- iteration --//

// for (let articulo of articulos) {
//  for (let adjetivo of adjetivos) {
//    for (let nombre of nombres) {
//     for (let puntocome of puntocomes) {
//      NOMBREdominio.push(`${articulos}${adjetivos}${nombres}${puntocomes}`);
//  }
//  }
//}
// }
