let cadenaResultante=[];
const textos=["Sala de recepción","Pasillo","Cocina","Escalera","Habitación principal","Armario", "FIN"];
const opciones=["Ir al PASILLO", "Ir a la COCINA", "Buscar en los cajones", "Ir a SALA DE RECEPCIÓN", "Ir a ESCALERA","Buscar en el cofre", "Ir al PASILLO", "Ir a la HABITACIÓN PRINCIPAL","Ir a ESCALERA","Combatir","FIN"];
const herramientas=["Necronomicón", "Guía del Mundo Espiritual", "Agua Bendita", "Tela de araña"];

let inventario=[];
let nivelActual=1;

let activo=0;
let entrada=999;

let indiceHerramientaEncontrada;

let magia=10

function mostrarNivel(){
    switch (nivelActual){
        case 1:
            //Se mueve a cocina o escaleras
            document.getElementById("textoPrincipal").innerHTML=String(textos[0]);
            document.getElementById("boton0").innerHTML=String(opciones[0]);
            document.getElementById("boton1").innerHTML=String(opciones[1]);
            break;
        case 2:
            document.getElementById("textoPrincipal").innerHTML=String(textos[1]);
            document.getElementById("boton0").innerHTML=String(opciones[2]);
            document.getElementById("boton1").innerHTML=String(opciones[3]);
            break;
        case 3:
            document.getElementById("textoPrincipal").innerHTML=String(textos[2]);
            document.getElementById("boton0").innerHTML=String(opciones[4]);
            document.getElementById("boton1").innerHTML=String(opciones[5]);
            break;
        case 4:
            document.getElementById("textoPrincipal").innerHTML=String(textos[3]);
            document.getElementById("boton0").innerHTML=String(opciones[6]);
            document.getElementById("boton1").innerHTML=String(opciones[7]);
            break;
        case 5:
            document.getElementById("textoPrincipal").innerHTML=String(textos[4]);
            document.getElementById("boton0").innerHTML=String(opciones[8]);
            document.getElementById("boton1").innerHTML=String(opciones[9]);
            break;
        case 6:
            document.getElementById("textoPrincipal").innerHTML=String(textos[5]);
            document.getElementById("boton0").innerHTML=String(opciones[10]);
            document.getElementById("boton1").style.display = 'none';
            break;
    }
}

function cambiarNivel(){
    if ((nivelActual==2) && (entrada==0)){
        indiceHerramientaEncontrada= Math.floor(Math.random() * 4);
        document.getElementById("textoOpcional").innerHTML="En los cajones encuentras "+String(herramientas[indiceHerramientaEncontrada])+". Se ha agregado a tu inventario.";
        inventario.push(String(herramientas[indiceHerramientaEncontrada]));
    }
    else if((nivelActual==2) && (entrada==1)){
        nivelActual=1;
    }
    else if ((nivelActual==3) && (entrada==1)){
        document.getElementById("textoOpcional").innerHTML="En el cofre encuentras una llave y algunas fotos viejas, aparentemente del dueño anterior. La llave se ha agregado a tu inventario.";
        inventario.push(String(herramientas[indiceHerramientaEncontrada]));
    }
    else if((nivelActual==3) && (entrada==0)){
        nivelActual=4;
    }
    else if ((nivelActual == 6) && (entrada == 0)) {
        //Agregar el texto FIN. Eliminar botones. Mostrar cadena.
        document.getElementById("textoPrincipal").innerHTML("FIN");
        document.getElementById("textoOpcional").innerHTML("La cadena resultante es "+cadenaResultante);
        document.getElementById("boton0").style.display = 'none';
        document.getElementById("boton1").style.display = 'none';

    }
    else if ((nivelActual==6) && (entrada==1)){
        /*calcularMagia();
        let poderEnemigo = Math.floor(Math.random() * 12);
        let textoBatalla = "Encuentras un fantasma con " + poderEnemigo + " de poder, tú tienes " + magia;
        if (poderEnemigo > magia) {
            textoBatalla = textoBatalla + "El fantasma te expulsa de la casa.";
        } else {
            textoBatalla = textoBatalla + "Con tus herramientas haces que el fantasma salga de la casa.";
        }
    }*/
    nivelActual=1;}
    else if ((nivelActual==1) && (entrada==0)){
        nivelActual=2;
    }
    else if ((nivelActual==1) && (entrada==1)){
        nivelActual=3;
    }
    else if ((nivelActual==4) && (entrada==0)){
        nivelActual=2;
    }
    else if ((nivelActual==4) && (entrada==1)){
        nivelActual=5;
    }
    else if ((nivelActual==5) && (entrada==0)){
        nivelActual=4;
    }
    else if ((nivelActual==5) && (entrada==1)){
        nivelActual=6;
    }
    console.log("Estado "+entrada+" y nivel "+nivelActual);
    entrada=2;
    console.log("Estado "+entrada);
    mostrarNivel();
}

function entrada0(){
    entrada=0;
    cadenaResultante.push(0);
    cambiarNivel();
}
function entrada1(){
    entrada=1;
    cadenaResultante.push(1);
    cambiarNivel();
}

function calcularMagia(){
    for (let elemento in inventario){
        switch (inventario[elemento]){
            case "Necronomicón":
                magia=(magia+5);
                break;
            case "Guía del Mundo Espiritual":
                magia=(magia+3);
                break;
            case "Agua Bendita":
                magia=(magia+10);
                break;
            case "Tela de araña":
                magia=(magia+1);
                break;
        }
    }
}


document.getElementById("boton0").addEventListener("click", entrada0);
document.getElementById("boton1").addEventListener("click", entrada1);

mostrarNivel();