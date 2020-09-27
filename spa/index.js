function carregarBotoes() {
  console.log("Carregar Botões!");
  const raiz = document.getElementById("root");

  raiz.innerHTML =
    "<button onclick='aparecerQuadrado()'>aparecer quadrado vermelho</button>   <button>ajuda 2</button>   <button>about-us 3</button> ";
}

function aparecerQuadrado() {
  const raiz = document.getElementById("root");
  raiz.innerHTML += "<div class='quadrado-vermelho'>QUADRADO VERMELHO</div>";
}
