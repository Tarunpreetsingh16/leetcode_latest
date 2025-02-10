/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = nums1.length - 1
    while (i >= 0) {
        const num1 = m - 1 >= 0 ? nums1[m - 1] : -Infinity
        const num2 = n - 1 >= 0 ? nums2[n - 1] : -Infinity
        if (num1 > num2) {
            nums1[i] = num1
            m--
        }
        else {
            nums1[i] = num2
            n--
        }
        i--
    }
};