// ==============================
// Scroll da tela
// ==============================
let navbar = document.querySelector('#header');

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY;

    if(scrollTop > 1){
        navbar.classList.add('rolar');
    }else {
        navbar.classList.remove('rolar');
    }
});
// ==============================
// /Scroll da tela
// ==============================

// 

// ==============================
// Botão Sandwich
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("menu-toggle");
    let menuMobile = document.getElementById("menu");
    let icon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", function () {
        menuMobile.classList.toggle("abrir");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });
});
// ==============================
// /Botão Sandwich
// ==============================

//

// ==============================
// Mensagem newsletter
// ==============================
function sendEmail(event) {
    event.preventDefault(); // Evita recarregar a página
    const email = document.getElementById("emailInput").value;
    
    if (!email) {
        alert("Por favor, insira um email.");
        return;
    }

    alert("Email cadastrado com sucesso: " + email);
}
// ==============================
// /Mensagem newsletter
// ==============================

//

// ==============================
// transições de elementos na página
// ==============================
const myObserver = new IntersectionObserver( (entries) =>{
  entries.forEach( (entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (elements) => myObserver.observe(elements))
// ==============================
// /transições de elementos na página
// ==============================