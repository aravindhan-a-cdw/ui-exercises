
function displayNumbersUpto100() {
    for (let index = 1; index != 101; ++index) {
        console.log(index);
    }
}

const displayDate = () => {
    let date = new Date()
    let [day, month, year] = [date.getDate().toString().padStart(2, "0"), date.getMonth().toString().padStart(2, "0"), date.getFullYear()]
    console.log(`Date is: ${day}/${month}/${year}`)
}

function celsiusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

function reverseString(normalString){
    return normalString.split("").reverse().join("");
}

function getAverage(numbers){
    return numbers.reduce((total, number) => total + number, 0)/numbers.length;
}

// displayNumbersUpto100()
// displayDate()

// console.log(celsiusToFahrenheit(37));
// console.log(reverseString("Hello World"));
// console.log(getAverage([1,2,3,4,5,6,7,8]));

