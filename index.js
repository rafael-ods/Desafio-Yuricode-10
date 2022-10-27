const botaoMenu = document.querySelector('.botao__menu')
const menu = document.querySelector('.menu__lista')


botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__lista--Ativa')
})