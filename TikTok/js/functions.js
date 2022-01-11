//Simple Function (1 Name)
function hello() {
    console.log("Hello Akilesh!");
}

hello();
//Any Name
function hello2(name) {
    console.log("Hi " + name);
}

hello2("Akilesh!");

//Question 2

function annoyingGreet(name, count) {
    let num = 0
    while (num < count) {
        hello2(name);
        num++;
    }
}

annoyingGreet("Akilesh", 20);

//Question 3
function sumOfNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}

console.log(sumOfNumbers(3, 5));

//Question 4
function square(numero) {
    let result3 = numero * numero;
    return result3;
}

console.log(square(4));

//Question 5
function sumOfSquares(numero1, numero2) {
    let result4 = sumOfNumbers(square(numero1), square(numero2));
    return result4;
}
console.log(sumOfSquares(2, 4));

//Question 6
function calculateHypotenuse(_numnum1, _numnum2) {
    let result5 = Math.sqrt(sumOfSquares(_numnum1, _numnum2));
    return result5;
}
console.log(calculateHypotenuse(4, 3));