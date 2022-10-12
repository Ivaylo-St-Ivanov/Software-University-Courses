function getPerson() {

    'use strict';
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    const personsArray = [];

    personsArray.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    personsArray.push(new Person('SoftUni'));
    personsArray.push(new Person('Stephan', 'Johnson', 25));
    personsArray.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return personsArray;
}

console.log(getPerson());