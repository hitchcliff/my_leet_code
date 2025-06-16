const main = (() => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const target = 4; // 3 index

  const ans = search(arr, target, 0);
  console.log(ans);

  function search(arr, target, cursor) {
    if (!arr[target]) {
      return -1;
    }

    if (arr[cursor] === target) {
      return cursor;
    }

    return search(arr, target, cursor + 1);
  }

  //   const ans = fibo(4);
  //   console.log(ans);

  //   function fibo(n) {
  //     if (n < 2) {
  //       return n;
  //     }

  //     return fibo(n - 1) + fibo(n - 2);
  //   }

  //   printN(1);

  //   function printN(n) {
  //     if (n === 6) {
  //       return;
  //     }

  //     console.log(n);
  //     printN(n + 1);
  //     console.log("remove from stack: ", n);
  //   }
})();
