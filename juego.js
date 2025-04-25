class Inventario {
    #videojuegos
    constructor() {
        this.#videojuegos = [];
    }
ingresarVideojuego(nuevoVideojuego){
    this.#videojuegos.push(nuevoVideojuego)
    console.log(`se agrego video juego`);
    
}


obtenerVideojuegos(){
    if(this.#videojuegos.length > 0){
        this.#videojuegos.forEach((juego,indice)=>{
            console.log(`${indice + 1}. Nombre: ${juego.nombre}, Precio: ${juego.precio}, Categoría: ${juego.categoria}`);
            
        })
    }
}



        eliminarVideojuego(juego) {
            let index = this.#videojuegos.findIndex(v => v.nombre.toLowerCase() === juego.nombre.toLowerCase());
            if (index > -1) {
                this.#videojuegos.splice(index, 1);
                console.log(`Se elimino '${juego.nombre}'`);
            } else {
                console.log(`No se encontro '${juego.nombre}'`);
            }
        }

        actualizarVideojuego(nombre, nuevosDatos) {
            let juego = this.#videojuegos.find(v => v.nombre.toLowerCase() === nombre.toLowerCase());
            
            if (juego) {
                Object.assign(juego, nuevosDatos);
                console.log(`se actualizó '${nombre}'`);
            } else {
                console.log(`No se encontro '${nombre}'`);
            }
        }
     
}


class Admin {
    constructor(inventario){
        this.inventario = inventario
    }

    actualizarJuego(nombre, nuevosDatos) {
        this.inventario.actualizarVideojuego(nombre, nuevosDatos);
    }
    

    ingresarJuego(juego){
      this.inventario.ingresarVideojuego(juego)
    }

    eliminarJuego(juego){
        this.inventario.eliminarVideojuego(juego)
    }

    obtenerjuego(){
       this.inventario.obtenerVideojuegos()
    }
}

const inventario = new Inventario();


const admin = new Admin(inventario);


admin.ingresarJuego({ nombre: "fornite", precio: 20000, categoria: "battle royal" });
admin.ingresarJuego({ nombre: "warzon", precio: "Gratuito", categoria: "battle royal" });

admin.obtenerjuego();


admin.actualizarJuego("warzon", { precio: 25000, categoria: "battle royal" });


admin.eliminarJuego({ nombre: "fornite" });
 admin.obtenerjuego()