


// ==============================
// Scroll da tela
// ==============================
let navbar = document.querySelector('#header');

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY;
      behavior: 'smooth'
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

  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;
  Swal.fire({
    title: "Cadastro efetuado!",
    text: `Email: ${email} cadastrado com sucesso.`,
    icon: "success"
  });
  emailInput.value = "";
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

//

// ==============================
// /Mensagem Cotação
// ==============================
  function exibirAlerta(event) {
    let email = document.getElementById('email')
    let emailCadastro = email.value;
    event.preventDefault(); 
    Swal.fire({
      title: "Formulário enviado!",
      text: `Em breve uma pessoa da nossa equipe entrara em contato com você através do email: ${emailCadastro} `,
      icon: "success"
    });

    document.querySelector('.form-cotacao').reset();
  }
// ==============================
// /Mensagem Cotação
// ==============================

//

// ==============================
// Caroussel empresas parceiras
// ==============================
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack');
  const images = Array.from(track.children);
  const imageWidth = images[0].offsetWidth + 20; // gap

  // Clona primeiro e último lote
  images.forEach(img => {
    track.appendChild(img.cloneNode(true)); // fim
  });

  let currentIndex = 0;

  function slide() {
    currentIndex++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    // Quando chegarmos no fim do clone, resetamos instantaneamente
    if (currentIndex === images.length) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
        currentIndex = 0;
      }, 500); // mesmo tempo da transição
    }
  }

  setInterval(slide, 3000);
});
// ==============================
// /Caroussel empresas parceiras
// ==============================