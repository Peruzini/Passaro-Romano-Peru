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
C64.addEventListener('change', escondeInc);

var resultado = document.querySelector('p');
var inc = parseInt(document.getElementById('incrt').value);
console.log(inc);
console.log(typeof inc);

botao.addEventListener('click', function(event) {
    event.preventDefault();
    checaOpcao();
});

function CodificarCesar(mensagem) {
    mensagem = mensagem.split("");
    console.log(mensagem);
    let indexAtual = mensagem.map((x) => x.charCodeAt());
    console.log(indexAtual);
    let indexNovo = indexAtual.map((x) => x+inc);
    console.log(indexNovo);
    let mensagemNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
    console.log(mensagemNova);
    return mensagemNova;
}

function DecodificarCesar(mensagem) {
    mensagem = mensagem.split("");
    let indexAtual = mensagem.map((x) => x.charCodeAt())
    let indexNovo = indexAtual.map((x) => x-inc);
    let mensagemNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
    console.log(mensagemNova);
    return mensagemNova;
}
function checaOpcao () {
    var mensagem = document.getElementById('retorno').value;
    console.log(mensagem);

    if (code.checked) {
        if (cesar.checked) {
            console.log("Codificar César")
            resultado.innerText = codeCesar(mensagem);
        } else {
            console.log("Codificar base64")
            resultado.innerText = btoa(mensagem);
        } 
    } else if (decode.checked) {
        if (cesar.checked) {
            console.log("Decodificador da Base César")
            resultado.innerText = decodeCesar(mensagem);
        } else {
            console.log("Decodificar da Base 64")
            resultado.innerText = atob(mensagem);
        } 
    } else {
        resultado.innerText = "Escolha um procedimento válido.";
    }
}
