class Car {

	constructor() {
		this.price = 10000;
		this.model = 'Car'
	}
  
	getPrice() {
		return this.price;
	}
  
	getDescription() {
		return this.model
	}
}

class Tesla extends Car {

	constructor() {
		super();
		this.price = 25000;
		this.model = 'Tesla';
	}
}

class Autopilot {
	constructor(car) {
		this.car = car;
  	}

	getPrice() {
		return this.car.getPrice() + 5000;
	}
  
	getDescription() {
		return `${this.car.getDescription()} with autopilot`;
	}
}

class Parktronic {
	constructor(car) {
		this.car = car;
	}

	getPrice() {
		return this.car.getPrice() + 3000;
	}
  
	getDescription() {
		return `${this.car.getDescription()} with parktronic`;
	}
}

/*How it works*/

const tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);
console.log(tesla.getPrice(), tesla.getDescription());

const tesla2 = new Tesla();
tesla2 = new Autopilot(tesla);
console.log(tesla2.getPrice(), tesla2.getDescription())
