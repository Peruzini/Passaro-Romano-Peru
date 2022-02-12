var decodificar = document.getElementById('decodificar');
var codificar = document.getElementById('codificar');
var enviarB = document.getElementById('enviar');

function mudaB(){
    if(decodificar.checked){
        botao.innertext = "Decodificar";
    }else if(codificar.checked){
        botao.innertext = "Codificar"
    }
}

var cesar = document.getElementById('cesar');
var C64 = document.getElementById('C64');
var incremento = document.getElementById('incrt');

function mostraInc() { 
    incremento.style.display = "block"; 
}

function escondeInc() {
    incremento.style.display = "none";
}

cesar.addEventListener('change', mostraInc);
base64.addEventListener('change', escondeInc);