let isEven: boolean = false;
let num: number = 3;
let string: string = '';

type User = {
    name: string;
    age: number;
};

const pesho = {
    name: 'Pesho',
    age: 21
} as User;

interface AnotherUser {
    firstName: string,
    id: number

    getUserName: () => string;
}

class AnotherUserClass implements AnotherUser {
    firstName: string;
    id: number;

    getUserName() {
        return this.firstName;
    }
}

const anotherUserList = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Mitko', id: 2 },
    { firstName: 'Maria', id: 3 },
] as AnotherUser [];

anotherUserList.forEach((user) => {
    console.log(`${user.id} -> ${user.firstName}`);
});


class Human {
    speak() {
        console.log('Hello!');
    }
}

class Person extends Human {
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age;
    }
}

const ivan = new Person('Ivan', 33);
ivan.speak();

function getIdentity<T>(id: T) {
    console.log(id);
}

getIdentity<string>('123');
getIdentity<number>(123);

enum PaymentStatus {
    Failed,
    Successful,
    Pending
}

// if ( x == PaymentStatus.Failed) {
//     .....
// }