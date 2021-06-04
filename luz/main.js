

var botaoDeLuz = document.getElementById('btn')
botaoDeLuz.addEventListener('click', verificaLuz)

function verificaLuz(event) {
  var fundo = document.getElementById('fundo')
  var botao = document.getElementById('btn')

  botao.classList.toggle('ativo')
  fundo.classList.toggle('desativado')

  const active = fundo.classList.contains('desativado')
}
