const frutas = ["Banana", "Uva", "Morango"];
const frase = "Isso é JavaScript";

// for (const fruta of frutas) {
//   console.log(fruta);
// }

// for (const char of frase) {
//   console.log(char);
// }

const buttons = document.querySelectorAll('button');

for(const btn of buttons){
  btn.style.color = 'white'
}

console.log(...buttons)

// fetch("https://pokeapi.co/api/v2/pokemon").then(({ headers }) =>
//   console.log(headers),
// );

const carro = {
  marca: 'Honda',
  ano: 2018,
}

for(const chave in carro) {
  console.log(chave, carro[chave])
}