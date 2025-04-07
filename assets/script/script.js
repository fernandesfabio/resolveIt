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
    let menuToggle = document.getElementById("menu-toggle");
    let menuMobile = document.getElementById("menu");
    let icon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", function () {
        menuMobile.classList.toggle("abrir");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });
});

//


// mensagem newsletter

function sendEmail(event) {
    event.preventDefault(); // Evita recarregar a página
    const email = document.getElementById("emailInput").value;
    
    if (!email) {
        alert("Por favor, insira um email.");
        return;
    }

    alert("Email cadastrado com sucesso: " + email);
}

//


// ==============================
// Carrossel de Páginas do Sistema
// ==============================
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);