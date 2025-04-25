//1
/*function calculadoraedad (){
    let edad = parseInt(prompt("coloca la edad"))
    let años = parseInt(prompt("coloca los años"))
    let edadfutura = edad + años;
    alert ("tu edad sera " + edadfutura)

} 
 calculadoraedad();*/ 

//2
/*
    let numero1 = parseFloat(prompt("coloca tu numero"));
    let numero2 = parseFloat(prompt("coloca tu segundo numero"));
    let producto = numero1 * numero2;
    let modulo = numero1 % numero2;
    let cociente = numero1 / numero2;
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    alert(`tu resultados de multiplicasion ${producto}
       tu resultados de modulo ${modulo}
       tu resultados de cociente ${cociente} 
       tu resultados de suma ${suma}
       tu resultados de resta ${resta} `);
*/ 

//3
/*let precios = parseFloat(prompt("ingrese el valor de su electrodomestico"))
let meses = parseFloat(prompt("ingrese sus meses"))
let int = 0.05;
let intmeses = int * meses
let prefinal = precios + (precios * int)
let pagomeses = prefinal / meses;

alert(`el precio total a pagar con los intereses son de ${prefinal}`)*/ 

//4
/*function calculadoratriangulo (){
    let base = parseInt(prompt("ingrese su base"))
    let altura = parseFloat(prompt("imgrese su altura "))
    let resultado = base * altura / 2

    alert("tu resultado sera" + resultado)
}
calculadoratriangulo();*/ 

//5
/*let radio = parseFloat(prompt("ingrse el radio de tu circulo"))
const pi = Math.PI;
let area = pi * (radio**2)
let perimetro = 2 * pi * radio;
alert(`el area de tu circulo es ${area} y tu perimetro es ${perimetro}`);
*/ 

//6
/*let lado = prompt("Ingresa el lado del cubo:");
lado = parseFloat(lado);

if (isNaN(lado) || lado <= 0) {
    console.log("Por favor, ingresa un número válido y positivo para el lado del cubo.");
} else {
    let volumen = lado * lado * lado;
    console.log("El volumen del cubo con lado " + lado + " es: " + volumen);
}*/ 

//7
/*let precio = prompt("Ingresa el precio del producto:");
precio = parseFloat(precio);

if (isNaN(precio) || precio <= 0) {
    console.log("Por favor, ingresa un precio válido y positivo.");
} else {
    let iva = precio * 0.19;
    let precioFinal = precio + iva;
    console.log("El precio final con IVA es: " + precioFinal);
}*/ 

//8
/*let precio = prompt("Ingresa el precio del producto:");
precio = parseFloat(precio);

if (isNaN(precio) || precio <= 0) {
    console.log("Por favor, ingresa un precio válido y positivo.");
} else {
    let descuento = precio * 0.10;
    let precioFinal = precio - descuento;
    console.log("El precio final con el descuento del 10% es: " + precioFinal);
}*/ 

//9
/* let cantidad = prompt("Ingresa la cantidad:");
cantidad = parseFloat(cantidad);

let porcentaje = prompt("Ingresa el porcentaje a calcular sobre la cantidad:");
porcentaje = parseFloat(porcentaje);

if (isNaN(cantidad) || cantidad <= 0 || isNaN(porcentaje) || porcentaje <= 0) {
    console.log("Por favor, ingresa valores válidos y positivos.");
} else {
    let resultado = (cantidad * porcentaje) / 100;
    console.log("El " + porcentaje + "% de " + cantidad + " es: " + resultado);
}*/ 

//10
/*let numero = prompt("Ingresa un número real:");
numero = parseFloat(numero);

if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    let valorAbsoluto = Math.abs(numero);
    console.log("El valor absoluto de " + numero + " es: " + valorAbsoluto);
}*/ 

//11
/*function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function lanzarDados() {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    const suma = dado1 + dado2;
  
    console.log(`Lanzamiento 1: ${dado1}`);
    console.log(`Lanzamiento 2: ${dado2}`);
    console.log(`Suma de los dados: ${suma}`);
  }
  
  lanzarDados();*/ 

//12
/*function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  let celsius = 25;
  let fahrenheit = celsiusAFahrenheit(celsius);
  
  console.log(`${celsius}°C es igual a ${fahrenheit}°F`);*/ 

//13
/*function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  let resultado = factorial(5);
  */ 

//14
/*function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let numeroAleatorio = generarNumeroAleatorio(1, 100);
  console.log(`El número aleatorio generado es: ${numeroAleatorio}`);*/ 

//15
/*function convertirSegundos(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    segundos = segundos % 60;
    
    return { horas, minutos, segundos };
  }
  
  let tiempo = convertirSegundos(3665);
  console.log(`${tiempo.horas} horas, ${tiempo.minutos} minutos y ${tiempo.segundos} segundos`);*/ 

//16
/*function resolverEcuacionCuadratica(a, b, c) {
    let discriminante = b * b - 4 * a * c;
    
    if (discriminante < 0) {
        return "No hay soluciones reales";
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        return `Solución única: x = ${x}`;
    } else {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return `Soluciones: x1 = ${x1}, x2 = ${x2}`;
    }
}

let a = 1, b = -3, c = 2;
console.log(resolverEcuacionCuadratica(a, b, c));*/ 

