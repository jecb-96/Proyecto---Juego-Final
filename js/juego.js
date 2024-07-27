// Variables
let puntosusuario = 0;
let puntospc = 0;
let vidas_usuario = 5;
let victorias = 0;
const puntosusuario_span = document.getElementById('usuario-score');
const puntospc_span = document.getElementById('pc-score');

const tablero_div = document.querySelector('marcador');
const result = document.querySelector('.result p');
const piedra_div = document.getElementById('piedra');
const papel_div = document.getElementById('papel');
const tijera_div = document.getElementById('tijera');

//movimiento del pc
function movidapc(){
    const opciones = ['piedra', 'papel', 'tijera'];
    //Operacion para traer numeros del 0 al 2 - Math.floor funcion para redondear un numero
    const random = Math.floor(Math.random() * 3);
    //opciones de mi arreglo y el random trae la posicion 
    const movida = opciones[random];
    return movida;
}
movidapc();


function game(opcion){
    const movidamaquina = movidapc();
    const movidausuario = opcion;
    // alert("Usuario: "+ movidausuario + "! pc: " +movidamaquina);

//aumenta contador del usuario
function ganar(opcionusuario, opcionpc){
    puntosusuario++;
    puntosusuario_span.innerHTML= puntosusuario;
    result.innerHTML= opcionusuario+ " le gana a " +opcionpc + ". Tu ganaste";
    victorias++;

    // Condicional para llevar la cuenta de las victorias
    if (victorias == 5){
        alert("Ganaste el juego")
        alert("La pagina se cargara nuevamente")
        location.reload();
    }
}

//aumenta contador de la maquina
function pierda(opcionusuario, opcionpc){
    let vidas = document.getElementById('vidas');
    const imgElement = document.createElement('img');
    puntospc++;
    puntospc_span.innerHTML= puntospc;
    result.innerHTML= opcionpc+ " le gana a " +opcionusuario + ". Tu perdiste";
    vidas_usuario--;
    //alert(vidas_usuario)
    if (vidas_usuario == 4){
        // Agregar una imagen en blanco
        vidas.innerHTML = '';
        imgElement.src = 'img/4 vidas.png';
        // Agregar la imagen al documento
        vidas.appendChild(imgElement);
    }else if (vidas_usuario == 3){
        vidas.innerHTML = '';
        imgElement.src = 'img/3 vidas.png';
        vidas.appendChild(imgElement);
    }else if (vidas_usuario == 2){
        vidas.innerHTML = '';
        imgElement.src = 'img/2 vidas.png';
        vidas.appendChild(imgElement);
    } else if (vidas_usuario == 1){
        vidas.innerHTML = '';
        imgElement.src = 'img/1 vida.png';
        vidas.appendChild(imgElement);
    } else{
            vidas.innerHTML = '';
            imgElement.src = 'img/0 vidas.png';
            vidas.appendChild(imgElement);
            alert("No tienes mas vidas. El juego terminara");
            location.reload();
        }
}

function empate(opcionusuario, opcionpc){
    result.innerHTML= "Ambos eligieron "+ opcionusuario+ ". Es un empate";
}

//Opciones para jugar
switch (movidausuario + movidamaquina){
    case 'piedratijera':
    case 'papelpiedra':
    case 'tijerapapel':
        ganar(movidausuario, movidamaquina);
        // alert("Usuario gana");
    break;
    case 'piedrapapel':
    case 'papeltijera':
    case 'tijerapiedra':
        pierda(movidausuario, movidamaquina);
        // alert("Pc gana");
    break;
    case 'piedrapiedra':
    case 'papelpapel':
    case 'tijeratijera':
        empate(movidausuario);
        // alert("Empate");
    break;
    }
}

//Funcion para detectar movimiento
function main(){
    piedra_div.addEventListener('click', () => game("piedra"));
    papel_div.addEventListener('click', () => game("papel"));
    tijera_div.addEventListener('click', () => game("tijera"));
}
main();