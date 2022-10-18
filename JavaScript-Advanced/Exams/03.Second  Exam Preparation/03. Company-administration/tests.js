const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe('Test functionality', () => {

    describe('Testing hiringEmployee functionality', () => {
        it('throw an error if the value of the string position is different from "Programmer"', () => {
            expect(() => companyAdministration.hiringEmployee('Ivo', 'blabla', 10)).to.throw();
        });

        it('return successfully hired message if yearsExperience param are greater than or equal 3', () => {
            expect(companyAdministration.hiringEmployee('Ivo', 'Programmer', 10)).to.equal(`Ivo was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Ivo', 'Programmer', 3)).to.equal(`Ivo was successfully hired for the position Programmer.`);
        });

        it('return not approved message if yearsExperience param are lower than 3', () => {
            expect(companyAdministration.hiringEmployee('Rumen', 'Programmer', 1)).to.equal(`Rumen is not approved for this position.`);
        });
    });

    describe('Testing calculateSalary functionality', () => {
        it('throw an error if the hours are not a number, or are a negative', () => {
            expect(() => companyAdministration.calculateSalary('1')).to.throw();
            expect(() => companyAdministration.calculateSalary(-1)).to.throw();
        });

        it('return salary', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(1.1)).to.equal(16.5);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });

        it('return salary plus bonus', () => {
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        });
    });

    describe('Testing firedEmployee functionality', () => {
        it('throw an error for invalid input', () => {
            expect(() => companyAdministration.firedEmployee('Ivo', 1)).to.throw();
            expect(() => companyAdministration.firedEmployee('1', 1.1)).to.throw();
            expect(() => companyAdministration.firedEmployee('1', -1)).to.throw();
            expect(() => companyAdministration.firedEmployee(1, [])).to.throw();
            expect(() => companyAdministration.firedEmployee(['Ivo'], 'brbr')).to.throw();
            expect(() => companyAdministration.firedEmployee(['Ivo'], -1)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Ivo'], 1.1)).to.throw();
            expect(() => companyAdministration.firedEmployee(['Ivo'], 2)).to.throw();
        });

        it('remove an employee from the array at the given index', () => {
            expect(companyAdministration.firedEmployee(['Ivo', 'Stamo', 'Daro'], 2)).to.equal('Ivo, Stamo');
        });
    });
});