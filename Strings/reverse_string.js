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
  ["kattak", "kattak"],
  ["hello", "olleh"],
  ["abcd", "dcba"],
  ["abcd", "abcd"],
  ["racecar", "racecar"]
];
//benchmark(isReverse, testCases, "Reverse String Check");

