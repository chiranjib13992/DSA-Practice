function isPalidrome(str1, st2) {
    if (str1.length !== st2.length) return false
    const arr1 = [];
    let i = 0;
    for (let char of str1) {
        arr1[i] = char;
        i++;
    }
    let j = (st2.length - 1)
    for (let char of st2) {
        if (char !== arr1[j]) return false
        j--;
    }

    return true;
}

const benchmark = require("../utils/benchmark");

const testCases = [
  { input: ["madam", "madam"], expected: true },
  { input: ["hello", "olleh"], expected: true },
  { input: ["abcd", "dcba"], expected: true },
  { input: ["abcd", "abcd"], expected: false },
  { input: ["racecar", "racecar"], expected: true },
  { input: ["", ""], expected: true },
  { input: ["a", "a"], expected: true },
  { input: ["aa", "aa"], expected: true },
  { input: ["ab", "ba"], expected: false },
  { input: ["Level", "Level"], expected: false },   // case sensitive
  { input: ["level", "level"], expected: true },
  { input: ["12321", "12321"], expected: true },
  { input: ["12345", "54321"], expected: false },
  { input: [" racecar", "racecar"], expected: false }, // leading space
  { input: ["noon", "noon"], expected: true }
];


benchmark(isPalidrome, testCases, "Reverse String Check");
