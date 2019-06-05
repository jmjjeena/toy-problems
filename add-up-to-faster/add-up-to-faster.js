function addUpTo(n) {
  return n * (n + 1) / 2;
}

// console.log(addUpTo(3));

// var time1 = performance.now();
// addUpTo(1000000000);
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

/*
  >>>>>>>> My Notes <<<<<<<<

  // Only 3 operations
    // *
    // +
    // /

  // Since always 3 operations
    // o(1) -> Constant Time
*/