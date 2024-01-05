/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0, r = 1, count = 1, swaps = 1;

    while(r < nums.length) {
        const leftChar = nums[l];
        const rightChar = nums[r];

        if (leftChar === rightChar) {
            if (count < 2) {
                nums[l+1] = nums[r]
                count++, r++
                swaps++
            } else {
                r++
            }
        } else {
            l += count < 2 ? 1 : 2
            nums[l] = nums[r]
            r++
            count = 1
            swaps++
        }
    }
    return swaps;
};  