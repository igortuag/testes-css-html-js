function perimetroForma(...args) {
  return args.reduce((acm, el) => acm * el);
}

console.log(perimetroForma(10, 4));
console.log(perimetroForma(10));

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um " + premio);
  });
}

const ganhadores = ["Pedro", "Marta", "Maria", "Beto"]

anunciarGanhadores("Carro", ...ganhadores);

const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];

const comidas = [...frutas, "Pizza", ...legumes];

console.log(comidas);

const todosOsNumeros = [3,4,5,12,3,8,97,14,52,63,46,98]
const numeroMaximo = Math.max(...todosOsNumeros)

console.log(numeroMaximo)