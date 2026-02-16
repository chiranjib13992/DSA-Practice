const benchmark = require("../utils/benchmark");

function removeDup(str) {
    const charSet = new Set();
    let result = '';

    for(let char of str){
        if(!charSet.has(char)){
            charSet.add(char);
            result += char
        }
    }
    return result;
}

const testCases = [
  { input: "abcabc", expected: "abc" },
  { input: "aaaa", expected: "a" },
  { input: "aabbcc", expected: "abc" },
  { input: "abca", expected: "abc" },
  { input: "programming", expected: "progamin" },
  { input: "hello world", expected: "helo wrd" },
  { input: "1122334455", expected: "12345" },
  { input: "a1b2c3a1b2", expected: "a1b2c3" },
  { input: "AaAaBbBb", expected: "AaBb" },
  { input: "", expected: "" }
];

benchmark(removeDup, testCases, "Remove Drop");
