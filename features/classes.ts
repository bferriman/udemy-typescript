// Method Modifiers:
// public: Method can be called outside of the class. This is the default if no modifier is specified.
// private: Method can only be called inside of the class.
// protected: Method can only be called inside of the class or its sub-classes.

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep beep!");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vrooom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "silver");
car.startDrivingProcess();
