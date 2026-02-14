function isReverse(str1, str2) {
    if (str1.length !== str2.length) return false;

    let i = str1.length - 1;
    for (let char of str1) {
        if (str2.at(i).toUpperCase() !== char.toUpperCase()) return false;
        i--;
    }
    return true
}

let a2 = isReverse("kattak", "kattaK");
console.log(a2, 'ooo')

const benchmark = require("../utils/benchmark");
const testCases = [
  { input: ["kattak", "kattak"], expected: true },
  { input: ["hello", "olleh"], expected: true },
  { input: ["abcd", "dcba"], expected: true },
  { input: ["abcd", "abcd"], expected: false },
  { input: ["racecar", "racecar"], expected: true },
  { input: ["", ""], expected: true },
  { input: ["a", "a"], expected: true },
  { input: ["a", "b"], expected: false },
  { input: ["12345", "54321"], expected: true },
  { input: ["OpenAI", "IAnepO"], expected: true },
  { input: ["Level", "leveL"], expected: true },
  { input: ["hello", "hello "], expected: false },
  { input: ["!@#", "#@!"], expected: true },
  { input: ["abc", "cbaa"], expected: false },
  { input: ["abcd", "dcbb"], expected: false }
];

benchmark(isReverse, testCases, "Reverse String Check");

