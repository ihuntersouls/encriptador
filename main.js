function encriptar (){
    let texto = document.querySelector("#texto").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#textoEncriptado").value = textoCifrado;
    document.querySelector("#texto").value;
    }
 
    let btnEncriptar = document.querySelector("#encriptarBoton"); 
    btnEncriptar.onclick = encriptar;

function desencriptar (){ 
    let texto = document.querySelector("#texto").value; 
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#textoEncriptado").value = textoCifrado; 
    document.querySelector("#texto").value;
}

    let btnDesencriptar = document.querySelector("#desencriptarBoton"); 
    btnDesencriptar.onclick = desencriptar;