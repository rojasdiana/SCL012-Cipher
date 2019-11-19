// window.cipher = {
//   encode: (numero,nuevoMensaje) => {
//     const aMayuscula = nuevoMensaje.toUpperCase();
//     console.log(aMayuscula)
    
//   for (let i = 0; i < nuevoMensaje.length; i++){
//         let mensajeAscii = aMayuscula.charCodeAt(i);//contar cmo numero
//         let formula = (mensajeAscii -  65 + numero)%26 + 65; //cipher
//         let mensajeCifrado = String.fromCharCode(formula); // volver a letra
//         console.log(mensajeCifrado)
//         imprimir += mensajeCifrado;
//     }
    
//   document.getElementById("resultado").value=imprimir;  // value para input /texare.innerHtml
// }
    
//   },
//   decode: (nuermo,nuevoMensaje) => {
//     let aMayuscula = nuevoMensaje.toUpperCase();
//     console.log(aMayuscula)
    
//     let imprimir = "";
    
//     for (let i = 0; i < nuevoMensaje.length; i++){
//         let mensajeAscii = aMayuscula.charCodeAt(i);//contar cmo numero
//         let formula = (mensajeAscii - 90 - numero)%26 + 90; //cipher
//         let mensajeCifrado = String.fromCharCode(formula); // volver a letra
//         console.log(mensajeCifrado)
//         imprimir += mensajeCifrado;
//     }
    
    
//     document.getElementById("resultado").value=imprimir;
// }


//   }
// };
