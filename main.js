/*encriptarCode = mensaje => {
    let encriptarMensaje;
    const mensajeArr = mensaje.split("");
    console.log("mensaje encriptado", mensajeArr);

    let encriptarMensajeArr = [];

    for(i = 0; i <= mensajeArr.length; i++){

        let vocal;
        switch(mensajeArr[i]){
            case "a":
                vocal = "ai";
                break;
            case "e":
                vocal = "enter";
                break;
            case "i":
                vocal = "imes";
                break;
            case "o":
                vocal = "ober";
                break;
            case "u":
                vocal = "ufat";
                break;
        }
        encriptarMensajeArr.push(vocal);
        console.log("encriptado mensaje en array", encriptarMensajeArr)
    }
    encriptarMensaje = encriptarMensajeArr.join("");
    return encriptarMensaje;
};

let result = (encriptarCode("qe"));
console.log(result);
*/
function encriptar (){
    let texto = document.querySelector("#texto").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#textoEncriptado").value = textoCifrado;
    document.querySelector("#texto").value;
    }


    
let boton1 = document.querySelector("#encriptarBoton"); boton1.onclick = encriptar;

function desencriptar (){ 
    let texto = document.querySelector("#texto").value; 
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#textoEncriptado").value = textoCifrado; 
    document.querySelector("#texto").value;

}

let boton2 = document.querySelector("#desencriptarBoton"); boton2.onclick = desencriptar;