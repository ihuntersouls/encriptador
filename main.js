/* Funcion encriptar */
function encriptar (){
    let texto = document.querySelector("#texto").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#textoEncriptado").value = textoCifrado;
    document.querySelector("#texto").value;
    }
 
    let btnEncriptar = document.querySelector("#encriptarBoton"); 
    btnEncriptar.onclick = encriptar;

/* Funcion desencriptar */
function desencriptar (){ 
    let texto = document.querySelector("#texto").value; 
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#textoEncriptado").value = textoCifrado; 
    document.querySelector("#texto").value;
}

    let btnDesencriptar = document.querySelector("#desencriptarBoton"); 
    btnDesencriptar.onclick = desencriptar;

/*Funcion copiar */
let copyTextareaBtn = document.querySelector('#botonCopiar');

copyTextareaBtn.addEventListener('click', function(event) {
  let copyTextarea = document.querySelector('#textoEncriptado');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    let successful = document.execCommand('copy');
    let msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});