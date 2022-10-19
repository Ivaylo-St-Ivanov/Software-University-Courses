const { expect } = require('chai');
const { carService } = require('./03.carService');

describe('Testing carService functionality', () => {

    describe('Testing isItExpensive functionality', () => {
        it('return special message if issue is "Engine" or "Transmission"', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });

        it('return other message if issue is different', () => {
            expect(carService.isItExpensive('brbr')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('Testing discount functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => carService.discount('1', 10)).to.throw();
            expect(() => carService.discount(1, '10')).to.throw();
            expect(() => carService.discount('1', '10')).to.throw();
            expect(() => carService.discount([], 10)).to.throw();
            expect(() => carService.discount(1, true)).to.throw();
        });

        it('discount percentage is 15 if num of parts is between 3 and 7', () => {
            expect(carService.discount(3, 10)).to.equal(`Discount applied! You saved ${(15 / 100) * 10}$`);
            expect(carService.discount(5, 10)).to.equal(`Discount applied! You saved ${(15 / 100) * 10}$`);
            expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved ${(15 / 100) * 10}$`);
        });

        it('discount percentage is 30 if num of parts is more than 7', () => {
            expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved ${(30 / 100) * 10}$`);
            expect(carService.discount(20, 10)).to.equal(`Discount applied! You saved ${(30 / 100) * 10}$`);
        });

        it('return special message if num of parts is 2 or less', () => {
            expect(carService.discount(2, 10)).to.equal(`You cannot apply a discount`);
        });
    });
    
    describe('Testing partsToBuy functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => carService.partsToBuy(1, '10')).to.throw();
            expect(() => carService.partsToBuy('1', [])).to.throw();
            expect(() => carService.partsToBuy([], 10)).to.throw();
        });

        it('return 0 if parts catalog is empty', () => {
            expect(carService.partsToBuy([], [{}])).to.equal(0);
        });

        it('return total price of all parts needed', () => {
            expect(carService.partsToBuy([{ part: "drdr", price: 10 }], ["drdr"])).to.equal(10);
        });
    });
});