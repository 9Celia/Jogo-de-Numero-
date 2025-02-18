let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
     exibirTextoNaTela('h1','Acertou!');
     let palavraTentivas = tentativas > 1 ? 'tentativas' : 'tentativas';
     let mensagemTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
     exibirTextoNaTela('p','mensagemTentativas!');
     document.getElementById('reiniciar').removeAttribute('disabled;');
} else {
    if (chute > numeroScreto ) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else{
      exibirTestoNaTela('p', 'O número secreto é maior');
    }
    //tentativas = tentativas + 1;
    tentativas ++;
    limpaCampo();
 }
 function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
 }

 function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
 }
}