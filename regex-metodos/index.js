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

// const frase = `JavaScript, TypeScript e CoffeScript, Java`;

// const regexp = /\w+/g;

// let regexpResult;

// while ((regexpResult = regexp.exec(frase)) !== null) {
//   console.log(regexpResult[0]);
// }

// const frase = `JavaScript, TypeScript e CoffeScript, Java`;

// const regexp = /[a-z]/gi;

// const result = frase.split(regexp)

// console.log(result)

// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;

// const regexp = /<li/g;

// const result = tags.replace(regexp, '$& class="ativo"')

// console.log(result)

// const emails = `
// empresa@email.com
// contato@email.com
// suporte@email.com
// `

// const regexp = /(\w+@)[\w.]+/g;

// console.log(emails.replace(regexp, '$1gmail.com'))

const emails = `
joao@homail.com.br
marta@ggmail.com
bruna@oulook.com.br
igortuag@gmail.com
`;

const regexp = /(\w+@)([\w.]+)/g;

console.log(
  emails.replace(regexp, (...args) => {
    if(args[2] === 'homail.com.br') {
      return args[1] + 'hotmail.com.br';
    } else if (args[2] === 'ggmail.com') {
      return args[1] + 'gmail.com';
    } else if (args[2] === 'oulook.com.br') {
      return args[1] + 'outlook.com.br';
    } else {
      return args[0]
    }
  }),
);
