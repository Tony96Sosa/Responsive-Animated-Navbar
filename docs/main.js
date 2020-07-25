const hamburguer = document.querySelector('.hamburguer');
const nav_list = document.querySelector('.nav-list');

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle("active");
});
hamburguer.addEventListener('click',()=>{
    nav_list.classList.toggle("active");
})