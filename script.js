class Ninja {
    constructor(nombre, salud = 100) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log(`El nombre del ninja es: ${this.nombre}`);
    }
    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}`);
    }
    drinkSake() {
        this.salud += 10;
    }
}

const ninja1= new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(nombre, salud= 200) {
        super(nombre, salud)
        this.sabiduria= 10;
        this.velocidad= 10;
        this.fuerza= 10;
    }
    speakWisdom() {
        this.drinkSake(); 
        console.log("Lo que un programador puede hacer en un mes, dos porgramadores pueden hacerlo en dos meses")
    }
}

const superSensei = new Sensei("Master Splinter");
console.log(superSensei);

superSensei.speakWisdom();
superSensei.showStats();
