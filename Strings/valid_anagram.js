function validateAnagram(s, t) {
    if (s.length !== t.length) return false;
    const obj = {};

    for (let char of s) {
        obj[char] = 1;
    }

    for (let char of t) {
        if (obj[char] !== 1) return false;
    }

    return true
}


const a = validateAnagram("silent", "listen");
console.log(a, '0')

