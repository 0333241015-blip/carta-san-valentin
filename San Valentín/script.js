const btnSi = document.getElementById("si");
const btnNo = document.getElementById("no");
const titulo = document.getElementById("titulo");

let estado = 0;

/*
Estados:
0 = Inicio
1 = ¿Estás segura?
2 = ¿Vas a seguir de cargosa?
*/

btnNo.addEventListener("click", () => {

    if (estado === 0) {
        titulo.innerText = "¿Estás segura?";
        estado = 1;
    }

    else if (estado === 1) {
        titulo.innerText = "¿Vas a seguir de cargosa?";
        estado = 2;
    }

    else if (estado === 2) {
        titulo.innerText = "Entonces vuelve a elegir mi amorcito ";
        setTimeout(() => {
            reiniciar();
        }, 1500);
    }
});


btnSi.addEventListener("click", () => {

    if (estado === 0) {
        // Si dice sí a la primera → ir a otra página
        window.location.href = "acepto.html";
    }

    else if (estado === 1) {
        // Si dice sí en "¿Estás segura?"
        titulo.innerText = "¿Vas a seguir de cargosa?";
        estado = 2;
    }

    else if (estado === 2) {
        // Si dice sí en "¿Vas a seguir de cargosa?"
        titulo.innerText = "Entonces vuelve a elegir loca";
        setTimeout(() => {
            reiniciar();
        }, 1500);
    }
});


function reiniciar() {
    titulo.innerText = "¿Quieres ser mi San Valentín?";
    estado = 0;
}