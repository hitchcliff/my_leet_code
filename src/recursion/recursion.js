const main = (() => {
  printN(1);

  function printN(n) {
    if (n === 6) {
      return;
    }

    console.log(n);
    printN(n + 1);
    console.log("remove from stack: ", n);
  }
})();
