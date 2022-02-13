var code = document.getElementById('code');
var decode = document.getElementById('decode');
var botao = document.getElementById('botaoEnviar');


function mudaBotao () {
    if (decode.checked) {
        botao.innerText = "Decodificar!";
    } else if (code.checked) {
        botao.innerText = "Codificar!";
    }
}

