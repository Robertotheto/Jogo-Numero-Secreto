listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextNaTela(tag, texto) {
  let elemento = document.querySelector(tag);
  elemento.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
}
exibirTextNaTela('h1', 'Jogo do número secreto');
exibirTextNaTela('p', 'Escolha um número entre 1 e 10!');
function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextNaTela('h1', 'Você acertou!');
    let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
    let mensagemTentativas = `Você descobriu o numero Secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    exibirTextNaTela('h1', 'Você errou!');
    if (chute > numeroSecreto) {
      exibirTextNaTela('p', 'O número secreto é menor!');
    } else {
      exibirTextNaTela('p', 'O número secreto é maior!');
    }
    tentativas++;
    limparCampo();
  }
}
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeNumerosNaLista == 10) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    return numeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector('input')
  chute.value = ''
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirTextNaTela('h1', 'Jogo do número secreto');
  exibirTextNaTela('p', 'Escolha um número entre 1 e 10!');
  document.getElementById('reiniciar').setAttribute('disabled', true)
}