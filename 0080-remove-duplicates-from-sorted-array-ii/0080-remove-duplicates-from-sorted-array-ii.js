/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1, l = 0, r = 1, swaps = 1;
    const DUPLICATES_ALLOWED = 2;

    while (r < nums.length) {
        const leftNum = nums[l], rightNum = nums[r];

        if (leftNum === rightNum) {
            if (count < DUPLICATES_ALLOWED) {
                nums[l + 1] = rightNum;
                count++;
                swaps++;
            }
            r++;
        }
        else {
            l += count;
            nums[l] = rightNum;
            swaps++;
            count = 1;
            r++;
        }
    }
    return swaps;
};