/* 

Write a function countVowels(str) that returns the number of vowels in a string.
Use a nested function to check whether a character is a vowel. 

*/

const benchmark = require("../utils/benchmark");

function countVowels(str){

    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    function isVowel(char){
        return vowels.includes(char.toLowerCase());
    }

    for(let char of str){
        isVowel(char) && vowelCount++;
    }
 return vowelCount;
}

const testCases = [
  // Basic cases
  { input: "hello", expected: 2 },
  { input: "javascript", expected: 3 },

  // All vowels
  { input: "aeiou", expected: 5 },

  // Uppercase vowels
  { input: "AEIOU", expected: 5 },

  // Mixed case
  { input: "HeLLo WoRLD", expected: 3 },

  // No vowels
  { input: "rhythm", expected: 0 },

  // Empty string
  { input: "", expected: 0 },

  // Spaces only
  { input: "     ", expected: 0 },

  // Numbers included
  { input: "h3ll0", expected: 0 },

  // Special characters
  { input: "!@#$%^&*", expected: 0 },

  // Long string
  { input: "The quick brown fox jumps over the lazy dog", expected: 11 },

  // Single character vowel
  { input: "a", expected: 1 },

  // Single character consonant
  { input: "b", expected: 0 },

  // Repeated vowels
  { input: "aaaaaa", expected: 6 },

  // Unicode edge (should count only english vowels)
  { input: "héllo", expected: 1 } 
];

benchmark(countVowels, testCases, 'Vowel Check')
