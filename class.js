//1. Crear una clase Persona con un
//  atributo nombre y un método caminar() que 
// imprima un mensaje con el nombre. 

/*class persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    caminar(){
        console.log(`${this.nombre} esta caminando`);
        
    }
}

const persona1 = new persona("brandon");
persona1.caminar();*/


//2.Crear una clase Contador con un atributo estático cuenta y un método 
// estático incrementar() que aumente el valor de cuenta


/*class contador{
    static cuenta = 0;

    static incrementar(){
        this.cuenta++;
        console.log(` ${this.cuenta}`);
        
    }
}

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();*/


//3.Crear una clase CuentaBancaria que tenga un saldo privado y métodos 
// públicos para depositar y retirar dinero. 

/*class CuentaBancaria{
    constructor(salario,titular){
        this._salario = salario;
        this._titular = titular
    }

    depositar(cantidad){
        if(cantidad > 0){
            this._salario += cantidad 
            this.mostrarSalario()
        }else{
            console.log(`ingrese una cantidad valida`);
        }
    }

    retirar(cantidad){
        if(cantidad > 0 || this._salario <= cantidad){
            this._salario -= cantidad
            this.mostrarSalario()
        }else{
            console.log("tu saldo es insuficiente ");
            
        }
    }

    mostrarSalario(){
        console.log(`el saldo actual de ${this._titular}: es de ${this._salario}`);
        
    }
}

const miCuenta = new CuentaBancaria(20000,"johan")
miCuenta.depositar(500)
miCuenta.retirar(10000)*/


//4.Crear una clase base Animal con un método hacerSonido(), 
// y dos subclases Perro y Gato que sobrescriban el método.

/*class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    hacersinido(){
        console.log("sonido generico animal");
        
    }
}

class perro extends Animal{
    constructor(nombre){
        super(nombre)
    }

    hacersinido(){
        console.log("gua gua gua ");
        
    }
}


class gato extends Animal{
    constructor(nombre){
        super(nombre)
    }

    hacersinido(){
        console.log("miau miau miau");
        
    }
}


const perro1 = new perro("kira");
const gato1 = new gato("michu");

perro1.hacersinido();
gato1.hacersinido();*/


//5.Crear una clase base Vehiculo que tenga un constructor con parámetros
//de peso y velocidad máxima, e implemente un método mover() que 
//imprima un mensaje genérico. Luego, crear dos subclases Carro y 
//Bicicleta


/*class Vehiculo {
    constructor(peso, velocidadMaxima) {
        this.peso = peso;
        this.velocidadMaxima = velocidadMaxima;
    }

    mover() {
        console.log("El vehículo se está moviendo de forma genérica");
    }
}

class Carro extends Vehiculo {
    constructor(peso, velocidadMaxima, numeroPuertas) {
        super(peso, velocidadMaxima);
        this.numeroPuertas = numeroPuertas;
    }

    mover() {
        console.log("El carro está rodando sobre sus neumáticos");
    }
}

class Bicicleta extends Vehiculo {
    constructor(peso, velocidadMaxima, tipo) {
        super(peso, velocidadMaxima); // Aquí pasamos el peso al super() de forma correcta
        this.tipo = tipo;
    }

    mover() {
        console.log("La bicicleta está avanzando gracias al pedal");
    }
}

const vehiculo = new Vehiculo(1000, 120);
const carro = new Carro(1500, 180, 4);
const bicicleta = new Bicicleta(10, 30, 'De montaña');
vehiculo.mover();
carro.mover();
bicicleta.mover();*/


//6. Crear una clase Universidad con un 
// atributo estático numEstudiantes y un
//método estático registrarEstudiante()

/* class universidad{
    static numEstudiantes = 0

    static registrarEstudiante(){
        universidad.numEstudiantes += 1

        console.log(`esto son los estudiantes ${universidad.numEstudiantes}`);
        
    }

}


universidad.registrarEstudiante();
universidad.registrarEstudiante();  */



//7. Crear una clase Coche con un método
//  privado encenderMotor() y un método
//público conducir() que llame al método
//  privado.

/* class coche{
    
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo
    }

    #encederMotor(){
        console.log(`el motor del ${this.marca} y ${this.modelo} esta encendido`);
        
    }
    conducir(){
        console.log(`preparado para conducir`);
        this.#encederMotor();
        console.log(`el coche esta en movimiento`);
        
    }

} 

const miCarro = new coche("ferrari","2007")
miCarro.conducir(); */

