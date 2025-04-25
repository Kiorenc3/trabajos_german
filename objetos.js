//1
/*let productos = {
    Papa: 2500,
    Arroz: 3200,
    Lentejas: 2800,
    Aceite: 8500
};

for (const producto in productos) {
    console.log(`${producto}: $${productos[producto]}`);
}
*/

//2
/*let objeto = {};

objeto.nombre = "Juan";
objeto.edad = 30;
objeto.ciudad = "Bogotá";

console.log(objeto);*/

//3
/*let objeto = {
    password: "admin30905",
    rol: "admin",
    edad: 20
};

objeto.password = "user_7833";
objeto.rol = "user";
objeto.edad = 34;

console.log(objeto);*/

//4
/*let objeto = {
    "dos": 2,
    "cinco": 5,
    "siete": 7,
    "cuarenta": 40,
    "cincuenta": 50
};

for (let clave in objeto) {
    if (objeto[clave] % 2 === 0) {
        console.log(`${clave}: ${objeto[clave]}`);
    }
}*/

//5
/*let objeto = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
};

let contador = 0;
for (let clave in objeto) {
    if (objeto[clave] === "habilitado") {
        contador++;
    }
}

console.log(`Usuarios habilitados: ${contador}`);*/

//6
/*let objeto = {
    numeros: [45, 78, 22, 89, 8]
};

for (let numero of objeto.numeros) {
    console.log(numero);
}*/

//7
/*let objeto = {
    3: "tres",
    60: "sesenta",
    10: "diez"
};

delete objeto[60];

console.log(objeto);*/

//8
/*let objeto = {
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
};

for (let clave in objeto) {
    for (let subClave in objeto[clave]) {
        console.log(`${subClave} ${objeto[clave][subClave]}`);
    }
}
*/

