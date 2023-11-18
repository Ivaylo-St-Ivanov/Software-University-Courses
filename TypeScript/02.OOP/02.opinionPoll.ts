class Person {
    name: string
    age: string

    constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }

    personInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

function getPersonInfo(input: string): void {
    const info: string[] = input.split(' ');

    const person = new Person(info[0], info[1]);
    person.personInfo();
}

getPersonInfo('Sofia 33');

