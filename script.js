const display = document.getElementById('resultado');
const classList = document.querySelector("body").classList;

function insert(num) {
    display.innerHTML += num;
}

function clean() {
    display.innerHTML = "";
}

function back() {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1);
}

function calcular() {
    const resultado = display.innerHTML;
    if(resultado) {
        display.innerHTML = eval(resultado);
    }
}


// Funções e eventos para mudanção de tema
function changeTheme(theme) {
    theme == 'dark' ? classList.add("dark") : classList.add("light");
    theme == 'dark' ? classList.remove("light") : classList.remove("dark");
}