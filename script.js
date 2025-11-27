
let body = document.querySelector('body')
let tenis = document.querySelector('.img-tênis')
let button = document.querySelector('.botao-carrinho')


function mudarVisul(cor, imagem) {
   tenis.classList.add("troca-efeito")

   body.style.background = cor
   button.style.background = cor



   setTimeout(() => {
      tenis.src = imagem
      tenis.classList.remove("troca-efeito")
   }, 400);



}