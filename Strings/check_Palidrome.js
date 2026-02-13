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

const isPal = isPalidrome("madam", "madam")
console.log(isPal, 'test case')

const testCases = [
    ["madam", "madam"],
    ["hello", "olleh"],
    ["abcd", "dcba"],
    ["abcd", "abcd"],
    [" racecar", "racecar"]
];

benchmark(isPalidrome, testCases, "Reverse String Check");
