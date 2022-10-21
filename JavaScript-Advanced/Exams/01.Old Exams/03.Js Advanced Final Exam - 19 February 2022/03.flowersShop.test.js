const { expect } = require('chai');
const { flowerShop } = require('./03.flowersShop');

describe('Testing flowerShop functionality', () => {
    describe('Testing calcPriceOfFlowers functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => {flowerShop.calcPriceOfFlowers(1, 'ab', 1)}).to.throw();
            expect(() => {flowerShop.calcPriceOfFlowers(1, 1, 'ab')}).to.throw();
            expect(() => {flowerShop.calcPriceOfFlowers(1, 'ab', 'ab')}).to.throw();
            expect(() => {flowerShop.calcPriceOfFlowers('ab', 'ab', 1)}).to.throw();
        });

        it('returns the multiplies price and quantity', () => {
            expect(flowerShop.calcPriceOfFlowers('ab', 2, 5)).to.equal(`You need $10.00 to buy ab!`);
            expect(flowerShop.calcPriceOfFlowers('ab', 0, 5)).to.equal(`You need $0.00 to buy ab!`);
            expect(flowerShop.calcPriceOfFlowers('ab', 1, 5)).to.equal(`You need $5.00 to buy ab!`);
        });
    });

    describe('Testing checkFlowersAvailable functionality', () => {
        it('return special message if flower is available in the array', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'b' , 'c'])).to.equal(`The a are available!`);
            expect(flowerShop.checkFlowersAvailable('c', ['a', 'b' , 'c'])).to.equal(`The c are available!`);
        });

        it('return special message if flower is not exist in the array', () => {
            expect(flowerShop.checkFlowersAvailable('x', ['a', 'b' , 'c'])).to.equal(`The x are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('y', ['a', 'b' , 'c'])).to.equal(`The y are sold! You need to purchase more!`);
        });
    });
    
    describe('Testing sellFlowers functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => {flowerShop.sellFlowers(1, ['a', 'b' , 'c'])}).to.throw();
            expect(() => {flowerShop.sellFlowers(['a', 'b' , 'c'], '1')}).to.throw();
            expect(() => {flowerShop.sellFlowers(true, 1)}).to.throw();
        });

        it('return result', () => {
            expect(flowerShop.sellFlowers(['a', 'b' , 'c'], 1)).to.equal(`a / c`);
        });
    });
}); 
