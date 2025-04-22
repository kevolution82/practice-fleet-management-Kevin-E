// Fleet Management System

// Making a Vehicle class so I don’t have to repeat myself later
class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
      this.type = type;
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
    }

    // Add mileage when the vehicle is used.
    drive(distance) {
      this.mileage += distance;
    }

    // Return a clean summary of the vehicle’s info
    getDetails() {
      return `${this.year} ${this.make} ${this.model} (${this.type}) - ${this.mileage} miles driven`;
    }
}

// Making three different vehicles to test things out
const car = new Vehicle("Car", "Toyota", "Corolla", 2020);
const truck = new Vehicle("Truck", "Ford", "F-150", 2018);
const motorcycle = new Vehicle("Motorcycle", "Yamaha", "MT-07", 2022);

// Pretend we took them all for a drive
car.drive(150);
truck.drive(300);
motorcycle.drive(80);

// Show updated info for each vehicle
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());
