// const regexp = /\w+/gi;

// const regexp1 = new RegExp("\\w", "gi");

// const frase = "JavaScript Linguagem 101";
// console.log(frase.replace(regexp, "X"));
// console.log(frase.replace(regexp1, "X"));

// console.log(regexp.flags)
// console.log(regexp.global)
// console.log(regexp.global)
// console.log(regexp.ignoreCase)
// console.log(regexp.source)

// const regexp = /Java/g;

// const frase = "JavaScript e Java Linguagem 101";

// let i = 1;
// while (regexp.test(frase)) {
//   i++;
// }
// console.log(i);

const frase = `JavaScript, TypeScript e CoffeScript, Java`;

const regexp = /\w+/g;

let regexpResult;

while ((regexpResult = regexp.exec(frase)) !== null) {
  console.log(regexpResult[0]);
}
