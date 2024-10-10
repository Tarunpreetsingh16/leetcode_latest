/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[left] != nums[right]) {
            nums[++left] = nums[right];
            k++;
        }
        right++;
    }
    return k;
};