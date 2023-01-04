import { createLogicalAnd } from "typescript";

class SingletonTS {
    private static instance: SingletonTS;
    random: number;

    private constructor() {
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS {
        if (!this.instance) {
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}

const singletonts = SingletonTS.getInstance();
const singletonts2 = SingletonTS.getInstance();
console.log(singletonts.random)
console.log(singletonts2.random)