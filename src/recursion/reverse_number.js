(function main() {
  console.log(rev(1234));

  function rev(n) {
    const digits = Math.floor(Math.log10(n) + 1);
    // console.log(digits);
    return helper(n, digits);
  }

  function helper(n, digits) {
    console.log();
    if (n % 10 === n) {
      return n;
    }

    const rem = n % 10;
    return (
      rem * Math.floor(Math.pow(10, digits - 1)) +
      helper(Math.floor(n / 10), digits - 1)
    );
  }
})();
