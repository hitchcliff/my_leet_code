/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const x = nums1.length;
  const y = nums2.length;

  let low = 0;
  let high = x;
  const combinedLength = x + y;
  while (low <= high) {
    // pattern: (x + 0) / 2;
    let partX = Math.floor((low + high) / 2);
    // pattern: (x + y + 1) / 2 - partition of x
    let partY = Math.floor((combinedLength + 1) / 2 - partX);

    const leftX = partX === 0 ? Number.NEGATIVE_INFINITY : nums1[partX - 1];
    const rightX = partX === x ? Number.POSITIVE_INFINITY : nums1[partX];

    const leftY = partY === 0 ? Number.NEGATIVE_INFINITY : nums2[partY - 1];
    const rightY = partY === y ? Number.POSITIVE_INFINITY : nums2[partY];

    console.log(leftX, rightX, leftY, rightY);

    // check if median if found
    if (leftX <= rightY && leftY <= rightX) {
      // if even
      if (combinedLength % 2 === 0) {
        const answer = (Math.max(leftX, leftY) + Math.min(rightX, rightY)) / 2;
        console.log("Answer EVEN: ", answer);

        return answer;
      } else {
        // if odd
        const answer = Math.max(leftX, leftY);
        console.log("Answer ODD: ", answer);
        return answer;
      }
    } else if (leftX > rightY) {
      high = partX - 1;
    } else {
      low = partX + 1;
    }
  }

  console.log(nums1, nums2, combinedLength);
};

// const n1 = [1,2];
// const n2 = [3,4]

const n1 = [1, 3];
const n2 = [2];
console.log(findMedianSortedArrays(n1, n2));
