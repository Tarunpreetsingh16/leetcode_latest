/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroTracker = 0
    while (zeroTracker < nums.length && nums[zeroTracker] != 0) {
        zeroTracker++
    }

    let nonZeroTracker = zeroTracker
    while (nonZeroTracker < nums.length && nums[nonZeroTracker] === 0) {
        nonZeroTracker++
    }

    while (nonZeroTracker < nums.length) {
        if (nums[nonZeroTracker] != 0) {
            nums[zeroTracker] = nums[nonZeroTracker]
            nums[nonZeroTracker] = 0 
            zeroTracker++
        } 
        nonZeroTracker++
    }
};