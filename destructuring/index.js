// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);
const { background, margin, color } = btnStyles
console.log(background, margin, color)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = "HTML";
[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixoconst
cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};
const { cor } = cachorro;
console.log(cor)
