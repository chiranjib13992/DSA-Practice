function benchmark(fn, testCases, label = "Test") {
  // Force garbage collection if available (node --expose-gc)
  if (global.gc) global.gc();

  const startMemory = process.memoryUsage().heapUsed;
  const startTime = process.hrtime.bigint();

  for (const test of testCases) {
    fn(...test);
  }

  const endTime = process.hrtime.bigint();
  const endMemory = process.memoryUsage().heapUsed;

  const timeMs = Number(endTime - startTime) / 1_000_000;
  const memoryKb = (endMemory - startMemory) / 1024;

  console.log(`\n📊 ${label} Benchmark`);
  console.log(`⏱ Time: ${timeMs.toFixed(3)} ms`);
  console.log(`💾 Memory: ${memoryKb.toFixed(2)} KB`);
}

module.exports = benchmark;
