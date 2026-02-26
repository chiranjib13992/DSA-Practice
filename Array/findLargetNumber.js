function findLargest(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([4, 7, 1, 9, 3])); // Output: 9
