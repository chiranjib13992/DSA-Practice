function benchmark(fn, testCases, label = "Test") {
  if (global.gc) global.gc();

  const startMemory = process.memoryUsage().heapUsed;
  const startTime = process.hrtime.bigint();

  let allPassed = true;

  testCases.forEach((test, index) => {
    const actual = Array.isArray(test.input)
      ? fn(...test.input)
      : fn(test.input);
    const expected = test.expected;

    const isEqual =
      typeof actual === "object" && actual !== null
        ? JSON.stringify(actual) === JSON.stringify(expected)
        : actual === expected;

    if (!isEqual) {
      allPassed = false;
      console.log(`❌ Test case failed at index ${index}`);
      console.log(`   Input: ${JSON.stringify(test.input)}`);
      console.log(`   Expected: ${expected}`);
      console.log(`   Got: ${actual}\n`);
    }
  });

  const endTime = process.hrtime.bigint();
  const endMemory = process.memoryUsage().heapUsed;

  const timeMs = Number(endTime - startTime) / 1_000_000;
  const memoryKb = (endMemory - startMemory) / 1024;

  console.log(`\n📊 ${label} Benchmark`);

  if (allPassed) {
    console.log("✅ All test cases passed!");
  }

  console.log(`⏱ Time: ${timeMs.toFixed(3)} ms`);
  console.log(`💾 Memory: ${memoryKb.toFixed(2)} KB`);
}

module.exports = benchmark;
