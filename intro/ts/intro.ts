console.log("hello from typescript");

class Drink {
    private name: string; // impedimos que sea accedido de afuera del contexto de la clase con private
    constructor(name: string) {
        this.name = name;
    }
    
    info(): string {
        return this.name;
    }
}

const drink = new Drink("agua");
console.log(drink.info());

// Herencia
class Beer extends Drink {
    private alcohol: number;

    constructor(name: string, alcohol: number) {
        super(name);
        this.alcohol = alcohol;
    }

    info(): string {
        return super.info() + " " + this.alcohol
    }
}

const beer = new Beer("Heineken", 7.1);
console.log(beer.info());

// interface: permite categorizar un objeto. Comportamiento esperado. Tambien puede ser un contrato

interface Product {
    price: number;
    getPrice(): string;
}

class BeerTwo extends Drink implements Product {
    private alcohol: number;
    price: number;

    constructor(name:string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    getPrice(): string {
        return "$" + this.price 
    }
}

class Snack implements Product {
    price: number;
    private name: string;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getPrice(): string {
        return "El precio del snack es: $ " + this.price
    }
}

const products: Product[] = [
    new BeerTwo("Corona", 4.5, 1),
    new Snack("pepito", 2),
    new BeerTwo("Escudo", 4.5, 1),
]

function getPrices(items: Product[]) {
    for(const item of items) {
        console.log(item.getPrice());
        
    }
}

getPrices(products);