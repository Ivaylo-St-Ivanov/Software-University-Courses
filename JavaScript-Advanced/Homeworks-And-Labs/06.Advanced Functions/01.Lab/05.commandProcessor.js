function solution() {

    'use strict';
    let state = '';

    return {
        append(string) {
            state = state + string;
        },
        removeStart(n) {
            state = state.slice(n);
        },
        removeEnd(n) {
            state = state.slice(0, -n);
        },
        print() {
            console.log(state);
        }
    }
}
let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();