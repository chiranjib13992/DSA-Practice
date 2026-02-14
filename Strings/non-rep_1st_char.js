const benchmark = require("../utils/benchmark");

function firstNonRepeatingChar(s) {
    if (!s || s.length === 0) return -1;

    const freq = {};

    for (let char of s) {
        freq[char.toLowerCase()] = (freq[char.toLowerCase()] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}


const testCases = [
  { input: "leetcode", expected: 0 },        // 'l'
  { input: "loveleetcode", expected: 2 },    // 'v'
  { input: "aabb", expected: -1 },           // no unique character
  { input: "aabbc", expected: 4 },           // 'c'
  { input: "abcabcde", expected: 6 },        // 'd'
  { input: "xxyz", expected: 2 },            // 'y'
  { input: "a", expected: 0 },               // single character
  { input: "", expected: -1 },               // empty string
  { input: "aaabcccdeeef", expected: 3 },   
  { input: "aAbBABac", expected: 7 }        
];

benchmark(firstNonRepeatingChar, testCases, "First Non-Repeating Character Check");

