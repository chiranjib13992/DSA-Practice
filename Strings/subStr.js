const benchmark = require("../utils/benchmark");

function checkSubstring(s, sub) {
  if (sub.length === 0) return true;
  if (sub.length > s.length) return false;

  for (let i = 0; i <= s.length - sub.length; i++) {
    let found = true;

    for (let j = 0; j < sub.length; j++) {
      if (s[i + j] !== sub[j]) {
        found = false;
        break;
      }
    }

    if (found) return true;
  }

  return false;
}

const testCases = [
    { input: ["caseSensitive", "case"], expected: true },
  { input: ["hello world", "world"], expected: true },
  { input: ["javascript", "script"], expected: true },
  { input: ["openai", "ai"], expected: true },
  { input: ["abcdef", "gh"], expected: false },
  { input: ["aaaaaa", "aaa"], expected: true },
  { input: ["abc", "abcd"], expected: false }, // case-sensitive check
  { input: ["", ""], expected: true }, // empty substring exists in empty string
  { input: ["", "a"], expected: false },
  { input: ["substring test", "test"], expected: true }
];

benchmark(checkSubstring, testCases, "Check Sub String")
