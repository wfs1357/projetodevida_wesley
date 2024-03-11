const botoes = document.querySelector(".botao")


for(let i = 0; i < botoes.length; i++) {
  botoes[i].onclock = function () {
     for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
     }
     botoes[i].classList.remove("ativo");
  }
}