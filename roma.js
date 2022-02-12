var decodificar = document.getElementById('decodificar');
var codificar = document.getElementById('codificar');
var enviarB = document.getElementById('enviar');

function mudaB(){
    if(decodificar.checked){
        enviarB.innertext = "Decodificar";
    }else if(codificar.checked){
        enviarB.innertext = "Codificar"
    }
}

