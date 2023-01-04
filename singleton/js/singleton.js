// El patron Singleton se utiliza para asegurarnos de que exista una sola clase

class Singleton {
    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        this.random = Math.random();
        console.log("entrando a constructor")
        if (Singleton.instance) {
            console.log("ya existe")
            return Singleton.instance;
        }
        console.log("no existe")
        Singleton.instance = this;
    }
}

const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance()
console.log(singleton.random)
console.log(singleton2.random)
console.log(singleton3.random)

//------------------------------------------------------
class WeekDays {
    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    constructor(lang) {
        this.lang = lang; 

        if (WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }
}

const weekDay = new WeekDays("es")
const weekDay2 = new WeekDays()
console.log(weekDay.getDays())
console.log(weekDay2.getDays())