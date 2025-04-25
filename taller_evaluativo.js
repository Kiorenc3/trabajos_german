//1
/*let edad = 21;

switch (edad) {
    case 15:
        console.log("Tiene 15");
        break;
    case 20:
        console.log("Tiene 20");
        break;
    case 30:
        console.log("Tiene 30");
        break;
    default:
        console.log("Introduzca una edad válida");
}*/

//2
/*function obtenerMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let mayor = obtenerMayor(10, 25);
console.log("El número mayor es:", mayor);*/

//3
/*let arreglo = [1,2,3,4,5,6,7,8,9,10];

// a
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}
//b
let arreglo = [1,2,3,4,5,6,7,8,9,10];
arreglo.forEach(elemento => console.log(elemento));
*/

//4
/*let arreglo = [ [1,2,3], [4,5,6,7,8,9], [10] ];

for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
        console.log(arreglo[i][j]);
    }
}*/

//5
/*let persona = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};

for (let clave in persona) {
    console.log(persona[clave]);
}

persona["peso"] = 77;
persona.edad = 21;
delete persona.apellidos;

console.log(persona);*/

//6
/*let palabras = ["Colombia", "es", "un", "país", "extraordinario"];
console.log(palabras.join(" "));*/

//7
/*let cadena = "Programar es algo genial, todos deberían intentarlo, atrévete!";
let arreglo = cadena.split(", ");
console.log(arreglo);*/

//8
/*let arreglo = [1, 2, 3, 4, 500, 420, -100];
arreglo.splice(4, 1);
arreglo.pop();
arreglo.push(520);
let copiaArreglo = arreglo.slice();
console.log(arreglo);
console.log(copiaArreglo);*/

//9
/*let usuarios = {};
function registrarUsuario() {
    let documento = prompt("Ingrese su documento:");
    let nombres = prompt("Ingrese sus nombres:");
    let apellidos = prompt("Ingrese sus apellidos:");
    let edad = prompt("Ingrese su edad:");
    let peso = prompt("Ingrese su peso:");
    let estatura = prompt("Ingrese su estatura:");

    usuarios[documento] = {
        nombres,
        apellidos,
        edad,
        peso,
        estatura
    };

    console.log("Registro exitoso");
}


function consultarUsuario() {
    let documento = prompt("Ingrese el documento del usuario a consultar:");
    if (usuarios[documento]) {
        console.log("Datos del usuario:", usuarios[documento]);
    } else {
        console.log("Usuario no encontrado.");
    }
}


function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Registrar usuario\n2. Consultar usuario\n3. Salir");
        switch (opcion) {
            case "1":
                registrarUsuario();
                break;
            case "2":
                consultarUsuario();
                break;
            case "3":
                console.log("Saliendo del sistema...");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "3");
}
menu();*/

