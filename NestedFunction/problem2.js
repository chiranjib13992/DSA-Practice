/*

Write a function isPalindromeNumber(num) that checks whether a number is palindrome.
Use a nested function to reverse the number.

*/

const benchmark = require("../utils/benchmark");

function isPalindromeNumber(num) {
    function isPalidrome(reverse, original) {
        return reverse == original
    }
    let nn = num.toString()
    let reverse = '';
    let i = nn.length - 1;
    for (let i = nn.length - 1; i >= 0; i--) {
    reverse += nn[i];
}
    return isPalidrome(reverse, nn);
}

const testCases = [

    // Basic palindrome numbers
    { input: 121, expected: true },
    { input: 1221, expected: true },
    { input: 7, expected: true },

    // Basic non-palindrome numbers
    { input: 123, expected: false },
    { input: 10, expected: false },

    // Even length palindrome
    { input: 2442, expected: true },

    // Odd length palindrome
    { input: 12321, expected: true },

    // Large palindrome
    { input: 123454321, expected: true },

    // Large non-palindrome
    { input: 123456789, expected: false },

    // Number ending with zero (important edge case)
    { input: 1001, expected: true },
    { input: 100, expected: false },

    // Zero case
    { input: 0, expected: true },

    // Negative numbers (should usually be false)
    { input: -121, expected: false },

    // Very large number
    { input: 1000000000000000001, expected: true }

];

console.log(1000000000000000001 === 1000000000000000000);

benchmark(isPalindromeNumber, testCases, 'Palidrome checl')