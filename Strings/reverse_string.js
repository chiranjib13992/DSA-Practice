function reverse(str1) {
    if (str1.length == 0) return '';
    let reversed = [];
    for (let i = str1.length - 1; i >= 0; i--) {
        reversed.push(str1[i]);
    }
    return reversed.join('')
}

function reverse2(str1) {
    let reversed = '';

    for (let i = str1.length - 1; i >= 0; i--) {
        reversed += str1[i];
    }

    return reversed;
}


const benchmark = require("../utils/benchmark");
const testCases = [
    { input: "kattak", expected: "kattak" },
    { input: "hello", expected: "olleh" },
    { input: "abcd", expected: "dcba" },
    { input: "racecar", expected: "racecar" },
    { input: "", expected: "" },
    { input: "a", expected: "a" },
    { input: "12345", expected: "54321" },
    { input: "A", expected: "A" },
    { input: "AbCd", expected: "dCbA" },
    { input: "  hello  ", expected: "  olleh  " },
    { input: "!@#$", expected: "$#@!" },
    { input: "OpenAI", expected: "IAnepO" },
    { input: "Palindrome", expected: "emordnilaP" },
    { input: "Level", expected: "leveL" },
    { input: "a".repeat(1000), expected: "a".repeat(1000) }
];


benchmark(reverse, testCases, "Reverse String Check");
benchmark(reverse2, testCases, "Reverse String Check");


// How Time Complexity O(n) and Space Complexity O(n) for both methods.

/*
 
🔁 Function 1

⏱ Time Complexity

 Let n = str1.length
 
 Step-by-step:

Loop runs from n - 1 to 0

Executes n times

push() is O(1)

So loop cost =
n × O(1) = O(n)

2.reversed.join('')

Joins n characters

Takes O(n)
Total Time:
O(n) + O(n) = O(n)

✔ Final Time Complexity → O(n)

💾 Space Complexity

You create:

reversed array → stores n characters

So extra memory used:

O(n)
✔ Final Space Complexity → O(n)

🔁 Function 2
function reverse2(str1) {
    let reversed = '';

    for (let i = str1.length - 1; i >= 0; i--) {
        reversed += str1[i];
    }

    return reversed;
}

⏱ Time Complexity

At first glance:

Loop runs n times

Looks like O(n)

BUT ⚠ important detail:

Strings in JavaScript are immutable

When you do:

reversed += str1[i];


It does:

Create new string

Copy old string

Add new character

So each concatenation costs O(k)
(where k = current length of reversed)

That means:

1 + 2 + 3 + 4 + ... + n


Which equals:

n(n+1)/2


So actual time complexity:

O(n²)

💾 Space Complexity

Still storing a new string of size n

✔ Space Complexity → O(n)

🏆 Final Comparison
Function	     Time Complexity	  Space Complexity
reverse	           O(n)              	O(n)
reverse2	       O(n²)	            O(n)

 */


