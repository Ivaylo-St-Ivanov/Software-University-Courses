function smallestOfThreeNumbers(num1, num2, num3) {

    let smallestNum = function (num1, num2, num3) {

        let smallest;

        if (num1 < num2) {
            num1 < num3 ? smallest = num1 : smallest = num3;
        } else {
            num2 < num3 ? smallest = num2 : smallest = num3;
        }

        return smallest;
    }

    console.log(smallestNum(num1, num2, num3));
}
smallestOfThreeNumbers(600, 342, 123);