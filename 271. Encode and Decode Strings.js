class Solution {
  separator;

  constructor() {
    this.separator = ":;";
  }

  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (!strs.length) return [];

    let str = '"';

    for (let i = 0; i < strs.length; i++) {
      if (i === strs.length - 1) {
        str += strs[i] + '"';
      } else {
        str += strs[i] + this.separator;
      }
    }

    return str;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (!str.length) return [];

    const cleanStr = str.replace(/"/g, "");
    const split = cleanStr.split(this.separator);
    return split;
  }
}

const strs = ["neet", "code", "love", "you"];

const encode = new Solution().encode(strs);
console.log(new Solution().decode(encode));
