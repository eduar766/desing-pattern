function sum(a,b) {
    return a+b;
}

let res = sum(1,5); // una funcion de primer orden es cualquier funcion que puede ser guardada en una variable
console.log(res);

const fSum = sum;
res = fSum(5,6);
console.log(res);

function operation(fn, a, b) { // una funcion de orden superior recibe funciones de primer orden
    console.log("Se hace Algo");
    console.log(fn(a,b));
}

operation(sum,10,20);

// funcion anonima, no tiene nombre => arrow functions
let fA = () => console.log('arrow function');
fA();
operation((a,b)=>a*b,5,5);

// foerach: inmutable, no cambia el arreglo inicial
const names = ["Hector", "Pablo","Juan","Ana"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase));
console.log('original', names);
names.sort();
console.log('ordenado sort() ->', names);

// map: modifica los valor del arreglo
let namesUpper = names.map((name) => name.toLocaleUpperCase());
console.log('transformado con map() ->', namesUpper)

// reduce: recorre y acumula elementos del array. Recibe una funcion y un valor inicial
const numbers = [5,4,7,1,10];
const total = numbers.reduce((ac, number) => {
    return ac + number;
}, 0)
console.log(total)

// Programacion Orientada a Objetos
// clase: Es el molde con el cual creamos objetos
class Drink {
    constructor(name) {
        // Se va a ejecutar en el momento que creamos un objeto. Especificamos valores requeridos y obligatorios. el .this es del objeto que se esta creando
        this.name = name;
    }

    info() {
        return "La bebida es: " + this.name;
    }
}

const drink = new Drink("agua");
console.log(drink.info());

// Herencia
class Beer extends Drink {
    constructor(name, alcohol) { // tengo que heredar lo que exige la clase padre en mi constructor
        super(name); // Se usa super para "cumplir" con el requisito del padre
        this.alcohol = alcohol;
    } 

    info() { // se puede reutilizar el metodo del padre y añadirle algo mas de info
        return super.info() + " " + this.alcohol
    }
}

const beer = new Beer("Budweisser", 6.5);
console.log(beer.info());