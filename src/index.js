
const cifrar = document.getElementById("btnCifrar");
const decifrar = document.getElementById("btnDecifrar");
const textFinal = document.getElementById("resultado")

cifrar.addEventListener("click", function(){
    let numero = parseInt(document.getElementById("numero").value);
    let nuevoMensaje1 = document.getElementById("mensaje").value;
    let nuevoMensaje = nuevoMensaje1.toUpperCase();
    
    textFinal.innerHTML = window.cipher.encode(numero, nuevoMensaje);
});

decifrar.addEventListener("click", function (){
    let numero= parseInt(document.getElementById("numero").value);
    let nuevoMensaje1 = document.getElementById("mensaje").value;
    let nuevoMensaje = nuevoMensaje1.toUpperCase();

    textFinal.innerHTML = window.cipher.decode(numero, nuevoMensaje);
});



  


