const padraoRegex = /J/;

const texto = 'Javascript';

const novoTexto = texto.replace(padraoRegex, 'B')
console.log(novoTexto)

console.log('Javascript'.replace(/Java/, 'Type'))

console.log('Javascript'.replace(/a/g, 'i'))

console.log('Perdeu perdido'.replace(/pe/gi, 'Ba'))

console.log('Javascript'.replace(/[ai]/g, 'u'))

console.log('111.222.333-44'.replace(/[-.]/g, ''))

console.log('JavaScript é a linguagem.'.replace(/[a-zà-ú]/gi, '0'))

console.log('JavaScript é a linguagem.'.replace(/[a-zà-ú]/gi, '0'))

console.log('JavaScript é a linguagem.'.replace(/./gi, '0'))

console.log('Guarda-chuva R$ 23,00.'.replace(/\W/g, '-'))

console.log('Vaaaai ali por favor.'.replace(/a{4}/g, 'a'))


console.log('Vaiiiiiiiiiiiiiiiiii'.replace(/i+/g, 'i'))

console.log(`igortuag@gmail.com
contato@gmail.com`.replace(/^\w+/g, 'X'))