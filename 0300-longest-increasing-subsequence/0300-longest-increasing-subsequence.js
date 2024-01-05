/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = Array.from({length: nums.length}, () => 1);
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        let j = 0;
        while (j < i) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
            j++;
        }
        max = Math.max(dp[i], max);
    }
    return max;
};