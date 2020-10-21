// const carro = {
//   marca: "Fiat",
//   ano: 2018,
//   portas: 4,
// };

// const { marca, ano: teste } = carro;

// console.log(marca);
// console.log(teste);

// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira, segunda, terceira] = frutas;

// console.log(primeira)

function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode)
}

document.addEventListener('keydown', handleKeyboard)