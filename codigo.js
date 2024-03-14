let cadenaResultante=[];
const textos=["Sala de recepción","Pasillo","Cocina","Escalera","Habitación principal","Armario", "FIN"];
const opciones=["Ir al PASILLO", "Ir a la COCINA", "Buscar en los cajones", "Ir a SALA DE RECEPCIÓN", "Ir a ESCALERA","Buscar en el cofre", "Ir al PASILLO", "Ir a la HABITACIÓN PRINCIPAL","Ir a ESCALERA","Combatir","FIN"];
const herramientas=["Necronomicón", "Guía del Mundo Espiritual", "Agua Bendita", "Tela de araña"];

let inventario=[];
let nivelActual=1;

let activo=0;
let entrada=999;

let indiceHerramientaEncontrada;

function mostrarNivel(){
    switch (nivelActual){
        case 1:
            //Se mueve a cocina o escaleras
            document.getElementById("textoPrincipal").innerHTML=String(textos[0]);
            document.getElementById("textoOpcional").innerHTML="Una sala decorada al estilo colonial. Tiene muebles con decorados grotescos y con acabados en piedras preciosas.";
            document.getElementById("img").src="imagenes/fondo.png";
            document.getElementById("boton0").innerHTML=String(opciones[0]);
            document.getElementById("boton1").innerHTML=String(opciones[1]);
            break;
        case 2:
            document.getElementById("textoPrincipal").innerHTML=String(textos[1]);
            document.getElementById("textoOpcional").innerHTML="El pasillo es un corredor largo con las puertas tapeadas. Lo pueblan retratos de familiares muertos en momentos de solemnidad y gloria. Hay un pequeño mueble con varios cajones, es una de las pocas cosas accesibles a la vista.";
            document.getElementById("img").src="imagenes/fondoCajones.png";
            document.getElementById("boton0").innerHTML=String(opciones[2]);
            document.getElementById("boton1").innerHTML=String(opciones[3]);
            break;
        case 3:
            document.getElementById("textoPrincipal").innerHTML=String(textos[2]);
            document.getElementById("textoOpcional").innerHTML="La cocina es amplia. Guarda todavía el buen gusto y la magnitud que la familia llegó a tener. Vacía de sirvientes y de comida fresca, parece un almacén abierto y desorganizado. Hay un cofre sin llave en el suelo.";
            document.getElementById("img").src="imagenes/fondoCofre.png";
            document.getElementById("boton0").innerHTML=String(opciones[4]);
            document.getElementById("boton1").innerHTML=String(opciones[5]);
            break;
        case 4:
            document.getElementById("textoPrincipal").innerHTML=String(textos[3]);
            document.getElementById("textoOpcional").innerHTML="Una ostentosa escalera de caracol conecta las dos plantas.";
            document.getElementById("boton0").innerHTML=String(opciones[6]);
            document.getElementById("boton1").innerHTML=String(opciones[7]);
            break;
        case 5:
            document.getElementById("textoPrincipal").innerHTML=String(textos[4]);
            document.getElementById("textoOpcional").innerHTML="La habitación principal está flanqueada por escenas religiosas pintadas casi a tamaño real. Una cama decorada de marfiles y cubierta de telas suaves parece haber sido abandonada mucho antes de la muerte del Señor Velazquez. También podemos ver en las repisas su afición por el arte con temas marítimos. Hay un armario al fondo que parece incluso más viejo que el resto de muebles de la propiedad, y también se encuentra en peor condición. En tu experiencia tratando casos similares, esto parece ser una ilusión.";
            document.getElementById("boton0").innerHTML=String(opciones[8]);
            document.getElementById("boton1").innerHTML=String(opciones[9]);
            break;
        case 6:
            document.getElementById("textoPrincipal").innerHTML="ARMARIO";
            document.getElementById("textoOpcional").innerHTML="Abres el armario y te encuentras con dos fantasmas saliendo de golpe.";
            document.getElementById("img").src="imagenes/fondoFantasma.png";
            document.getElementById("boton0").innerHTML=String(opciones[8]);
            document.getElementById("boton1").innerHTML=String(opciones[9]);
            break;
        case 7:
            if ((inventario.length)!=0){
                document.getElementById("textoPrincipal").innerHTML="FIN";
            document.getElementById("textoOpcional").innerHTML="Gracias a los objetos mágicos que encontraste en el camino pudiste expulsar a los fantasmas que encantaban la casa.";
            document.getElementById("img").src="imagenes/fondoFantasmaClasico.png";
            document.getElementById("boton0").innerHTML="VICTORIA";
            document.getElementById("boton1").style.display = 'none';
            }
            
            else{
                document.getElementById("textoPrincipal").innerHTML="ARMARIO";
            document.getElementById("textoOpcional").innerHTML="La energía de los espíritus fue demasiado fuerte. Te han expulsado de la casa y la han cerrado para siempre.";
            document.getElementById("img").src="imagenes/fondoFantasma.png";
            document.getElementById("boton0").style.display = 'none';
            document.getElementById("boton1").innerHTML="Derrota";
            document.getElementById("Derrota").innerHTML="Derrota";
        }
        break;
        case 8:
            document.getElementById("textoPrincipal").innerHTML="CADENA RESULTANTE";
            document.getElementById("textoOpcional").innerHTML=cadenaResultante+" es una cadena válida";
            document.getElementById("img").src="";
            document.getElementById("inventario").style.display = 'none';
            document.getElementById("boton0").style.display = 'none';
            document.getElementById("boton1").style.display = 'none';
        break;
    }
    document.getElementById("inventario").innerHTML=("Inventario: "+inventario);
}

function cambiarNivel(){
    if ((nivelActual==2) && (entrada==0)){
        indiceHerramientaEncontrada= Math.floor(Math.random() * 4);
        document.getElementById("textoOpcional").innerHTML="En los cajones encuentras "+String(herramientas[indiceHerramientaEncontrada])+". Se ha agregado a tu inventario.";
        document.getElementById("img").src="imagenes/fondoCofreLlave.png";
        inventario.push(String(herramientas[indiceHerramientaEncontrada]));
    }
    else if((nivelActual==2) && (entrada==1)){
        nivelActual=1;
    }
    else if ((nivelActual==3) && (entrada==1)){
        indiceHerramientaEncontrada= Math.floor(Math.random() * 4);
        document.getElementById("textoOpcional").innerHTML="En el cofre encuentras una llave y algunas fotos viejas, aparentemente del dueño anterior. La llave se ha agregado a tu inventario.";
        inventario.push(String(herramientas[indiceHerramientaEncontrada]));
    }
    else if((nivelActual==3) && (entrada==0)){
        nivelActual=4;
    }
    
        
    else if ((nivelActual==6) && (entrada==1)){
        nivelActual=7;
    }
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
    else if ((nivelActual==7)){
        nivelActual=8;
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


document.getElementById("boton0").addEventListener("click", entrada0);
document.getElementById("boton1").addEventListener("click", entrada1);

mostrarNivel();