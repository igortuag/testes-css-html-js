const ListaCompras = [
  { nome: "Pão", preco: 1 },
  { nome: "Leite", preco: 2 },
  { nome: "Carne", preco: 3 },
  { nome: "Sabão", preco: 4 },
  { nome: "Bucha", preco: 5 },
  { nome: "Batata", preco: 6 },
];

let total = ListaCompras.map((item) => item.preco).reduce((acumulador, precoAtual) => {
  console.log("Atual: " + precoAtual + "       Total: " + acumulador)
  return precoAtual + acumulador
}, 0)

console.log(total)
