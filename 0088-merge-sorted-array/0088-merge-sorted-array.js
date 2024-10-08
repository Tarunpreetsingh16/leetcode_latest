/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n === 0) return;
    if (m === 0) {
        nums1.forEach((val, idx) => nums1[idx] = nums2[idx]);
        return;
    }

    let idxToBeUpdated = nums1.length - 1;
    
    m--; n--;
    while (m >= 0 || n >= 0) {
        const num1 = m >= 0 ? nums1[m] : Number.NEGATIVE_INFINITY;
        const num2 = n >= 0 ? nums2[n] : Number.NEGATIVE_INFINITY;

        let numToBeAdded = num1;
        if (num1 < num2) {
            numToBeAdded = num2;
            n--;
        }
        else {
            m--;    
        }
        nums1[idxToBeUpdated] = numToBeAdded;
        idxToBeUpdated--;
    }
};