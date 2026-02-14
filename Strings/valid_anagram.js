// Question Write a function that takes in two strings and returns true if they are anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
const benchmark  = require("../utils/benchmark");

// Method -1 
function validateAnagram(s, t) {
    if (s.length !== t.length) return false;
    const obj = {};

    for (let char of s) {
        obj[char.toLowerCase()] = (obj[char.toLowerCase()] || 0) + 1;
    }

    for (let char of t) {
        if (!obj[char.toLowerCase()]) return false;
        obj[char.toLowerCase()] --;
    }

    return true
}


// Method -2 

function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    if(str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')) return true;
    return false;

}


const testCases = [
  { input: ["listen", "silent"], expected: true },
  { input: ["triangle", "integral"], expected: true },
  { input: ["apple", "papel"], expected: true },
  { input: ["rat", "car"], expected: false },
  { input: ["hello", "billion"], expected: false },
  { input: ["", ""], expected: true },
  { input: ["a", "a"], expected: true },
  { input: ["a", "b"], expected: false },
  { input: ["Dormitory", "dirtyroom"], expected: true },
  { input: ["Conversation", "Voicesranton"], expected: true },
  { input: ["Astronomer", "Moonstarer"], expected: true },
  { input: ["School master", "The classroom"], expected: true },
  { input: ["Debit Card", "Bad Credit"], expected: true },
  { input: ["The eyes", "They see"], expected: true },
  { input: ["Night", "Thingg"], expected: false },
  { input: ["abcd", "abc"], expected: false },
  { input: ["anagram", "nagaram"], expected: true },
  { input: ["William Shakespeare", "I am a weakish speller"], expected: true },
  { input: ["123", "321"], expected: true },
  { input: ["123", "322"], expected: false }
];

benchmark(isAnagram, testCases, "Anagram String Check");
benchmark(validateAnagram, testCases, "Anagram  Sorting String Check");


