const benchmark = require("../utils/benchmark");

//Method 1
function longestWord(str) {
    if (!str) return "";
    let indexes = [-1]; // start boundary before first char

    // Collect space indexes
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            indexes.push(i);
        }
    }

    indexes.push(str.length);

     let maxLength = 0;
    let longestWord = "";

    for (let i = 0; i < indexes.length - 1; i++) {
        let start = indexes[i] + 1;
        let end = indexes[i + 1];

        let word = str.slice(start, end);

        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    }

    //console.log(longestWord, 'indexes')
    return longestWord;

}

// Method 2
function longestWord2(sentence){
    if(!sentence || sentence.trim() === "") return ""

    let words = sentence.trim().split(/\s+/);
    let longestWord = "";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }

    return longestWord;
}

//Method 3
function longestWord3(str) {
    if (!str || str.trim() == "") return "";

    let longest = "";
    let current = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== " ") {
            current += char
        } else {
            if (current.length > longest.length) {
                longest = current
            }
            current = "";
        }

    }
    if (current.length > longest.length) {
        longest = current
    }
    return longest;
}

const testCases = [
    {
        input: "The quick brown fox jumps over the lazy dog",
        expected: "quick"
    },
    {
        input: "JavaScript is powerful and versatile",
        expected: "JavaScript"
    },
    {
        input: "I love programming",
        expected: "programming"
    },
    {
        input: "a bb ccc dddd",
        expected: "dddd"
    },
    {
        input: "Single",
        expected: "Single"
    },
    {
        input: "",
        expected: ""   // edge case: empty string
    },
    {
        input: "   leading and trailing spaces   ",
        expected: "trailing"
    },
    {
        input: "one two three four five",
        expected: "three"  // first longest if tie
    },
    {
        input: "Hello-world test-case example",
        expected: "Hello-world"
    },
    {
        input: "123 4567 89",
        expected: "4567"
    }
];

benchmark(longestWord, testCases, "Test Case 1");
benchmark(longestWord2, testCases, "Test Case 2");
benchmark(longestWord3, testCases, "Test Case 3");

