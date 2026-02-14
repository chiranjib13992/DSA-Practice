//Method 1
function vowelCount(str){
    let count = 0;
   if(str.length == 0) return count;

   const vowels = ['a', 'e', 'i', 'o', 'u'];
   for(let char of str){

       if(vowels.includes(char.toLowerCase())) {
           count ++;
       }
   }

   return count;

}


//method 2
function vowelCount2(str){
    let count = 0;
   if(str.length == 0) return count;

   const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
   for(let char of str){

       if(vowels.has(char.toLowerCase())) {
           count ++;
       }
   }

   return count;

}

const benchmark  = require("../utils/benchmark");

const countData = vowelCount("AEIOU");
const testCases = [
  { input: "hello", expected: 2 },
  { input: "world", expected: 1 },
  { input: "AEIOU", expected: 5 },
  { input: "abcdefghijklmnopqrstuvwxyz", expected: 5 },
  { input: "rhythm", expected: 0 },
  { input: "", expected: 0 },
  { input: "AaEeIiOoUu", expected: 10 },
  { input: "ChatGPT", expected: 1 },
  { input: "12345", expected: 0 },
  { input: "The quick brown fox jumps over the lazy dog", expected: 11 },
  { input: "WHY?", expected: 0 },
  { input: "Beautiful", expected: 5 },
  { input: "MISSISSIPPI", expected: 4 },
  { input: "OpenAI is awesome!", expected: 9 },
  { input: "a".repeat(1000), expected: 1000 }
]
 benchmark(vowelCount, testCases, "Vowel Count");  
  benchmark(vowelCount2, testCases, "Test");    
  
console.log(countData, 'io');
