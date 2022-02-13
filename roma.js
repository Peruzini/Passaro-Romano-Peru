var code = document.getElementById('code');
var decode = document.getElementById('decode');
var botao = document.getElementById('enviar');

//Função de mudar o texto de acordo com botão selecionado
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

//Função de mostar incremento

function mostrarincremento() { 
    incremento.style.display = "block"; 
}

function escondeincremento() {
    incremento.style.display = "none";
}

cesar.addEventListener('change', mostrarincremento);
base64.addEventListener('change', escondeincremento);
//Adicionar variaveis de seleção e mostrar codigo selecionado

var resultado = document.querySelector('p');
var incremento1 = parseInt(document.getElementById('incrt').value);
console.log(incremento1);
console.log(typeof incremento1);

botao.addEventListener('click', function(event) {
    event.preventDefault();
    checaOpcao();
});
//Função code cesar
function codeCesar(msg) {
    msg = msg.split("");
    console.log(msg);
    let indexAtual = msg.map((x) => x.charCodeAt());
    console.log(indexAtual);
    let indexNovo = indexAtual.map((x) => x+incremento1);
    console.log(indexNovo);
    let msgNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
    console.log(msgNova);
    return msgNova;
}
// Função decode Cesar
function decodeCesar(msg) {
    msg = msg.split("");
    let indexAtual = msg.map((x) => x.charCodeAt())
    let indexNovo = indexAtual.map((x) => x-inc);
    let msgNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
    console.log(msgNova);
    return msgNova;
}

function checaOpcao () {
    var msg = document.getElementById('retorno').value;
    console.log(msg);

    if (code.checked) {
        if (cesar.checked) {
            console.log("Codificar César")
            resultado.innerText = codeCesar(msg);
        } else {
            console.log("Codificar base64")
            resultado.innerText = btoa(msg);
        } 
    } else if (decode.checked) {
        if (cesar.checked) {
            console.log("Decodificar César")
            resultado.innerText = decodeCesar(msg);
        } else {
            console.log("Decodificar base64")
            resultado.innerText = atob(msg);
        } 
    } else {
        resultado.innerText = "Escolha um procedimento válido.";
    }
}

