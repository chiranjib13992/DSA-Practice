const benchmark = require("../utils/benchmark");

function firstCap(str) {
    if (!str) return "";

    let result = "";
    let capitalizeNext = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result += " ";
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += str[i].toUpperCase();
            capitalizeNext = false;
        } else {
            result += str[i];
        }
    }

    return result; 
}


const testCases = [
    { input: "hello world", expected: "Hello World" },
    { input: "javascript is fun", expected: "Javascript Is Fun" },
    { input: "openai chatgpt", expected: "Openai Chatgpt" },
    { input: "a b c", expected: "A B C" },
    { input: "multiple   spaces", expected: "Multiple   Spaces" }, // preserve spaces
    { input: " already capitalized", expected: " Already Capitalized" },
    { input: "123 hello", expected: "123 Hello" },
    { input: "hello-world test", expected: "Hello-world Test" },
    { input: "", expected: "" },
    { input: "z", expected: "Z" },
    { input: "hELLO wORLD", expected: "HELLO WORLD" },
    { input: "  leading and trailing  ", expected: "  Leading And Trailing  " },
    { input: "one\ttwo three", expected: "One\tTwo Three" }, // tab space
    { input: "line\nbreak test", expected: "Line\nBreak Test" }, // newline
    { input: "mixed CASE input", expected: "Mixed CASE Input" }
];
firstCap("jdods is fun");

benchmark(firstCap, testCases, "First Capital Letter Check");