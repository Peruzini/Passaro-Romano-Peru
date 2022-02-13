var code = document.getElementById('code');
var decode = document.getElementById('decode');
var botao = document.getElementById('enviar');


function mudaBotao () {
    if (decode.checked) {
        botao.innerText = "Decod. Mensagem!";
    } else if (code.checked) {
        botao.innerText = "Codificar Mensagem!";
    }
}

var cesar = document.getElementById('cesar');
var base64 = document.getElementById('B64');
var incremento = document.getElementById('incremento');

function mostrarincremento() { 
    incremento.style.display = "block"; 
}

function escondeincremento() {
    incremento.style.display = "none";
}

cesar.addEventListener('change', mostrarincremento);
base64.addEventListener('change', escondeincremento);