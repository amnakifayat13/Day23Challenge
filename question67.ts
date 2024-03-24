/* Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that 
represents a number (e.g., "5"). Return their sum as a number. .......*/

function mixedTypes(stringNumber: string, number: number): number{
    return Number(stringNumber) + number
}
console.log(mixedTypes("5", 10));


