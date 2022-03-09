class Car{
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.running = false;
        this.speed = 0;
    }

    turnOn() {
        this.running = true;
    }

    turnOff() {
        this.running = false;
    }

    changeSpeed(accel) {
        this.speed += accel;
    }
}

let car1 = new Car(2021, "Dodge", "Charger-Hellcat");
let car2 = new Car(2021, "Tesla", "Model X");
let car3 = new Car(2018, "Ford", "Explorer");

let x = car1.turnOn();
let y = car1.changeSpeed(100);
let i = car1.changeSpeed(50);
let carOff = car1.turnOff;

