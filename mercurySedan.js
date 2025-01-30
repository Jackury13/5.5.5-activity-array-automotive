// This includes the vehicle class as a module
const VehicleModule = require('./vehicleBaseClass.js');

// This shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make);

// Car class extends Vehicle class correctly
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            console.log("Service required.");
            return this.scheduleService;
        } else {
            console.log("No service needed yet.");
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("Engine has started.");
            return this.started = true;
        } else {
            console.log("No fuel.");
            return this.started = false;
        }
    }

    stop() {
        this.started = false;
        console.log("Engine has stopped.");
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger += num;
                console.log(`Passengers loaded: ${this.passenger}`);
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " does not have enough space for all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full.");
        }
    }
}

// Creating instances and testing them
let myCar = new Car("Mercury", "Rad Sedan", "2002", "White", 50000);
myCar.start();
myCar.loadPassenger(5);
myCar.stop();
myCar.checkService();

console.log(myCar);

// Create at least two more instances of the Car class
let car2 = new Car("Toyota", "Camry", "2015", "Blue", 25000);
let car3 = new Car("Ford", "Mustang", "2018", "Red", 15000);

car2.start();
car2.loadPassenger(3);
car2.checkService();
console.log(car2);

car3.start();
car3.loadPassenger(2);
car3.checkService();
console.log(car3);