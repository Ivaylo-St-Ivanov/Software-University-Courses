class Car {
    public brand: string
    public model: string
    public horsePower: number

    constructor() {
        this.brand = '',
        this.model = '',
        this.horsePower = 0
    }

    get getCarInfo() {
        return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`;
    }

    set setCarInfo(input: string) {
        const infoArr = input.split(' ');
        this.brand = infoArr[0];
        this.model = infoArr[1];
        this.horsePower = Number(infoArr[2]);
    }
}

const car1 = new Car();
car1.setCarInfo = 'Chevrolet Impala 390';
console.log(car1.getCarInfo);