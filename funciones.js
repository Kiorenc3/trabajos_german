//1
/*function rectangulo(b,h){
    let rectangulo = b*h/2

    return rectangulo;

}
let resultado = rectangulo(4,7)
console.log(resultado)*/

//2
/*function cubo(a,b,c){
    let cubo = a*b*c
    return cubo;
}
let resultado = cubo(2,2,2)
console.log(resultado)*/

//3
/*function hola(nombre){
    
    return `hola ${nombre}`;
}

console.log(hola("johan") )*/

//4
/*function mostrarNumeros(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

mostrarNumeros(90);*/

//5
/*function factorial(n){
    let factorial = n*(n - 1)*(n - 2)*2*1

    return factorial;
}
console.log(factorial(`5`))*/

//6
/*function esVocal(caracter) {
    
    let c = caracter.toLowerCase();

    
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log(esVocal('a'));  
console.log(esVocal('B'));  
console.log(esVocal('I')); 
console.log(esVocal('z'));  
*/

//7
/*function convertirAMayusculas(cadena){
    let resultado = cadena.toUpperCase();

    return resultado;
}
console.log(convertirAMayusculas("hola"));*/

//8
/*function obtenerPrimeraLetra(nombre){
    if(nombre && nombre.length > 0){

        return nombre.charAt(0);

    }else{
        return "nombre vacio";
    }

    
}
console.log(obtenerPrimeraLetra("johan")) 

*/

//9
/*function recibir(cadena){
    const vocales = `aeiouAEIOU`;

    let contador = 0;

    for(let i = 0; i < cadena.length; i++){

        if(vocales.indexOf(cadena[i]) !== -1){
            contador++;
        }
    }

    return contador;

}

console.log(recibir("holiii"))*/

//10
/*function noVocales(cadena){
    let    regex = /[aeiouAEIOU]/g;

    return cadena.replace(regex, ``)
}

console.log(noVocales);*/

//11
/*function numero(){
    let numero = Math.floor(Math.random() *20)+ 1;
    return numero;
};
let aleatorio = numero();
console.log(aleatorio);*/

//12
/*function evaluarEstudiante(nota1, nota2, nota3, nota4, nota5) {
    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    
    
    if (promedio >= 3.0) {
        return `Aprobado con un promedio de ${promedio.toFixed(2)}`;
    } else {
        return `Reprobado con un promedio de ${promedio.toFixed(2)}`;
    }
}


console.log(evaluarEstudiante(3.5, 4.0, 2.8, 3.2, 3.0));*/

//13
/*function determinarSigno(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

console.log(determinarSigno(10));  
console.log(determinarSigno(-5));  
console.log(determinarSigno(0));   */

//14
/*function permitirEntrada(edad, estatura, permisoParental) {
    if (edad >= 18 && estatura > 150) {
        return "Acceso permitido";
    } else if (edad < 18 && estatura > 150 && permisoParental) {
        return "Acceso permitido con permiso parental";
    } else {
        return "Acceso denegado";
    }
}

console.log(permitirEntrada(20, 160, false));  
console.log(permitirEntrada(16, 155, true));   
console.log(permitirEntrada(16, 140, true));   
console.log(permitirEntrada(16, 160, false));  */

//15
/*unction generarContraseña(n) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    let contraseña = "";
    for (let i = 0; i < n; i++) {
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contraseña;
}

console.log(generarContraseña(10));*/

//16
/*function facturacion(monto, medioPago) {
    let descuento = 0;

    if (monto > 400) {
        descuento = 0.40;
    } else if (monto >= 200) {
        if (medioPago === "E") {
            descuento = 0.30;
        } else if (medioPago === "D") {
            descuento = 0.20;
        } else if (medioPago === "C") {
            descuento = 0.10;
        }
    }

    return monto - (monto * descuento);
}

console.log(facturacion(150, "E"));
console.log(facturacion(250, "D"));
console.log(facturacion(300, "C"));
console.log(facturacion(500, "E"));*/

//17
/*function operarNumeros(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        return num2 !== 0 ? num1 / num2 : "Error: división por cero";
    } else {
        return "Operación no válida";
    }
}

console.log(operarNumeros(2, 5, "suma"));
console.log(operarNumeros(10, 3, "resta"));
console.log(operarNumeros(4, 6, "multiplicacion"));
console.log(operarNumeros(8, 2, "division"));
console.log(operarNumeros(8, 0, "division"));*/

//18
/*function contarBasesADN(cadena) {
    let conteo = { A: 0, C: 0, G: 0, T: 0 };

    for (let base of cadena) {
        if (conteo.hasOwnProperty(base)) {
            conteo[base]++;
        }
    }

    return `Cantidad de A: ${conteo.A}, Cantidad de C: ${conteo.C}, Cantidad de G: ${conteo.G}, Cantidad de T: ${conteo.T}`;
}

console.log(contarBasesADN("AACAGT"));*/

//19
/*function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(77));*/

//20
/**/

//21
/**/

//22
/**/

//23
/**/

