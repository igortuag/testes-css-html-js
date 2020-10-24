// Padrão de CEP
const regexCEP = /\d{5}[\s-]?\d{3}/g;

const ceps = ["00000-000", "00000 000", "00000000", "000000"];

for (cep of ceps) {
  console.log(cep, cep.match(regexCEP));
}

// Padrão de CPF
const regexCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

const cpfs = [
  "000.000.000-00",
  "000-000-000-00",
  "000.000.000.00",
  "000000000-00",
  "00000000000",
  "0000000000",
];

for (cpf of cpfs) {
  console.log(cpf, cpf.match(regexCPF));
}
