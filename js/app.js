let atrasBtn = document.getElementById("atrasBtn")
let adelanteBtn = document.getElementById("adelanteBtn")
let scrollContainer = document.querySelector(".slider-box") //scrollContainer es donde estan todas las tarjetas

adelanteBtn.addEventListener('click', function() { //cuando haga click se va a activar la funcion tenemos que poner en la funcion que queremos que pase
    scrollContainer.scrollBy({
        left: 1250,
        behavior: "smooth"
    })
})

atrasBtn.addEventListener('click',function() {
    scrollContainer.scrollBy({
        left: -1250,  // left de nuevo porque scroll no detecta a right como para moverse solo left
        behavior: "smooth" // behavior es el comportamiento con el que va hacer scroll
    })
})