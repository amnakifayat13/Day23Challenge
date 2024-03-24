/* Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
Round the result to two decimal places.*/
function multiplyingDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyingDecimals(0.56, 0.26));
