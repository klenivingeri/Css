let btn = document.querySelector('[type=submit]')

btn.addEventListener('click', e => {
  e.preventDefault();
  let login = document.querySelector('.load').classList.toggle('active')
  btn.textContent = login ? '...' : 'Login';
})