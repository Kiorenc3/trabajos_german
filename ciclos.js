//Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de edad o no.
//1
/*let edad = 17

if (edad >=18){
    console.log("usted es mayor")
    
} else if (edad < 18){
    console.log("usted es menor")
}*/

//2
/*function verificariva(producto){
    if((producto === "lentejas") || (producto === "arroz")){
        console.log(` ${producto} no tiene iva`)
    } else if((producto === "vino") || (producto === "crema")){
        console.log(` ${producto} si tiene iva` )
    }

 }

 verificariva("lentejas");  
verificariva("vino");      
verificariva("arroz");     
verificariva("crema");


let producto = prompt("Ingrese lentejas, arroz, vino o crema para saber si tiene IVA");

switch(producto.toLowerCase()) {  
    case "lentejas":
    case "arroz":
        alert("Estos productos no tienen IVA");
        break;

    case "vino":
    case "crema":
        alert("Estos productos contienen IVA");
        break;

    default:
        alert("Producto no reconocido.");
        break;
}*/

//3
/*function numero(){
    let numero = parseInt(prompt("ingresa el numero"))
    let numero2 = parseInt(prompt("ingresa el numero"))
    if(numero > numero2){
          alert(`el numero1 ${numero} es mayor`)
    } else if(numero2 > numero){
        alert(`el numero2 ${numero2} es mayor`)
  }else {
    alert("los dos numero son iguales")
  }
}
numero();*/


//4
/*let angulo = parseFloat(prompt("ingrese el angulo"))
let angulo2 = parseFloat(prompt("ingresa el angulo2"))
let angulo3 = parseFloat(prompt("ingresa el angulo3"))

if(angulo > 0 && angulo2 > 0 && angulo3 > 0 && angulo + angulo2 + angulo3 === 180){
    alert(`los angulos corresponde a un triangulo`)
}else{
    alert("los angulos no  es de un triangulo")
}
*/


//5
/*function parIn(){
    let numero = parseInt(prompt("ingrse el numero"));

    if(numero < 0){
        alert("tu numero es par")
    }else if(numero > 0){
        alert("tu numero es inpar")
    }
}
parIn();

let numero = prompt("ingrse el numero");

switch(numero % 2){
    case 0:
    alert("tu numero es par")
    break;
    case 1:
    alert("tu numero es inpar")
    break;
    default:
        alert("ingresa un nunero")
        break;
}
*/

//6
/*function esDivisibleEntreCinco(numero) {
    if (numero % 5 === 0) {
        console.log(`${numero} es divisible entre 5.`);
    } else {
        console.log(`${numero} no es divisible entre 5.`);
    }
}

let numero1 = parseInt(prompt("Ingrese un número:"));
esDivisibleEntreCinco(numero1);

function verificarDivisibilidad(numero) {
    switch (numero % 5 === 0) {
        case true:
            console.log(`${numero} es divisible entre 5.`);
            break;
        case false:
            console.log(`${numero} no es divisible entre 5.`);
            break;
    }
}

let numero2 = parseInt(prompt("Ingrese un número:"));
verificarDivisibilidad(numero2);
*/


//7
/*function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numero1 = parseInt(prompt("Ingrese un número entre 1 y 15:"));

if (numero1 >= 1 && numero1 <= 15) {
    if (esPrimo(numero1)) {
        console.log(`${numero1} es un número primo.`);
    } else {
        console.log(`${numero1} no es un número primo.`);
    }
} else {
    console.log("Número fuera del rango permitido.");
}

function verificarPrimo(numero) {
    switch (numero) {
        case 2:
        case 3:
        case 5:
        case 7:
        case 11:
        case 13:
            console.log(`${numero} es un número primo.`);
            break;
        case 1:
        case 4:
        case 6:
        case 8:
        case 9:
        case 10:
        case 12:
        case 14:
        case 15:
            console.log(`${numero} no es un número primo.`);
            break;
        default:
            console.log("Número fuera del rango permitido.");
    }
}

let numero2 = parseInt(prompt("Ingrese un número entre 1 y 15:"));
verificarPrimo(numero2);
*/

//seccion 2

//1
/*for (let i = 1; i <= 20; i++) {
    console.log(i);
}*/ 

//2
/*let i = -100;
while (i <= 600) {
    console.log(i);
    i++;
}*/ 

//3
/*for (let i = 0; i <= 50; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}*/ 

//4
/*function calcularPromedio(notas) {
    let suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
}

function main() {
    let n = parseInt(prompt("Ingrese la cantidad de estudiantes: "));
    
    for (let i = 0; i < n; i++) {
        console.log(`\nEstudiante ${i + 1}:`);
        let notas = [];
        
        for (let j = 0; j < 3; j++) {
            let nota = parseFloat(prompt(`Ingrese la nota ${j + 1}: `));
            notas.push(nota);
        }
        
        let promedio = calcularPromedio(notas);
        console.log(`El promedio es: ${promedio.toFixed(2)}`);
    }
}

main();*/ 

//5
/*let n = parseInt(prompt("Ingrese un número: "));
let i = 1;

while (i <= n) {
    console.log(i);
    i++;
}*/ 

//6
/*let n = parseInt(prompt("Ingrese un número: "));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}

console.log(`La suma de los primeros ${n} números naturales es: ${suma}`);*/ 

//7
/*for (let i = 1; i <= 50; i++) {
    console.log(`10 x ${i} = ${10 * i}`);
}*/ 

//8
/*let n = parseInt(prompt("Ingrese un número: "));

for (let i = 1; i <= n; i += 2) {
    console.log(i);
}*/ 

//9
/*while (true) {
    let opcion = prompt("¿Desea salir? (S/N): ").trim().toUpperCase();
    if (opcion === "S") {
        console.log("Saliendo del programa...");
        break;
    }
}*/ 

//10
/*let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(parseFloat(prompt(`Ingrese el número ${i + 1}: `)));
}

let suma = numeros.reduce((acc, num) => acc + num, 0);
let promedio = suma / 10;

console.log(`El promedio es: ${promedio.toFixed(2)}`);*/ 

//11
/*let numeros = [];
while (true) {
    let num = parseFloat(prompt("Ingrese un número (0 para terminar): "));
    if (num === 0) break;
    numeros.push(num);
}

if (numeros.length > 0) {
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    let promedio = suma / numeros.length;
    console.log(`El promedio es: ${promedio.toFixed(2)}`);
} else {
    console.log("No se ingresaron números para calcular el promedio.");
}*/ 

//12
/*let n = parseInt(prompt("Ingrese un número: "));
let sumaCuadrados = 0;

for (let i = 1; i <= n; i++) {
    sumaCuadrados += i ** 2;
}

console.log(`La suma de los cuadrados de los números entre 1 y ${n} es: ${sumaCuadrados}`);*/ 

