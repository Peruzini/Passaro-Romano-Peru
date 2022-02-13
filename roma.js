var code = document.getElementById('codico');
var decode = document.getElementById('decodico');
var botaoenviar = document.getElementById('enviar');

function mudaB () {
    if (decode.checked) {
        botao.innerText = "Decodificar!";
    } else if (code.checked) {
        botao.innerText = "Codificar!";
    }
}