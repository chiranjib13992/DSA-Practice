const benchmark = require("../utils/benchmark");

function charCount(str){
    if(str.length == 0 ) return { }
     let obj = {};
    for (let char of str){
        obj[char] = (obj[char] || 0) + 1
    }

    return obj;  

}

const testCases = [
    { 
        input: "hello", 
        expected: { h: 1, e: 1, l: 2, o: 1 } 
    },
    { 
        input: "aabbcc", 
        expected: { a:2, b:2, c:2 } 
    },
    { 
        input: "AaAa", 
        expected: { A:2, a:2 } 
    },
    { 
        input: "a a b", 
        expected: { a:2, " ":2, b:1 } 
    },
    { 
        input: "1122331", 
        expected: { 1:3, 2:2, 3:2 } 
    },
    { 
        input: "a!b!c!", 
        expected: { a:1, "!":3, b:1, c:1 } 
    },
    { 
        input: "", 
        expected: { }
    },
    { 
        input: "Z", 
        expected: { Z:1 } 
    },
    { 
        input: "JavaScript", 
        expected: { J:1, a:2, v:1, S:1, c:1, r:1, i:1, p:1, t:1 } 
    },
    { 
        input: "Hi, Hi!", 
        expected: { H:2, i:2, ",":1, " ":1, "!":1 } 
    }
];

benchmark(charCount, testCases, "Character Count in String");
console.log(charCount('okk'))