//8. Crear una clase Empleado con 
// atributos nombre y salario. Que
//  implemente un método trabajar().
//  Implemente encapsulación.

/* class Empleado {
    
    constructor(nombre, salario) {
      this._nombre = nombre;  
      this._salario = salario; 
    }
  
    
    get nombre() {
      return this._nombre;
    }
  
   
    set nombre(nuevoNombre) {
      if (nuevoNombre.length > 0) {
        this._nombre = nuevoNombre;
      } else {
        console.log("El nombre no puede estar vacío");
      }
    }
  
   
    get salario() {
      return this._salario;
    }
  
    
    set salario(nuevoSalario) {
      if (nuevoSalario > 0) {
        this._salario = nuevoSalario;
      } else {
        console.log("El salario debe ser mayor que 0");
      }
    }
  
    
    trabajar() {
      console.log(`${this._nombre} está trabajando.`);
    }
  }

const empleado1 = new Empleado('Juan Pérez', 3000);
empleado1.trabajar();  
console.log(`Salario actual de ${empleado1.nombre}: $${empleado1.salario}`);


empleado1.salario = 3500;
empleado1.nombre = "Carlos Sánchez";
console.log(`Nuevo salario de ${empleado1.nombre}: $${empleado1.salario}`);
empleado1.trabajar(); */


