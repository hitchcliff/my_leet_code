(function main() {
  console.log(rev(1234));
  //   console.log(isPalindrome(123432));

  function rev(n) {
    // counts the digit of the number
    const digits = Math.floor(Math.log10(n) + 1);
    return helper(n, digits);
  }

  function helper(n, digits) {
    if (n % 10 === n) {
      return n;
    }

    // get the last digit 1234 = 4
    const rem = n % 10;

    // 4 * 1000 + F(123)
    // 4 * 1000 + 3 * 100 + 2 * 10 + 1 * 1
    return (
      rem * Math.floor(Math.pow(10, digits - 1)) +
      helper(Math.floor(n / 10), digits - 1)
    );
  }

  function isPalindrome(n) {
    return n === rev(n);
  }
})();
