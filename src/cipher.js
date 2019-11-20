window.cipher = {
  encode: (numero,nuevoMensaje) => {
    let resultado = "";
  
      
    for (let i = 0; i < nuevoMensaje.length; i++){
  
      let mensajeAscii = nuevoMensaje.charCodeAt(i);
      let formula = (mensajeAscii -  65 + numero)%26 + 65; 
      if ((mensajeAscii >= 65) && (mensajeAscii <= 90))
      resultado  += String.fromCharCode(formula);
      
    } 

   return resultado
  },
  decode: (numero,nuevoMensaje) => {
      let resultado = "";
      
      for (let i = 0; i < nuevoMensaje.length; i++){
        let mensajeAscii = nuevoMensaje.charCodeAt(i);
        let formula = (mensajeAscii - 90 - numero)%26 + 90; 
        let mensajeDecifrado = String.fromCharCode(formula); 
        if ((mensajeAscii >= 65) && (mensajeAscii <= 90))
        resultado += mensajeDecifrado;
      }
      
      return resultado;
     
    }
};