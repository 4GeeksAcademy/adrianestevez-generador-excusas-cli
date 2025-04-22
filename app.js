const who = ["Un plátano gigante", "Una abuela ninja", "El repartidor de pizza", "El vecino"];
const action = ["hipnotizó", "secuestró", "se sentó encima de", "se comió"];
const what = ["mi planta carnívora", "mi perro", "mis deberes", "mi colección de calcetines"];
const when = ["mientras cantaba en la ducha.", "durante una batalla de breakdance.", "durante el desfile de patos.", "justo antes de salir de casa."];

const randomArrElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(`${randomArrElement(who)} ${randomArrElement(action)} ${randomArrElement(what)} ${randomArrElement(when)}`);