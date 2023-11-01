//________ Configuração do menu hamburguer ______________
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector("#nav-menu");
const menuInicio = document.querySelector("#inicio");


hamburguer.addEventListener("click", () =>{
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
})

menuInicio.addEventListener("click", () =>{
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
})

//________ Configuração dos itens de duvidas ______________
var elementoDuvidas = document.querySelectorAll('.duvida');
elementoDuvidas.forEach(function (duvida){
  duvida.addEventListener('click', function(){
    duvida.classList.toggle('ativa')
  })
})