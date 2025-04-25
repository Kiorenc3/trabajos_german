//1
/*let j = [200, -100, 45, 78, 32]
console.log(j[2],j[4])*/

//2
/*let f = ["ab", "cd", "ef", "gh"]
console.log(f[1],f[3]);*/

//3
/*let aux = [10, true, "k200", 20.7]
aux.forEach(aux =>{
    console.log(aux);
    
})*/

//4
/*let k = [17, 4, 64, 79, 109, 112]
k.forEach(n =>{
    if(n % 2 !==0){
        console.log(n);
        
    }
})*/

//5
/*let h = [true, true, false,true, false]
h [2] = true;
h [3]= false;
console.log(h);*/

//6
/*let w = ["wc", "jp", "zx", "qr"]
w [1] = true;
w [3] = 30;

console.log(w);*/

//7
/*function re(arreglo){
    arreglo.forEach(element => {
        console.log(element);
        
    });
}
let resultado = [2, 5, 7, 9]
re(resultado);*

//8

/*function rd(arreglo){
    return arreglo.length;;
}

let m = [1,22,334,555,677]
console.log(rd(m));*/

//9

/*function vLetra(Letra){
    let arreglo = ["a", "b", "c", "d", "e", "f", "g"];
    for(let i = 0; i < arreglo.lengt;i++){
        if(arreglo[i] === Letra){
            console.log(`la letra ${Letra} esta en el arreglo`);
            return;
        }
    }
    console.log(`la letra ${Letra} no esta en el arreglo`);
    
}

vLetra("c")
vLetra("z")*/





//Dado el arreglo [3, 50, 70, 600, 40]:

//1
/*let arreglo =  [3, 50, 70, 600, 40]
arreglo.forEach(i=>{
    console.log(i);
    
})*/


//2
/*let arreglo = [3, 50, 70, 600, 40]
arreglo.forEach(i =>{
    console.log(i * 3);
    
})*/

//3
/*let arreglo = [3, 50, 70, 600, 40]
let i = 0;
while(i < arreglo.length){
    console.log(arreglo[i]);
    i++
    
}*/

//4
/*let arreglo = [3, 50, 70, 600, 40]
for(let i = 0; i < arreglo.length; i++){
    if(i%2==0){
        console.log(` ${arreglo[i]}`);
        
    }
}*/


//5 
/*let nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === "Juan") {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("El nombre Juan se encuentra en el arreglo.");
} else {
    console.log("El nombre Juan no está en el arreglo.");
}*/

//6
/*let nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === "Maria") {
        contador++;
    }
}

console.log("El nombre Maria aparece " + contador + " veces en el arreglo.");*/ 

//7
/*let numeros = [15, 7, 9, 12, 1];
let suma = 0;

numeros.forEach(num => {
    suma += num;
});

console.log("La suma de los elementos es: " + suma);*/

//8

/*let numeros = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

numeros.forEach(num => {
    sumaCuadrados += num ** 2;
});

console.log("La suma de los cuadrados de los elementos es: " + sumaCuadrados);*/

//9

/*let valores = [true, true, false, true, false, false];
let contadorFalse = 0;
let i = 0;

while (i < valores.length) {
    if (!valores[i]) {
        contadorFalse++;
    }
    i++;
}
*/

//10

/*let caracteres = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabra = "adso";
let encontrada = true;

for (let i = 0; i < palabra.length; i++) {
    if (!caracteres.includes(palabra[i])) {
        encontrada = false;
        break;
    }
}*/

//11

/*let numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numeros.length; i++) {
    console.log(`5 x ${numeros[i]} = ${5 * numeros[i]}`);
}*/

//12

/*let numeros = [5, 7, 90, 2, 5, 3, 8, 99];

numeros.forEach((num1, i) => {
    numeros.forEach((num2, j) => {
        if (i !== j && (num1 + 1 === num2 || num1 - 1 === num2)) {
            console.log(`${num1} y ${num2} son consecutivos.`);
        }
    });
});*/