//9. Crear una clase Empleado y una 
// subclase Gerente que sobrescriba un
//
/*class Empleado{
    constructor(nombre, cargo){
        this.nombre = nombre;
        this.edad = cargo;
    }
    Trabajar(){
        console.log(`el empleado esta trabajando.`);
    }}

class Gerente extends Empleado{
    constructor(nombre,cargo){
        super(nombre, cargo);
    }
Trabajar(){
    console.log(`el gerente esta trabajando`);
}}

const empleado1 = new Empleado("Felipe", "Diseñador");
empleado1.Trabajar();
const gefe = new Gerente("Estevan","Gerente");
gefe.Trabajar();

10. Crear una clase base InstrumentoMusical con un método tocar()
que debe ser implementado por las clases hijas.

class InstrumentoMusical{
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    tocar(){
        console.log(`esta tocando el instrumento`);
}}

class Guitarra extends InstrumentoMusical{
    constructor(nombre, color){
        super(nombre,color)
    }
    tocar(){
        console.log(`el esta tocando la guitarra,`);
}}

class Piano extends InstrumentoMusical{
    constructor(nombre, color){
        super(nombre, color)
}
    tocar(){
    console.log(`el esta tocando el piano`);
    
}}

class Flauta extends InstrumentoMusical{
    constructor(nombre, color){
        super(nombre, color)
    }
    tocar(){
        console.log(`y ellos estan tocando la flauta`);
}}

const guitarra = new Guitarra("guitarra, negro")
guitarra.tocar()

const piano = new Piano("piano, blanco")
piano.tocar()

const flauta = new Flauta("flauta, gris")
flauta.tocar()

11. Crear una clase Vehiculo con un atributo privado modelo, un atributo público marca,
y un método privado encenderMotor() que sea usado en el método público arrancar().

class Vehiculo{
    #modelo;
    constructor(modelo,marca){
        this.#modelo = modelo;
        this.marca = marca;
    }
    #encenderMotor(){
        console.log(`el motor es del moedelo ${this.#modelo} y esta encendido`);

}

arrancar(){
    console.log(`El vehículo de marca ${this.marca} está listo para arrancar.`);
    this.#encenderMotor(); 
}

}


const vehiculo = new Vehiculo("camioneta","ford");
vehiculo.arrancar();

12. Crear una clase Escuela con un atributo estático numEstudiantes que se 
incremente cada vez que se cree un nuevo objeto Estudiante


class Escuela {
    static numEstudiantes = 0;

    static Estudiante = class {
        constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        Escuela.numEstudiantes++;

}
}

static obtenerTotalEstudiantes() {
return Escuela.numEstudiantes;

}
}

const estudiante1 = new Escuela.Estudiante("jhojan", 18);
const estudiente2 = new Escuela.Estudiante("Brian", 17);
const estudiente3 = new Escuela.Estudiante("Brian", 15);
const estudiente4 = new Escuela.Estudiante("Brian", 18);

console.log(`Total estudiantes: ${Escuela.obtenerTotalEstudiantes()}`);

13. Crear una clase Cliente con un atributo privado saldo y un método privado
 calcularDescuento() que se utilice dentro de un método público aplicarDescuento()

class Cliente{
    #saldo
    constructor(nombre, edad, saldo){
        this.nombre = nombre;
        this.edad = edad;
        this.#saldo = saldo; 
    }
    #calcularDescuento(){
     if (this.#saldo > 2000) {
        return 0.5
     }else if (this.#saldo > 700) {
        return 0.3
     }else{
        return 0
     }
    }

    aplicarDescuento(){
        const descuento = this.#calcularDescuento();
        const montoDescontado = this.#saldo * descuento;
        this.#saldo -= montoDescontado;
        return {
          descuento: descuento * 100 + '%',
          nuevoSaldo: this.#saldo
        };
      }
}
const cliente1 = new Cliente ("jhojan", "18",3000)
console.log(cliente1.aplicarDescuento());
const cliente2 = new Cliente ("jerson", "17",2000)
console.log(cliente2.aplicarDescuento());

14. Crear una clase Producto con un atributo privado precio y 
métodos públicos setPrecio() y getPrecio() para acceder y modificar el precio.

class Producto{
    #precio
    constructor(marca,precio){
        this.marca = marca;
        this.#precio = precio;
    }

    setPrecio(nuevoPrecio){
        if (nuevoPrecio >= 0) {
            this.#precio = nuevoPrecio;
          } else {
            console.log("el precio no puede ser negativo");
          }

    }

    getPrecio(){
       return this.#precio
    }
}
const producto1 = new Producto("nike",400);
producto1.setPrecio(600);
console.log("Precio del producto:", producto1.getPrecio());

15. Crear una clase base Animal con un método hacerSonido() y dos 
subclases Perro y Gato que sobrescriban este método.

class Animal {
    constructor (nombre){
        this.nombre = nombre;
    }
    hacerSonido(){
    console.log(`${this.nombre}el animal esta haciendo un sonido`);   
    }}
    
    class Perro extends Animal {
    constructor ( nombre, raza, color,edad){
        super(nombre);
        this.raza = raza;
        this.color = color;
        this.edad = edad;
    }
    hacerSonido(){
    console.log(`${this.nombre} hace: guau guau`);
    }
    }
    
    class Gato extends Animal {
        constructor (nombre, raza, color, edad){
        super(nombre);
        this.raza = raza;
        this.color = color;
        this.edad = edad;
    }
    hacerSonido(){
    console.log(`${this.nombre} hace: miau miau`);  
    }
    }
    
    let Perro1 = new Perro("rocky", "labrador", "cafe", 6 );
    let Gato1 = new Gato("max", "Siberiano", "negro", 4 );
    
    
    Perro1.hacerSonido();
    Gato1.hacerSonido();

16. Crear una clase base Vehiculo con un método mover(), y 
    subclases Coche y Bicicleta que implementen este método de forma diferente.

class Vehiculo {
    mover() {
    console.log(`El vehículo se está moviendo`);
    }
}

class Coche extends Vehiculo {
    mover() {
    console.log(`El coche se está moviendo por la carretera`);
    }
}


class Bicicleta extends Vehiculo {
    mover() {
    console.log(`La bicicleta está en movimiento por el carril bici`);
    }
}

const vehiculo = new Vehiculo();
vehiculo.mover();

const coche = new Coche();
coche.mover();

const bicicleta = new Bicicleta();
bicicleta.mover();

17.Crear una clase base Empleado con un atributo estático totalEmpleados 
que se incremente cada vez que se cree un Empleado o un Gerente.

class Empleado {
    static totalEmpleados = 0;
    constructor(nombre) {
        this.nombre = nombre;
    Empleado.totalEmpleados++;
    }

    static mostrarTotalEmpleados() {
        console.log(`El total de empleados es: ${Empleado.totalEmpleados}`);
    }
}

class Gerente extends Empleado {
    constructor(nombre, cargo) {
        super(nombre); 
        this.cargo = cargo;
    }
}


const emp1 = new Empleado("Jerson");
const emp2 = new Empleado("Jhoan");
const gerente1 = new Gerente("Luis", "Ventas");

Empleado.mostrarTotalEmpleados();
*/