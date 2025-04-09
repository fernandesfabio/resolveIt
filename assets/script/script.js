


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
    let emailCadstro = email.value;
    event.preventDefault(); 
    Swal.fire({
      title: "Email enviado!",
      text: "Aguarde o retorno de um de nossos vendedores no email: " +emailCadstro,
      icon: "success"
    });

    document.querySelector('.form-cotacao').reset();
  }
// ==============================
// /Mensagem Cotação
// ==============================


document.addEventListener('DOMContentLoaded', () => {
  const imageList = document.getElementById('list');
  const images = imageList.querySelectorAll('img');
  const imageWidth = images[0].offsetWidth + 20; // inclui o gap
  const totalImages = images.length;

  // Clona as imagens
  images.forEach(img => {
    const clone = img.cloneNode(true);
    imageList.appendChild(clone);
  });

  let currentIndex = 0;

  function slideToNext() {
    currentIndex++;

    imageList.scrollTo({
      left: currentIndex * imageWidth,
      behavior: 'smooth'
    });

    // Quando passar da última imagem original, reseta
    if (currentIndex >= totalImages) {
      setTimeout(() => {
        imageList.scrollTo({
          left: 0,
          behavior: 'auto'
        });
        currentIndex = 0;
      }, 510); // espera a transição suave terminar
    }
  }

  setInterval(slideToNext, 3000);
});


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
