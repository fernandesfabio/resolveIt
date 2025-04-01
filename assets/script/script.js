
let navbar = document.querySelector('#header');

document.addEventListener('scroll', ()=>{
    let scrollTop = window.scrollY;

    if(scrollTop > 200){
        navbar.classList.add('rolar');
    }else {
        navbar.classList.remove('rolar');
    }
});