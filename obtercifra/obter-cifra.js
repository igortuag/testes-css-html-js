export default class ObterCifra {
  constructor(element) {
    this.element = element;
  }
  obterLinhas(letra) {
    return letra.split("\n");
  }
  obterTrechos(linha) {
    const regexpTrecho = /(\[.{1,3}\][A-Z^-ž\s\,\;]*)|([A-Z^-ž\s\,\;]*)/g;
    const trechos = linha.match(regexpTrecho);
    const trechosObj = trechos.map((trecho) => {
      const regexpAcord = /\[.{1,3}\]/g;
      const trechoLetra = trecho.replace(regexpAcord, "");
      const trechoAcord = trecho.match(regexpAcord) ? trecho.match(regexpAcord)[0] : "";
      return { trecho: trechoLetra, acorde: trechoAcord };
    });
    return trechosObj;
  }
  iniciar() {
    const linhas = this.obterLinhas(this.element);
    const linhasObj = linhas.map((linha) => this.obterTrechos(linha));
    console.log(linhasObj);
    return this;
  }
}
