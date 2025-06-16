const main = (() => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const target = 1;

  const ans = search(arr, target, 0, arr.length - 1);
  console.log(ans);

  function search(arr, target, s, e) {
    if (s > e) {
      return -1;
    }

    const m = s + Math.floor((e - s) / 2);

    if (arr[m] === target) {
      return m;
    }

    if (arr[m] > target) {
      return search(arr, target, s, m - 1);
    }

    return search(arr, target, m + 1, e);
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
