
var menu = document.getElementById('botao');

menu.addEventListener('click', menutoggle)

function menutoggle() {
  var contentMenu = document.getElementById('menu')
  contentMenu.classList.toggle('active')
  const active = contentMenu.classList.contains('ativo')
}
