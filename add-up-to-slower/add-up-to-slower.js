function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// console.log(addUpTo(3));

// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

/*
  >>>>>> My Notes <<<<<<<<

  //lot of operations
    // n additions and n assignments @ 2 place
    // n comparisons

  // O(n) => Number of operations is (eventually) bounded by a multiple of n (say, 10n)

*/