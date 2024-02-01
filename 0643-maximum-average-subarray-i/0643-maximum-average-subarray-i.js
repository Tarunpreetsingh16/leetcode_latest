/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0
    let i = 0
    while (i < k) {
        sum += nums[i]
        i++
    }
    let average = sum / k

    while (i < nums.length) {
        sum = (sum - nums[i - k]) + nums[i]
        average = Math.max(average, sum / k)
        i++
    }
    return average
};