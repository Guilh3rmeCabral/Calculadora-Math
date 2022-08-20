function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero +  num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}


// Funções e eventos para mudanção de tema
let tela = document.querySelector('body');
var btnLight = document.querySelector('#btlight');
var btnDark = document.querySelector('#btdark');

btnDark.addEventListener('click', modoDark);
btnLight.addEventListener('click', modoLight);

function modoDark(){
    tela.classList.add("dark")
    tela.classList.remove("light")
}

function modoLight(){
    tela.classList.remove("dark")
    tela.classList.add("light")
}