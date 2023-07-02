var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isEven = false;
var num = 3;
var string = '';
var pesho = {
    name: 'Pesho',
    age: 21
};
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    AnotherUserClass.prototype.getUserName = function () {
        return this.firstName;
    };
    return AnotherUserClass;
}());
var anotherUserList = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Mitko', id: 2 },
    { firstName: 'Maria', id: 3 },
];
anotherUserList.forEach(function (user) {
    console.log("".concat(user.id, " -> ").concat(user.firstName));
});
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.speak = function () {
        console.log('Hello!');
    };
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return Person;
}(Human));
var ivan = new Person('Ivan', 33);
ivan.speak();
function getIdentity(id) {
    console.log(id);
}
getIdentity('123');
getIdentity(123);
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 0] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 1] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 2] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
// if ( x == PaymentStatus.Failed) {
//     .....
// }
