/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        const num = nums[right];
        if (num != val) {
            nums[left] = num;
            left++;
            k++;
        }
        right++;
    }
    return k;
};