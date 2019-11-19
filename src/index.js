

//const offset = document.getElementById("numero");
//const mensajeUsuario = document.getElementById("mensaje");
let cifrar = document.getElementById("btnCifrar");
let decifrar = document.getElementById("btnDecifrar");
let resultado = document.getElementById("resultado");

cifrar.addEventListener("click", encode);

function encode() {
    const numero= parseInt(document.getElementById("numero").value);
    const nuevoMensaje = document.getElementById("mensaje").value;
    
    let aMayuscula = nuevoMensaje.toUpperCase();
    console.log(aMayuscula)
    
    let imprimir ="";
    
    for (let i = 0; i < nuevoMensaje.length; i++){
        let mensajeAscii = aMayuscula.charCodeAt(i);//contar cmo numero
        let formula = (mensajeAscii -  65 + numero)%26 + 65; //cipher
        let mensajeCifrado = String.fromCharCode(formula); // volver a letra
           // - Caso para letras Mayúsculas según el ASCII
           if ((mensajeAscii >= 65) && (mensajeAscii <= 90))
       
        console.log(mensajeCifrado)
        imprimir += mensajeCifrado;
    }
    
    
    document.getElementById("resultado").value=imprimir;  // value para input /texare.innerHtml

decifrar.addEventListener("click", decode);

function decode (){
    const numero= parseInt(document.getElementById("numero").value);
    const nuevoMensaje = document.getElementById("mensaje").value;
    
    let aMayuscula = nuevoMensaje.toUpperCase();
    console.log(aMayuscula)
    
    let imprimir = "";
    
    for (let i = 0; i < nuevoMensaje.length; i++){
        let mensajeAscii = aMayuscula.charCodeAt(i);//contar cmo numero
        let formula = (mensajeAscii - 90 - numero)%26 + 90; //cipher
        let mensajeCifrado = String.fromCharCode(formula); // volver a letra
           // - Caso para letras Mayúsculas según el ASCII
           if ((mensajeAscii >= 65) && (mensajeAscii <= 90))
     
        console.log(mensajeCifrado)
        imprimir += mensajeCifrado;
    }
    
    
    document.getElementById("resultado").value=imprimir;
}

}