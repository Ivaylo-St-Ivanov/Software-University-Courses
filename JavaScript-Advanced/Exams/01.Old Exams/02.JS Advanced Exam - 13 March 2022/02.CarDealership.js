class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {

        const carIndex = this.availableCars.findIndex(x => x.model == model);
        const car = this.availableCars[carIndex];
        let sum = 0;

        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        if (car.mileage <= desiredMileage) {
            sum = car.price;
        } else if (car.mileage - desiredMileage <= 40000) {
            sum = car.price * 0.95;
        } else { 
            sum = car.price * 0.9;
        }
        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({ model, horsepower: car.horsepower, soldPrice: sum });
        this.totalIncome += sum;

        return `${model} was sold for ${sum.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length) {
            const availableCarsOutput = ['-Available cars:'];
            this.availableCars.forEach(el => availableCarsOutput.push(`---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`));
            return availableCarsOutput.join('\n');
        } else {
            return 'There are no available cars';
        }
    }

    salesReport(criteria) {
        let sorted;
        if (criteria == 'horsepower') {
            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria == 'model') {
            sorted = this.soldCars.sort((a, b) => a['model'].localeCompare(b['model']));
        } else {
            throw new Error('Invalid criteria!');
        }

        let output = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${sorted.length} cars sold:`];
        sorted.forEach(el => output.push(`---${el.model} - ${el.horsepower} HP - ${el.soldPrice.toFixed(2)}$`));

        return output.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));


