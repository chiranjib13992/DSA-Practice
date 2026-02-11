// Question Write a function that takes in two strings and returns true if they are anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
const benchmark  = require("../utils/benchmark");

// Method -1 
function validateAnagram(s, t) {
    if (s.length !== t.length) return false;
    const obj = {};

    for (let char of s) {
        obj[char] = (obj[char] || 0) + 1;
    }

    for (let char of t) {
        if (!obj[char]) return false;
        obj[char] --;
    }

    return true
}


const a = validateAnagram("silent", "listen");
console.log(a, '0')


// Method -2 

function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    if(str1.split('').sort().join('') === str2.split('').sort().join('')) return true;
    return false;

}

let a2 = isAnagram("silent", "listen");
console.log(a2 , 'Test')

// function to generate Anagram pairs of given size.
function generateAnagramPair(size) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";

  for (let i = 0; i < size; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }

  // Shuffle to create a valid anagram
  const shuffled = str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return [str, shuffled];
}

console.log(generateAnagramPair(19), 'io')

console.log(generateAnagramPair(21), 'io')
console.log(generateAnagramPair(29), 'io')


const testCases = [
  ["ttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmm", "mmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrsssssssssstttttttttt"],
  ["splipghlntnrtsibfamme", "lhiltifmrpmssgepannbt"],
  ["fwpkdeldfvzrmigokzepipcmfmjgh", "ifcvpzhpjodekmlpgfgimwrfkmzed"],
  ["abcd", "abcd"],
  ["racecar", "racecar"]
];
benchmark(validateAnagram, testCases, "Anagram String Check");
benchmark(isAnagram, testCases, "Anagram  Sorting String Check");


