let calculator = {
    addition: function (val1, val2) {
        return val1 + val2;
    },
    subtraction: (val1, val2) => {
        return val1 - val2
    },
    multiplication: (val1, val2) => {
        return val1 * val2;
    },
    division
}

function division(val1, val2) {
    return val1 / val2;
}

console.log(calculator.addition(1,2));
console.log(calculator.subtraction(5,2));
console.log(calculator.multiplication(3, 1));
console.log(calculator.division(15, 5));

// division(5,2);