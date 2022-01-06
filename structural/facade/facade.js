class Сonveyor {

	setBody() {
		console.log('Body set!');
	}

	getEngine() {
        console.log('Dismantle Engine!');
    }

	setEngine() {
		console.log('Engine set!');
	}

	setInterior() {		
		console.log('Added interior!');
	}

	getInterior() {
		console.log('Update interior!');
	}

	setExterior() {
		console.log('Exterior added!');
	}

	setWheels() {
		console.log('Wheels!');
	}

	addElectronics() {
		console.log('Added electronics!');
	}

	paint() {
		console.log('Car painted!');
	}
}

class СonveyorFacade {
	constructor(car) {
		this.car = car;
	}

	assembleCar() {
		this.car.setBody();
		this.car.setEngine();
		this.car.setInterior();
		this.car.setExterior();
		this.car.setWheels();
		this.car.addElectronics();
		this.car.paint();
	}
	changeEngine() {
		this.car.getEngine();
		this.car.setEngine();
	}
	changeInterior() {
		this.car.getInterior();
		this.car.setInterior();
	}
}
/*How it works*/
const conveyor = new ConveyourFacade(new Сonveyor());

let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();
