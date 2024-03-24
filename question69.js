/* Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the
quotient and the remainder. Use an object to return both values.*/
function arithmeticFunc(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(arithmeticFunc(10, 3));
