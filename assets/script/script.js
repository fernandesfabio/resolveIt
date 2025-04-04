// SCROLL DA TELA
let navbar = document.querySelector('#header');

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY;

    if(scrollTop > 200){
        navbar.classList.add('rolar');
    }else {
        navbar.classList.remove('rolar');
    }
});

// 

// BOTÃO SANDWICH

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const icon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show-menu");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });
});

//


// mensagem newsletter

function sendEmail(){
    alert('Cadastro realizado com sucesso!')
}